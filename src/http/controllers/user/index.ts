import { Request, Response } from "express";
import { userUseCase } from "../../../modules/user/useCase";


const createUser = async (req: Request, res: Response) =>{
try {
    
        const { email , name } = req.body
        if(!email || !name){ throw 'Invalid Data user' }
        const data = {
            fullName: name,
            email
        }
        await userUseCase.createUser(data)



} catch (error) {
    res.status(400).json({
        error
    })
}

}


const userController = {
    createUser
}