import fs from 'fs'

export const unlinkFile = (file: string) => {
    fs.unlink(file, (res)=>{
        return res
    })
}