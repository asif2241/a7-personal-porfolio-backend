/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { TErrorSources } from "../interfaces/error.types";
import { handlerDuplicateError } from "../errorHelpers/handleDuplicateError";
import { handleCastError } from "../errorHelpers/handleCastError";
import { handlerZodError } from "../errorHelpers/handleZodError";
import { handlerValidationError } from "../errorHelpers/handleValidationError";
import AppError from "../errorHelpers/AppError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = async (err: any, req: Request, res: Response, next: NextFunction) => {
    if (process.env.NODE_ENV === "development") {
        console.log(err);
    }

    let errorSources: TErrorSources[] = []
    let statusCode = 500
    let message = "Somethis Went Wrong!"

    if (err.code === 11000) {
        const simplifiedError = handlerDuplicateError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message
    }

    else if (err.name === "CastError") {
        const simplifiedError = handleCastError(err)
        statusCode = simplifiedError.statusCode;
        message = simplifiedError.message
    }


    else if (err.name === "ZodError") {
        const simplifiedError = handlerZodError(err)
        statusCode = simplifiedError.statusCode
        message = simplifiedError.message
        errorSources = simplifiedError.errorSources as TErrorSources[]
    }

    else if (err.name === "ValidationError") {
        const simplifiedError = handlerValidationError(err)
        statusCode = simplifiedError.statusCode;
        errorSources = simplifiedError.errorSources as TErrorSources[]
        message = simplifiedError.message
    }

    else if (err instanceof AppError) {
        statusCode = err.statusCode
        message = err.message
    } else if (err instanceof Error) {
        statusCode = 500;
        message = err.message
    }


    res.status(statusCode).json({
        success: false,
        message,
        errorSources,
        err: process.env.NODE_ENV === "development" ? err : null,
        stack: process.env.NODE_ENV === "development" ? err.stack : null
    })
}