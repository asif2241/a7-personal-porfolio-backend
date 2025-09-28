import AppError from "../../errorHelpers/AppError";
import { createNewAccessTokenWithRefreshToken, createUserTokens } from "../../utils/userTokens";
import { IUser } from "./admin.interface";
import { User } from "./admin.model";
import bcryptjs from "bcryptjs"

const AdminLogin = async (payload: Partial<IUser>) => {
  const { email, password } = payload;

  const isAdminExists = await User.findOne({ email })
  if (!isAdminExists) {
    throw new AppError(404, "Invalid Email!!")
  }

  const isPasswordMatched = await bcryptjs.compare(password as string, isAdminExists.password as string);

  if (!isPasswordMatched) {
    throw new AppError(401, "Incorrect Password")
  }

  const userTokens = createUserTokens(isAdminExists)

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { password: pass, ...rest } = isAdminExists.toObject()

  return {
    userTokens,
    user: rest
  }
}

const getNewAccessToken = async (refreshToken: string) => {
  const newAccessToken = await createNewAccessTokenWithRefreshToken(refreshToken);

  return {
    accessToken: newAccessToken
  }
}

export const UserServices = {
  AdminLogin,
  getNewAccessToken
}