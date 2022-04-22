import { ITransactionData, ITrasactionsUseCase } from "../../../domain/transaction"
import fs from "fs";
import { parse } from 'csv-parse'
import { pahtUpload } from "../../../config/upload";
import path from "path";

interface ITransactionDataRead extends Omit<ITransactionData, "id" | "createAt"> {}

const verifyFileupload =  (fileName: string) =>  {
    
    const fileCSV = path.join(pahtUpload, fileName);
    const fileData : ITransactionDataRead[]  = []
   
    fs
    .createReadStream(fileCSV)
    .pipe(parse())
    .on('data', (data) => {

        
        const dataFile : ITransactionDataRead = {
            origBank: data[0],
            origBranch: data[1],
            origAccount: data[2],
            destBank: data[3],
            destBranch: data[4],
            destAccount: data[5],
            transactionAmount: data[6],
            dateTimerTrasaction: data[7]
        }
        fileData.push(dataFile)

    })
    .on('end', ()=>{
        console.log(fileData)
    })

}


export const transactioUseCase: ITrasactionsUseCase =  {
    verifyFileupload
}