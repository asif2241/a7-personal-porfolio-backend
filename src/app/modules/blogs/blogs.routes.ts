import { Router } from "express";
import { BlogController } from "./blogs.controller";

export const BlogRoutes = Router()

BlogRoutes.post("/create-blog", BlogController.createBlog)
BlogRoutes.get("/:slug", BlogController.getSingleBlog)
BlogRoutes.delete("/:id", BlogController.deleteBlog)
BlogRoutes.get("", BlogController.getAllBlog)
BlogRoutes.patch("/update/:id", BlogController.updateBlog)