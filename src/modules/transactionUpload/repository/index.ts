import { IUploadRegisterData } from "../../../domain/transaction";
import { uploadDb } from "./model";

export const addNewRecord = async (data: IUploadRegisterData) => {
  await uploadDb.sync();
  await uploadDb.create(data);
};

export const trasactionsUploadUseRepository = {
  addNewRecord,
};
