import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import courseModel from "../models/course.model";
import { Response } from "express";

//create course
export const createCourse = CatchAsyncError(
  async (data: any, res: Response) => {
    const course = await courseModel.create(data);
    res.status(201).json({
      success: true,
      course,
    });
  }
);
//get all courses --only for admin
export const getAllCoursesService = async(res:Response)=>{
  const courses = await courseModel.find().sort({createdAt: -1});
  res.status(201).json({
    success: true,
    courses,
  });
}