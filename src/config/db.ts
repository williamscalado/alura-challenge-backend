import { Sequelize } from "sequelize";
import path from "path";

const Db = path.join(__dirname, '../data') + '/db.sqlite';

export const sequelizeDb = new Sequelize({
    dialect: 'sqlite',
    storage: Db,
    logging:  false,

})
