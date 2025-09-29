import { Router } from "express";
import { AdminRoutes } from "../modules/admin/admin.route";
import { ProjectRoutes } from "../modules/project/project.route";
import { BlogRoutes } from "../modules/blogs/blogs.routes";

export const router = Router();

const moduleRoutes = [
    {
        path: "/admin",
        route: AdminRoutes
    },
    {
        path: "/projects",
        route: ProjectRoutes
    },
    {
        path: "/blogs",
        route: BlogRoutes
    }
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})