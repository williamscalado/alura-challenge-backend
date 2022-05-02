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
    dateTimerTransaction: Date,
    [key: string]: any
}


export enum keyCSV {
    "origBank" = 0,
    "origBranch" = 1,
    "origAccount" = 2,
    "destBank" = 3,
    "destBranch" = 4,
    "destAccount" = 5,
    "transactionAmount" = 6,
    "dateTimerTransaction" = 7
}

export interface IAddTransactions {
    dataTransactions: [],
    dayTransactions: Date
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

export interface IRecordUpload {
    id: string,
    idUser: string,
    dateTransactions: Date,
    dateUpload: Date
}

export interface ITransactionDataRead extends Omit<ITransactionData, "id" | "createAt"> { }

export interface ITransactionsUploadUseCase {
    verifyFileupload: (fileName: string, idUser: string) => Promise<ITransactionDataRead[]> | any
    addNewRecord: (data: IUploadRegisterData) => Promise<void>,
    getRecordUpload: () => Promise<IRecordUpload[]> | any
}
export interface ITransactionsUploadRepository {
    addNewRecord: (data: IUploadRegisterData) => Promise<void>,
    getRecordUpload: () => Promise<IRecordUpload[]> | any
}

