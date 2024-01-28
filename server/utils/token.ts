require("dotenv").config();
import jwt, { Secret } from "jsonwebtoken";
import { Response } from "express";
import { IUser } from "../models/user.model";
import { redis } from "./redis";

//activation token
interface IActivationToken {
  token: string;
  activationCode: string;
}
export const createActivationToken = (user: any): IActivationToken => {
  const activationCode = Math.floor(1000 + Math.random() * 9000).toString();

  const token = jwt.sign(
    {
      user,
      activationCode,
    },
    process.env.ACTIVATION_SECRET as Secret,
    {
      expiresIn: "500m",
    }
  );

  return { token, activationCode };
};

//
interface ITokenOptions {
  expires: Date;
  maxAge: number;
  httpOnly: boolean;
  sameSite: "none" | "lax" | "strict" | undefined;
  secure?: boolean;
}

//parse environment variables to integrates with feedback value
export const accessTokenExpire = parseInt(
  process.env.ACCESS_TOKEN_EXPIRE || "3600",
  10
);
export const refreshTokenExpires = parseInt(
  process.env.REFRESH_TOKEN_EXPIRE || "3600",
  10
);

//options for cookies
export const accessTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 60 * 60 * 1000),
  maxAge: accessTokenExpire * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

export const refreshTokenOptions: ITokenOptions = {
  expires: new Date(Date.now() + accessTokenExpire * 24 * 60 * 1000),
  maxAge: refreshTokenExpires * 24 * 60 * 60 * 1000,
  httpOnly: true,
  sameSite: "lax",
};

export const sendToken = (
  user: IUser,
  statusCode: number,
  res: Response,
  options?: ITokenOptions
) => {
  const accessToken = user.SignAccessToken();
  const refreshToken = user.SignRefreshToken();

  //upload session to redis
  redis.set(user._id, JSON.stringify(user) as string);

  //only set secure to true in production
  if (process.env.NODE_ENV === "production") {
    accessTokenOptions.secure = true;
  }
  res.cookie("access_token", accessToken, accessTokenOptions);
  res.cookie("refresh_token", refreshToken, refreshTokenOptions);

  res.status(statusCode).json({
    success: true,
    user,
    accessToken,
  });
};
