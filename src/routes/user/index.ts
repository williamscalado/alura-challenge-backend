import { Router } from "express";
import { userController } from "../../http/controllers/userController";
import { isAuthenticatedVeryfi } from "../../http/middleware/tokenVerify";

export const userRouter = Router()


userRouter.get('/user', isAuthenticatedVeryfi, userController.getAllUsers)
userRouter.post('/user', isAuthenticatedVeryfi, userController.createUser)