import { IUser, IUserData, IUserUseCase } from "../../../domain/user"
import { userRepository } from "../repository"
import { userDb } from "../repository/model"
import { email } from '../../../adapters/mailer' 
const findById = async (id: string) => {

    const userFind = await userDb.findByPk(id).then((data) => {
        if (!data) throw 'User not found'
        return data
    })

}

const findByEmail = async (email: string) => {

    return await userDb.findOne({ where: { email: email } })

}


const createUser = async (data: IUserData) => {

    const newPassword = Math.floor(Math.random() * (999999 - 10000) + 10000).toString()
    const newData: IUser = {
        ...data,
        password: newPassword,
        userLevel: 2,
        createAt: new Date

    }
    //await userRepository.createUser(newData)
    const emailData = {
        to: data.email,
        body: `sua senha é ${newPassword}`,
        subject: "Sua senha chegou"
    }

    await email.sendMail(emailData)



    console.log(newData)

}

export const userUseCase = {
    createUser
}