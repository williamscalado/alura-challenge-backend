import { Router } from "express";
import { transactionsUpload } from "./transactionsUpload";
import { userRouter } from "./user";


export const appRouter = Router()

appRouter.use(transactionsUpload)
appRouter.use(userRouter)