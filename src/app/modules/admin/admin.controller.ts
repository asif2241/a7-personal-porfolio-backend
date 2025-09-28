/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { UserServices } from "./admin.service";
import { setAuthCookie } from "../../utils/setCookie";
import { sendResponse } from "../../utils/sendResponse";
import AppError from "../../errorHelpers/AppError";

const adminLogin = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const { userTokens, user } = await UserServices.AdminLogin(req.body);

    setAuthCookie(res, userTokens)

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "Admin Logged In Successfull",
        data: {
            accessToken: userTokens.accessToken,
            refreshToken: userTokens.refreshToken,
            user: user
        }
    })
})

const getNewAccessToken = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const refreshToken = req.cookies.refreshToken;

    if (!refreshToken) {
        throw new AppError(400, "No Refresh Token Received from cookies!")
    }

    const tokenInfo = await UserServices.getNewAccessToken(refreshToken as string);

    setAuthCookie(res, tokenInfo);

    sendResponse(res, {
        success: true,
        statusCode: 200,
        message: "New Access Token Retrive Successfully",
        data: tokenInfo
    })
})


export const adminController = {
    adminLogin,
    getNewAccessToken
}