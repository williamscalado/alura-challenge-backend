import { DATE, INTEGER, Model } from "sequelize";
import { sequelizeDb } from "../../../config/db";
import { IUploadDbData } from "../../../domain/uploadCsv";


export const uploadDb = sequelizeDb.define<Model<IUploadDbData>>('transactionUpload', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    dateUpload: {
        type: DATE,
        allowNull: false

    },
    dateTransactions: {
        type: DATE,
        allowNull: false

    }
})