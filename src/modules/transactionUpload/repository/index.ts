import { IRecordUpload, ITransactionsUploadRepository, IUploadRegisterData } from "../../../domain/transaction";
import { uploadDb } from "./model";

export const addNewRecord = async (data: IUploadRegisterData) => {
  await uploadDb.sync();
  const result = await uploadDb.create(data);
  const { id } = result as IRecordUpload | any
  return id
};

const getRecordUpload = async () => {
  await uploadDb.sync()
  const result = uploadDb.findAll({
    attributes: ['id', 'idUser', 'dateTransactions', 'dateUpload']
  })

  return result

}

const findByDayTransactions = async (dayTransactions: Date) => {
  uploadDb.sync()
  const result = await uploadDb.findOne({ where: { dateTransactions: dayTransactions } })
  return result || null
}
export const trasactionsUploadUseRepository: ITransactionsUploadRepository = {
  addNewRecord,
  getRecordUpload,
  findByDayTransactions
};
