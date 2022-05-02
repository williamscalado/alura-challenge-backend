import { IAddTransactions, ITransactionData } from "../../../domain/transaction"
import { transactionsUseRepository } from "../repository"


const addTransactions = async (data: IAddTransactions) => {

    const findDay = await transactionsUseRepository.findByDayTransactions(data.dayTransactions as Date)
    if (findDay) throw new Error('Dia da transação já foi realizada sua importação')

    await transactionsUseRepository.addTransactions(data.dataTransactions)
}

const getAllTransactions = async () => {

    const resultData = await transactionsUseRepository.getAllTransactions()
    if (!resultData) {
        throw new Error('Lista não contém transações')
    }
    return resultData
}
export const transactionsUseCase = {
    addTransactions,
    getAllTransactions
} 