import { Router } from "express";
import { loginRouter } from "./login";
import { transactionsUpload } from "./transactionsUpload";
import { userRouter } from "./user";


export const appRouter = Router()

appRouter.use(transactionsUpload)
appRouter.use(userRouter)
appRouter.use(loginRouter)