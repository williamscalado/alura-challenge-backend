import { DATE , STRING , INTEGER  } from "sequelize";
import { Model } from "sequelize/types";
import { sequelizeDb } from "../../../config/db";
import { IUser } from "../../../domain/user";


export const userDb = sequelizeDb.define<Model<IUser>>('users', {
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
   userLevel: {
        type: INTEGER,
        allowNull: false
    },
    

})