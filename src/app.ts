import cookieParser from "cookie-parser";
import express, { Request, Response } from "express"
import cors from "cors"
import { globalErrorHandler } from "./app/middlewares/globalErrorHandler";
import { router } from "./app/routes";
import notFound from "./app/middlewares/notFound";

const app = express();

app.use(cookieParser())
app.use(express.json())
app.use(cors())
app.set("trust proxy", 1);

app.use("/api/v1", router)

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({
        message: "Welcome to Personal Portfolio Backend!!"
    })
})

app.use(globalErrorHandler)
app.use(notFound)

export default app