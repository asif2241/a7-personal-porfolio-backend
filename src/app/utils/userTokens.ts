import { IUser } from "../modules/admin/admin.interface";
import { generateToken, verifyToken } from "./jwt";
import { JwtPayload } from "jsonwebtoken";
import AppError from "../errorHelpers/AppError";
import { User } from "../modules/admin/admin.model";

export const createUserTokens = (user: Partial<IUser>) => {
    const JwtPayload = {
        userId: user._id,
        email: user.email,
        role: user.role
    }

    const accessToken = generateToken(JwtPayload, process.env.JWT_ACCESS_SECRET as string, process.env.JWT_ACCESS_EXPIRES as string)

    const refreshToken = generateToken(JwtPayload, process.env.JWT_REFRESH_SECRET as string, process.env.JWT_REFRESH_EXPIRES as string)

    return {
        accessToken,
        refreshToken
    }
}


export const createNewAccessTokenWithRefreshToken = async (refreshToken: string) => {
    const verifiedToken = verifyToken(refreshToken, process.env.JWT_REFRESH_SECRET as string) as JwtPayload

    const isUserExist = await User.findOne({ email: verifiedToken.email })

    if (!isUserExist) {
        throw new AppError(404, "User does not exist")
    }
    const jwtPayload = {
        userId: isUserExist._id,
        email: isUserExist.email,
        role: isUserExist.role
    }
    const accessToken = generateToken(jwtPayload, process.env.JWT_ACCESS_SECRET as string, process.env.JWT_ACCESS_EXPIRES as string)

    return accessToken
}