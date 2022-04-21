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
    createAt: Date    
}

