import { Request, Response } from "express";
import { transactionUseCase } from "../../../modules/transactionUpload/useCase";


export const transactionsUploadController = async (req: Request, res: Response) => {

    try {
        if (!req.file) throw 'Upload bad request'
        const nameFile = req.file.filename;        
        const fileDataCsv = await transactionUseCase.verifyFileupload(nameFile)         
        

        res.status(200).json({
            message: "success",
            data: fileDataCsv
        })

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }

}