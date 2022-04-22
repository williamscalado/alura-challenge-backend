import { Router } from "express";
import { transactionsUpload } from "./transactionsUpload";


export const appRouter = Router()

appRouter.use(transactionsUpload)