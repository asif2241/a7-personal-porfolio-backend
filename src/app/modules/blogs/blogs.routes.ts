import { Router } from "express";
import { BlogController } from "./blogs.controller";

export const BlogRoutes = Router()

BlogRoutes.post("/create-blog", BlogController.createBlog)