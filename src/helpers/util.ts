import jwt from 'jsonwebtoken'
import fs from 'fs'
import bcrypt from 'bcrypt'
export const unlinkFile = (file: string) => {
    fs.unlink(file, (res) => {
        return res
    })
}


export const passwordCript = async (password: string) => {
    return await bcrypt.hash(password, 10)

}


export const getUserIdByToken = (token: string) => {
    const tokenPayLoad = jwt.verify(`${token}`, `${process.env.PRIVATEKEY}`)
    const { id } = tokenPayLoad as { id: string }
    if (!id) return false
    return id
}