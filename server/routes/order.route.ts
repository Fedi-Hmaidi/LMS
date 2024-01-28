import express from "express";
const orderRouter = express.Router();
import { createOrder, getAllOrders } from "../controllers/order.controller";
import { authorizeRoles, isAuthenticated } from "../middleware/auth";

orderRouter.post("/create-order",isAuthenticated, createOrder)
orderRouter.get("/get-all-orders", isAuthenticated, authorizeRoles("admin"), getAllOrders)

export default orderRouter;
