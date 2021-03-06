import { email } from '../../../adapters/mailer'
import { IUser, IUserData } from "../../../domain/user"
import { passwordCript } from "../../../helpers/util"
import { userRepository } from "../repository"
import { userDb } from "../repository/model"


const findById = async (id: string) => {
    await userDb.sync()
    return await userDb.findByPk(id).then((data) => {
        if (!data) throw 'Nenhum usuário encontrado'
        return data
    })

}

const getAllUsers = async () => {

    return await userRepository.getAllUsers()

}

const findByEmail = async (email: string) => await userRepository.findByEmail(email);


const createUser = async (data: IUserData) => {

    const newPassword = Math.floor(Math.random() * (999999 - 10000) + 10000).toString()
    const password = await passwordCript(newPassword)

    const newData: IUser = {
        ...data,
        password: password,
        userLevel: 2,
        active: 1
    }

    const emailData = {
        to: data.email,
        body: `sua senha é ${newPassword}`,
        subject: "Sua senha chegou"
    }
    const findEmail = await findByEmail(newData.email)
    if (findEmail) throw new Error('E-mail já está sendo utilizado!')

    await userRepository.createUser(newData)
    await email.sendMail(emailData)
}

export const userUseCase = {
    createUser,
    findById,
    getAllUsers
}