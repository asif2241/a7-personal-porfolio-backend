import { IUser, Role } from "../modules/user/user.interface"
import { User } from "../modules/user/user.model"
import bcryptjs from "bcryptjs"

export const seedSuperAdmin = async () => {
    try {
        const isSuperAdminExist = await User.findOne({ email: process.env.SUPER_ADMIN_EMAIL })

        if (isSuperAdminExist) {
            console.log(`Super Admin Already Exists!`)
            return;
        }

        console.log("Creating a Super Admin.......")

        const hashedPassword = await bcryptjs.hash(process.env.SUPER_ADMIN_PASS as string, Number(process.env.BCRYPT_SALT_ROUND))

        const payload: IUser = {
            name: "Asiful Islam Shaheen",
            role: Role.SUPER_ADMIN,
            email: process.env.SUPER_ADMIN_EMAIL as string,
            password: hashedPassword,
            address: "Hathazari, Chittagong, Bangladesh",
            phone: "01879095915",
        }

        const superAdmin = await User.create(payload)

        console.log(superAdmin);
    } catch (err) {
        console.log("Super Admin creation failed!!", err);
    }
}