import express from "express";
const analyticsRouter = express.Router();
import { authorizeRoles, isAuthenticated } from "../middleware/auth";
import {
  getCoursesAnalytics,
  getOrdersAnalytics,
  getUserAnalytics,
} from "../controllers/analytics.controller";

analyticsRouter.get(
  "/get-users-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getUserAnalytics
);
analyticsRouter.get(
  "/get-courses-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getCoursesAnalytics
);
analyticsRouter.get(
  "/get-orders-analytics",
  isAuthenticated,
  authorizeRoles("admin"),
  getOrdersAnalytics
);

export default analyticsRouter;
