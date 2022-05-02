import { ITransactionData, ITransactionsUploadRepository } from "../../../domain/transaction";
import { transactionsDB } from "./model";


const addTransactions = async (data: ITransactionData[]) => {
    await transactionsDB.sync()
    return await transactionsDB.bulkCreate(data as [])
}

const getAllTransactions = async () => {
    transactionsDB.sync()
    const result = await transactionsDB.findAll()

    return result
}

const findByDayTransactions = async (dayTransactions: Date) => {
    transactionsDB.sync()
    const result = await transactionsDB.findOne({ where: { dateTimerTransaction: dayTransactions } })
    return result || false
}

export const transactionsUseRepository = {
    addTransactions,
    findByDayTransactions,
    getAllTransactions
}

