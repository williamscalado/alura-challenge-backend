import { Request, Response } from "express";
import { transactioUseCase } from "../../../modules/transaction/useCase";


export const transactionsUploadController = async (req: Request, res: Response) => {

    try {
        if (!req.file) throw new Error('Upload bad request')
        const nameFile = req.file.filename;
        transactioUseCase.verifyFileupload(nameFile)

        res.status(200).json({
            message: "sucess"
        })

    } catch (error: Error | any) {
        res.status(500).json({
            error: true,
            message: error.message
        })
    }

}