/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BlogServices } from "./blogs.service";
import { sendResponse } from "../../utils/sendResponse";
import { Blog } from "./blogs.model";

const createBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const result = await BlogServices.createBlog(req.body)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blog Created Successfully!",
        data: result
    })
})

const getSingleBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const slug = req.params.slug
    const blog = await BlogServices.getSingleBlog(slug)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Single Blog Retrieve Successfully",
        data: blog
    })
})

const deleteBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;

    const deletedBlog = await BlogServices.deleteBlog(id)
    sendResponse(res, {
        success: true,
        statusCode: 300,
        message: "Blog Deleted Successfully!",
        data: deletedBlog
    })
})

const getAllBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const query = req.query;

    const result = await BlogServices.getAllBlog(query as Record<string, string>)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "All Blogs Retrive Successfully",
        data: result.data,
        meta: result.meta
    })
})


const updateBlog = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const id = req.params.id;
    const payload = req.body;

    const updatedBlog = await BlogServices.updateBlog(id, payload)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Blogs Updated Successfully",
        data: updatedBlog
    })
})

export const BlogController = {
    createBlog,
    getSingleBlog,
    deleteBlog,
    getAllBlog,
    updateBlog
}