import { INTEGER, STRING, DATE, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import { sequelizeDb } from "../../../config/db";
import { ITransactionData } from "../../../domain/transaction";


export const transactionsDB = sequelizeDb.define<Model<ITransactionData>>('transactions', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    userId: {
        type: STRING,
        allowNull: true
    },
    origBank: {
        type: STRING,
        allowNull: false
    },
    origBranch: {
        type: STRING,
        allowNull: false
    },
    origAccount: {
        type: STRING,
        allowNull: false
    },
    destBank: {
        type: STRING,
        allowNull: false
    },
    destBranch: {
        type: STRING,
        allowNull: false
    },
    destAccount: {
        type: STRING,
        allowNull: false
    },
    transactionAmount: {
        type: STRING,
        allowNull: false
    },
    dateTimerTransaction: {
        type: DATE,
        allowNull: false
    }

})


