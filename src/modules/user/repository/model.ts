import { DATE, STRING, INTEGER } from "sequelize";
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
    active: {
        type: INTEGER,
        allowNull: true
    }

});

(async () => {
    await userDb.sync()
    const findAminUser = await userDb.findOne({ where: { userLevel: 1, email: "admin@email.com.br" } })

    if (!findAminUser) {
        await userDb.create({
            fullName: 'Admin',
            email: "admin@email.com.br",
            password: "$2b$10$zY2R7n/1Kgvwi9S5k3gb5evvfIqBdy3Xc.jxa1nzAkhP.2wMLsRr2",
            userLevel: 1,
            active: 1
        });
    }
})();
