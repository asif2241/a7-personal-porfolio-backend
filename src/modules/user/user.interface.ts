import { Types } from "mongoose";

export enum Role {
    SUPER_ADMIN = "SUPER_ADMIN",
    ADMIN = "ADMIN",

}

export interface IUser {
    _id?: Types.ObjectId
    name: string;
    email: string;
    password?: string;
    phone?: string;
    picture?: string;
    address?: string;
    role: Role;
}