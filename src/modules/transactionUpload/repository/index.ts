import { IRecordUpload, ITransactionsUploadRepository, IUploadRegisterData } from "../../../domain/transaction";
import { uploadDb } from "./model";

export const addNewRecord = async (data: IUploadRegisterData) => {
  await uploadDb.sync();
  await uploadDb.create(data);
};

const getRecordUpload = async () => {
  await uploadDb.sync()
  const result = uploadDb.findAll({
    attributes: ['id', 'idUser', 'dateTransactions', 'dateUpload']
  })

  return result

}
export const trasactionsUploadUseRepository: ITransactionsUploadRepository = {
  addNewRecord,
  getRecordUpload
};
