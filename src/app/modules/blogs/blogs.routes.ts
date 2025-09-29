import { Router } from "express";
import { BlogController } from "./blogs.controller";
import { Role } from "../admin/admin.interface";
import { checkAuth } from "../../middlewares/checkAuth";
import { validateRequest } from "../../middlewares/validateRequest";
import { creatBlogZodSchema, UpdareBlogZodSchema } from "./blogs.validation";

export const BlogRoutes = Router()

BlogRoutes.post("/create-blog", checkAuth(...Object.values(Role)), validateRequest(creatBlogZodSchema), BlogController.createBlog)
BlogRoutes.get("/:slug", BlogController.getSingleBlog)
BlogRoutes.delete("/:id", checkAuth(...Object.values(Role)), BlogController.deleteBlog)
BlogRoutes.get("", BlogController.getAllBlog)
BlogRoutes.patch("/update/:id", checkAuth(...Object.values(Role)), validateRequest(UpdareBlogZodSchema), BlogController.updateBlog)