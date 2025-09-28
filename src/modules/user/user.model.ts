import { model, Schema } from "mongoose";
import { IUser, Role } from "./user.interface";


const userSchema = new Schema<IUser>({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: {
        type: String,
        enum: Object.values(Role),
        default: Role.SUPER_ADMIN
    },
    phone: { type: String },
    picture: { type: String },
    address: { type: String },

}, {
    timestamps: true,
    versionKey: false
})

export const User = model<IUser>("User", userSchema)