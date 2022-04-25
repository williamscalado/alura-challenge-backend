import { Ilogin } from "../../../domain/login";
import { userRepository } from "../../user/repository";
import bcrypt from 'bcrypt'


const findUser = async (data: Ilogin) => {

    const { password, email } = data
    const findUserByEmail = await userRepository.findByEmail(email)
    if(!findUserByEmail) throw 'The email does not exist'
    
    const passwordHash  = findUserByEmail.getDataValue('password')
    const validatePassword = await bcrypt.compare(password, passwordHash)
    if(!validatePassword) throw 'The password is incorrect'
    


}



export const loginUseCase = {
    findUser
}