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

    return await userRepository.findByEmail(email)

}


const createUser = async (data: IUserData) => {

    const newPassword = Math.floor(Math.random() * (999999 - 10000) + 10000).toString()
    const newData: IUser = {
        ...data,
        password: newPassword,
        userLevel: 2
    }
    //
    const emailData = {
        to: data.email,
        body: `sua senha é ${newPassword}`,
        subject: "Sua senha chegou"
    }
    const findEmail = await findByEmail(newData.email)
    if(findEmail) throw new Error('Email alread exist')
    
    await userRepository.createUser(newData)
    console.log(findEmail)

    await email.sendMail(emailData)



}

export const userUseCase = {
    createUser
}