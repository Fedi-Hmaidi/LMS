import express from "express";
const courseRouter = express.Router();
import {
  uploadCourse,
  editCourse,
  getSingleCourse,
  getAllCourses,
  getCourseByUser,
  addQuestion,
  addAnswer,
  addReview,
  addReplyToReview,
  getCourses,
  deleteCourse
} from "../controllers/course.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

courseRouter.post(
  "/create-course",
  isAuthenticated,
  authorizeRoles("admin"),
  uploadCourse
);
courseRouter.put(
  "/edit-course/:id",
  isAuthenticated,
  authorizeRoles("admin"),
  editCourse
);
courseRouter.get("/get-course/:id", getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id",isAuthenticated, getCourseByUser);
courseRouter.put("/add-question",isAuthenticated, addQuestion);
courseRouter.put("/add-answer",isAuthenticated, addAnswer);
courseRouter.put("/add-review/:id",isAuthenticated, addReview);
courseRouter.put("/add-reply-to-review",isAuthenticated, addReplyToReview);
courseRouter.get("/get-all-courses", isAuthenticated, authorizeRoles("admin"), getCourses);
courseRouter.delete("/delete-course/:id", isAuthenticated, authorizeRoles("admin"), deleteCourse);


export default courseRouter;
