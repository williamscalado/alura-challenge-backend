import { Request, Response } from "express";
import { IAddTransactions, IResultUpload, IUploadRegisterData } from "../../../domain/transaction";
import { transactionUploadUseCase } from "../../../modules/transactionUpload/useCase";
import { getUserIdByToken, unlinkFile } from "../../../helpers/util";
import { transactionsUseCase } from "../../../modules/transaction/useCase";

export const addNewTransactionsByUpload = async (req: Request, res: Response) => {

    try {
        if (!req.file) throw 'Não conseguimos enviar o arquivo, tente novamente'

        const idUser = getUserIdByToken(req.headers['x-access-token'] as string);
        const nameFile = req.file.filename;
        const { dataTransactions, infoConfig }: IResultUpload = await transactionUploadUseCase
            .verifyFileupload(nameFile, idUser as string)

        const dayTransacions = new Date(infoConfig.dayTransacions)

        const dataNewResordUpload: IUploadRegisterData = {
            idUser: idUser as string,
            dateUpload: new Date(),
            dateTransactions: dayTransacions,
            file: infoConfig.fileName
        }

        const dataTtransactions: IAddTransactions = {
            dataTransactions: dataTransactions as [],
            dayTransactions: dayTransacions
        }

        await transactionsUseCase.addTransactions(dataTtransactions);
        await transactionUploadUseCase.addNewRecord(dataNewResordUpload)



        res.status(200).json({
            error: false,
            message: "Arquivo foi enviado com sucesso"
        })

    } catch (error: Error | any) {

        res.status(400).json({
            error: true,
            message: error.message
        })
    }

}

const getRecordUpload = (req: Request, res: Response) => {
    try {


        res.status(200).json({})

    } catch (error: Error | any) {
        res.status(401).json({
            error: true,
            message: error.message
        })
    }
}


export const transactionsUploadController = {
    addNewTransactionsByUpload,
    getRecordUpload
}