import { Request, Response } from "express"
import { loginUseCase } from "../../../modules/login/useCase"



const loginVerify = async (req: Request, res: Response) => {

    try {
        const { email, password } = req.body
        if (!email || !password) throw 'The data is invalid'
        const result = await loginUseCase.findUser({ email, password })
        res.status(200).json({
            token: result
        })
    } catch (error: Error | any) {
        res.status(401).json({
            error: true,
            message: error
        })
    }
}


export const loginController = {
    loginVerify
}