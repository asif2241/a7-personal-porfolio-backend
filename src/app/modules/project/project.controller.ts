/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { ProjectsServices } from "./project.services";
import { sendResponse } from "../../utils/sendResponse";

const createProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const project = await ProjectsServices.createProject(req.body);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Project added successfully",
        data: project
    })
})

const updateProject = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id
    const payload = req.body

    const result = await ProjectsServices.updateProject(id, payload)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Projects Data updated successfully",
        data: result
    })
})

export const ProjectControllers = {
    createProject,
    updateProject
}