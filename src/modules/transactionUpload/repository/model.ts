import { STRING } from "sequelize";
import { DATE, INTEGER, Model } from "sequelize";
import { sequelizeDb } from "../../../config/db";
import { IUploadRegisterData } from "../../../domain/transaction";


export const uploadDb = sequelizeDb.define<Model<IUploadRegisterData>>('transactionUpload', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    idUser: {
        type: INTEGER,
        allowNull: false
    },
    dateUpload: {
        type: DATE,
        allowNull: false

    },
    dateTransactions: {
        type: DATE,
        allowNull: false

    },
    file: {
        type: STRING,
        allowNull: false
    }
})

