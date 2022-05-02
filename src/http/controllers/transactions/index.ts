import { Request, Response } from "express"
import { transactionsUseCase } from "../../../modules/transaction/useCase"





const getAllTransactions = async (req: Request, res: Response) => {
    try {
        const result = await transactionsUseCase.getAllTransactions()

        res.status(200).json(result)

    } catch (error: Error | any) {
        res.status(401).json({
            error: true,
            message: error.message
        })
    }
}


export const transactionController = {
    getAllTransactions
}