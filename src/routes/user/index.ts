import { Router } from "express";
import { userController } from "../../http/controllers/user";
import { userUseCase } from "../../modules/user/useCase";

export const userRouter = Router()


userRouter.post('/user', userController.createUser)