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

const getByIdUpload = async (req: Request, res: Response) => {

    try {

        const idUpload = req.params.idUpload;
        if (!idUpload) throw new Error('Precisamos do identificador do upload')

        const result = await transactionsUseCase.getTransactionsByIdUpload(+idUpload)


        res.status(200).json(result)

    } catch (error: Error | any) {
        res.status(401).json({
            error: true,
            message: error.message
        })
    }
}

export const transactionController = {
    getAllTransactions,
    getByIdUpload
}