import { IUser, IUserRepository, IUserUseCase } from "../../../domain/user"
import { userDb } from "../repository/model"

const findById = async (id: string) => {

    try {
        await userDb.sync()
        return await userDb.findByPk(id).then((data) => data)

    } catch (error) {

    }



}



const findByEmail = async (email: string) => {
    try {

        await userDb.sync()
        const result = await userDb.findOne({ where: { email: email } })
        if (!result) return false

        const Data: IUser = result.get()

        return Data

    } catch (error: Error | any) {

        throw new Error(error?.message)
    }
}

const createUser = async (data: IUser) => {
    try {
        await userDb.sync()
        return userDb.create(data)
    } catch (error) {

    }
}

export const userRepository = {
    createUser,
    findByEmail
}