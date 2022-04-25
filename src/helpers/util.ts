import { createHash } from 'crypto'
import fs from 'fs'
import bcrypt from 'bcrypt'
export const unlinkFile = (file: string) => {
    fs.unlink(file, (res)=>{
        return res
    })
}


export const passwordCript = async (password: string) => {
    return  (await bcrypt.hash(password , 10)).toString()
    
}