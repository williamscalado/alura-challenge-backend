import { ITransactionDataRead, ITrasactionsUploadUseCase, keyCSV } from "../../../domain/transaction"
import fs from "fs";
import { parse } from 'csv-parse';
import path from "path";
import { pathUpload } from "../../../http/middleware/uploadCsv";
import { unlinkFile } from '../../../helpers/util'

// verificar se já exite o dia da transação no banco 

const verifyFileupload = (fileName: string) => {

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
                    const firstDateLine = new Date(fileData[0].dateTimerTrasaction).toLocaleDateString()
                    return firstDateLine == new Date(response.dateTimerTrasaction).toLocaleDateString()
                })
                dataFilter.map((data, key) => {
                    const verifyIsNullField = Object.values(data).every(value => !!value);
                    if (!verifyIsNullField) {
                        dataFilter.splice(key, 1)
                    }
                    return verifyIsNullField
                })

               resolve(dataFilter)
            })

    })
    return transactionData;
}


export const transactionUseCase: ITrasactionsUploadUseCase = {
    verifyFileupload
}