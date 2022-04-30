import { Router } from "express";
import { loginController } from "../../http/controllers/login";

export const loginRouter = Router()

loginRouter.post('/login', loginController.loginVerify)