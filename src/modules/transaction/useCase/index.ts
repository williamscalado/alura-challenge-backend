import { ITransactionDataRead, ITrasactionsUseCase, keyCSV } from "../../../domain/transaction"
import fs from "fs";
import { parse } from 'csv-parse';
import { pathUpload } from "../../../config/upload";
import path from "path";


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

                    if (!value) { fileData.splice(0, fileData.length); reject('Files with invalid data, send another') }
                    dataLineCsv[keyCSV[+key]] = value
                }
                fileData.push(dataLineCsv)
            })
            .on('error', function (err) {
                reject(err.message)
            })
            .on('end', () => {

                const firstDateLine = new Date(fileData[0].dateTimerTrasaction).toLocaleDateString()
                const findDiferentDates = fileData.find(({ dateTimerTrasaction }) => {
                    const dtArray = new Date(dateTimerTrasaction).toLocaleDateString();
                    return dtArray !== firstDateLine
                })

                if (findDiferentDates) { reject('File cannot have more than one day of transactions') }


                resolve(fileData)

            })

    })

    return transactionData;

}


export const transactionUseCase: ITrasactionsUseCase = {
    verifyFileupload
}