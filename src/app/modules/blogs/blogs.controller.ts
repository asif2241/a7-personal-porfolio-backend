/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogServices } from "./blogs.service";
import { sendResponse } from "../../utils/sendResponse";

const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.createBlog(req.body)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog Created Successfully!",
        data: result
    })
})


export const BlogController = {
    createBlog
}