import { NextFunction, Request, Response } from "express";
import AppError from "../errorHelpers/AppError";
import { verifyToken } from "../utils/jwt";
import { JwtPayload } from "jsonwebtoken";
import { User } from "../modules/admin/admin.model";

export const checkAuth = (...authRoles: string[]) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        const accessToken = req.headers.authorization || req.cookies.accessToken;

        if (!accessToken) {
            throw new AppError(403, "No Token Received")
        }

        const verifiedToken = await verifyToken(accessToken, process.env.JWT_ACCESS_SECRET as string) as JwtPayload

        const isAdminExists = await User.findOne({ email: verifiedToken.email })

        if (!isAdminExists) {
            throw new AppError(403, "You are not authorized!")
        }

        if (!authRoles.includes(verifiedToken.role)) {
            throw new AppError(403, "You are not permitted to view this route!!!")
        }

        req.user = verifiedToken;

        next()
    } catch (err) {
        console.log("Jwt err", err);
        next(err)
    }
}