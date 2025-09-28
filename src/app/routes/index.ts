import { Router } from "express";
import { AdminRoutes } from "../modules/admin/admin.route";
import { ProjectRoutes } from "../modules/project/project.route";

export const router = Router();

const moduleRoutes = [
    {
        path: "/admin",
        route: AdminRoutes
    },
    {
        path: "/projects",
        route: ProjectRoutes
    }
]


moduleRoutes.forEach((route) => {
    router.use(route.path, route.route)
})