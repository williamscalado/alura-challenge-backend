import { DATE , STRING , INTEGER  } from "sequelize";
import { Model } from "sequelize/types";
import { sequelizeDb } from "../../../config/db";
import { Iuser } from "../../../domain/user";


export const userDb = sequelizeDb.define<Model<Iuser>>('users', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        primaryKey: true,
        
    },
    fullName: {
        type: STRING,
        allowNull: false
    },
    email: {
        type: STRING,
        allowNull: false
    },
    password: {
        type: STRING,
        allowNull: false
    },
    createAt: {
        type: DATE,
        allowNull: false
    },
   userLevel: {
        type: INTEGER,
        allowNull: false
    },
    

})