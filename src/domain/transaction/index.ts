export interface ITransactionData {
    id: string,
    userId?: string,
    origBank: string,
    origBranch: string,
    origAccount: string,
    destBank: string,
    destBranch: string,
    destAccount: string,
    transactionAmount: string,
    dateTimerTrasaction: Date,
    createAt: Date,
    [key: string]: any
}

export interface IUploadRegisterData {
    id?: string,
    idUser: string,
    dateUpload: Date,
    dateTransactions?: Date,
    file: string
}

export interface IResultUpload {
    dataTransactions: {},
    infoConfig: {
        fileName: string,
        dayTransacions: string
    }
}


export enum keyCSV {
    "origBank" = 0,
    "origBranch" = 1,
    "origAccount" = 2,
    "destBank" = 3,
    "destBranch" = 4,
    "destAccount" = 5,
    "transactionAmount" = 6,
    "dateTimerTrasaction" = 7
}

export interface ITransactionDataRead extends Omit<ITransactionData, "id" | "createAt"> { }

export interface ITrasactionsUploadUseCase {
    verifyFileupload: (fileName: string) => Promise<ITransactionDataRead[]> | any
    addNewRecord: (data: IUploadRegisterData) => Promise<void>
}

