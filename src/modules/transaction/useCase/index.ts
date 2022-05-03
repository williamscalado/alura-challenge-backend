import { IAddTransactions, ITransactionData } from "../../../domain/transaction"
import { transactionsUseRepository } from "../repository"


const addTransactions = async (data: IAddTransactions, idNewRecord: number) => {

    const findDay = await transactionsUseRepository.findByDayTransactions(data.dayTransactions as Date)
    if (findDay) throw new Error('Dia da transação já foi realizada sua importação')
    if (!idNewRecord) throw new Error('Não conseguimos processar sua informação')


    const dataTransactions = data.dataTransactions
    dataTransactions.map((res: ITransactionData) => res.idUpload = idNewRecord)

    await transactionsUseRepository.addTransactions(dataTransactions)
}

const getAllTransactions = async () => {

    const resultData = await transactionsUseRepository.getAllTransactions()
    if (!resultData) {
        throw new Error('Lista não contém transações')
    }
    return resultData
}
const getTransactionsByIdUpload = async (id: number) => {

    const result = await transactionsUseRepository.getByIdUpload(id)
    return result
}
export const transactionsUseCase = {
    addTransactions,
    getAllTransactions,
    getTransactionsByIdUpload
} 