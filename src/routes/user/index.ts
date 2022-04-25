import { Router } from "express";
import { userController } from "../../http/controllers/userController";
import { userUseCase } from "../../modules/user/useCase";

export const userRouter = Router()


userRouter.post('/user', userController.createUser)