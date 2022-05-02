import { ITransactionDataRead, ITransactionsUploadUseCase, IUploadRegisterData, keyCSV } from "../../../domain/transaction"
import fs from "fs";
import { parse } from 'csv-parse';
import path from "path";
import { pathUpload } from "../../../http/middleware/uploadCsv";
import { getUserIdByToken, unlinkFile } from '../../../helpers/util'
import { trasactionsUploadUseRepository } from "../repository";

// adiconar no banco se estiver tudo ok


const verifyFileupload = (fileName: string, idUser: string) => {

    const transactionData = new Promise((resolve, reject) => {

        const fileCSV = path.join(pathUpload, fileName).toString();
        const fileData: ITransactionDataRead[] = []
        const fileRead = fs.createReadStream(fileCSV)
        fileRead
            .pipe(parse())
            .on('data', (data) => {
                const dataLineCsv = {} as ITransactionDataRead
                for (const [key, value] of Object.entries(data)) {
                    dataLineCsv[keyCSV[+key]] = value
                }
                dataLineCsv['userId'] = idUser
                fileData.push(dataLineCsv)
            })
            .on('error', function (err) {
                reject(err.message)
            })
            .on('end', () => {
                if (!fileData[0]) {
                    reject('The file is empty, resend!')
                    unlinkFile(fileCSV)
                }
                const dataFilter = fileData.filter((response) => {
                    const firstDateLine = new Date(fileData[0].dateTimerTransaction).toLocaleDateString()
                    return firstDateLine == new Date(response.dateTimerTransaction).toLocaleDateString()
                })
                dataFilter.map((data, key) => {
                    const verifyIsNullField = Object.values(data).every(value => !!value);
                    if (!verifyIsNullField) {
                        dataFilter.splice(key, 1)
                    }
                    return verifyIsNullField
                })
                const result = {
                    dataTransactions: dataFilter,
                    infoConfig: {
                        fileName: fileName,
                        dayTransacions: fileData[0].dateTimerTransaction
                    }
                }
                resolve(result)
            })

    })
    return transactionData;
}

const verifyDayTransaction = () => {

}

const addNewRecord = async (data: IUploadRegisterData) => {

    const dateNow = new Date();
    await trasactionsUploadUseRepository.addNewRecord(data)


}


export const transactionUploadUseCase: ITransactionsUploadUseCase = {
    verifyFileupload,
    addNewRecord
}