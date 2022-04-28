import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Ilogin } from "../../../domain/login";
import { userRepository } from "../../user/repository";
const findUser = async (data: Ilogin) => {

    const { password, email } = data
    const findUserByEmail = await userRepository.findByEmail(email)
    if (!findUserByEmail) throw 'E-mail não existe!'

    const idUser = findUserByEmail.id
    const passwordHash = findUserByEmail.password
    const validatePassword = await bcrypt.compare(password, passwordHash)

    if (!validatePassword) throw 'Senha digitada está incorreta!'

    const token = jwt.sign({ id: idUser }, `${process.env.PRIVATEKEY}`, { algorithm: 'HS256', expiresIn: '5min' })

    return token;

}


export const loginUseCase = {
    findUser
}