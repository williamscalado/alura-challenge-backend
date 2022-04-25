import { Router } from "express";
import { userUseCase } from "../../modules/user/useCase";

export const userRouter = Router()


userRouter.post('user/', userUseCase.createUser)