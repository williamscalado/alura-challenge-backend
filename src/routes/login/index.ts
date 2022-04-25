import { Router } from "express";
import { loginController } from "../../http/controllers/login";
import { loginUseCase } from "../../modules/login/useCase";

export const loginRouter = Router()



loginRouter.post('/login', loginController.loginVerify)