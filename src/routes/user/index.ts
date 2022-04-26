import { Router } from "express";
import { userController } from "../../http/controllers/userController";

export const userRouter = Router()


userRouter.get('/user', userController.getAllUsers)
userRouter.post('/user', userController.createUser)