import { Request, Response } from "express";
import { IResultUpload, IUploadRegisterData } from "../../../domain/transaction";
import { transactionUploadUseCase } from "../../../modules/transactionUpload/useCase";
import { getUserIdByToken } from "../../../helpers/util";

export const transactionsUploadController = async (req: Request, res: Response) => {

    try {
        if (!req.file) throw 'Não conseguimosenviar o arquivo, tente novamente'

        const idUser = getUserIdByToken(req.headers['x-access-token'] as string);
        const nameFile = req.file.filename;

        const { dataTransactions, infoConfig }: IResultUpload = await transactionUploadUseCase.verifyFileupload(nameFile)

        const dataNewResordUpload: IUploadRegisterData = {
            idUser: idUser as string,
            dateUpload: new Date(),
            dateTransactions: new Date(infoConfig.dayTransacions),
            file: infoConfig.fileName
        }
        await transactionUploadUseCase.addNewRecord(dataNewResordUpload)



        res.status(200).json({
            error: false,
            message: "Arquivo foi enviado com sucesso"
        })

    } catch (error) {
        res.status(400).json({
            error: true,
            message: error
        })
    }

}