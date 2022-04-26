import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Ilogin } from "../../../domain/login";
import { userRepository } from "../../user/repository";
const findUser = async (data: Ilogin) => {

    const { password, email } = data
    const findUserByEmail = await userRepository.findByEmail(email)
    if (!findUserByEmail) throw 'The email does not exist'

    const idUser = findUserByEmail.id
    const passwordHash = findUserByEmail.password
    const validatePassword = await bcrypt.compare(password, passwordHash)

    if (!validatePassword) throw 'The password is incorrect'

    const token = jwt.sign({ id: idUser }, `${process.env.PRIVATEKEY}`, { algorithm: 'HS256' })

    return token;

}


export const loginUseCase = {
    findUser
}