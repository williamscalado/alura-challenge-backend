import { Request, Response } from "express"
import { loginUseCase } from "../../../modules/login/useCase"



const loginVerify = async (req: Request, res: Response) => {

   try {
        const {email, password} = req.body
        if(!email || !password) throw 'The data is invalid'
        await loginUseCase.findUser({email, password})
     res.status(200).json({
         
     })
   } catch (error) {
       res.status(400).json({
           error
       })
   }
}


export const loginController = {
    loginVerify
}