import { createHash } from 'crypto'
import fs from 'fs'

export const unlinkFile = (file: string) => {
    fs.unlink(file, (res)=>{
        return res
    })
}


export const passwordCript = (password: string) => {
    const hash = createHash('sha256')    
    return hash
    .update(password)
    .digest('hex')

}