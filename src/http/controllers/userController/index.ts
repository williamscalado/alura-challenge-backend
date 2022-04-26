import { Request, Response } from "express";
import { userUseCase } from "../../../modules/user/useCase";


const createUser = async (req: Request, res: Response) => {
    try {

        const { email, name } = req.body
        if (!email || !name) { throw 'Invalid Data user' }
        const data = {
            fullName: name,
            email
        }
        await userUseCase.createUser(data)
        res.status(200).json({
            message: "success"
        })


    } catch (error: Error | any) {
        res.status(400).json({
            error: error.message
        })
    }

}

const getAllUsers = async (req: Request, res: Response) => {

    try {
        const result = await userUseCase.getAllUsers()
        res.status(200).json(result)
    } catch (error) {

        res.status(400).json({
            message: 'Users not found'
        })

    }

}

export const userController = {
    createUser,
    getAllUsers
}