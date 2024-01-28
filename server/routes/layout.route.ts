import Express from "express";
const layoutRouter = Express.Router();
import {
  createLayout,
  editLayout,
  getLayoutByType,
} from "../controllers/layout.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

layoutRouter.post(
  "/create-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  createLayout
);

layoutRouter.put(
  "/update-layout",
  isAuthenticated,
  authorizeRoles("admin"),
  editLayout
);

layoutRouter.get("/get-layout", isAuthenticated, getLayoutByType);

export default layoutRouter;
