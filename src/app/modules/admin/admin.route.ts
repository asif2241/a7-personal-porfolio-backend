import { Router } from "express";
import { adminController } from "./admin.controller";

export const AdminRoutes = Router();

AdminRoutes.post("/login", adminController.adminLogin);
AdminRoutes.post("/refresh-token", adminController.getNewAccessToken)

