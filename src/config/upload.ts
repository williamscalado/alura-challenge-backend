import { Request } from "express"
import multer from "multer"
import path from "path"
import crypto from 'crypto'


export const pahtUpload = path.join(__dirname, '../../assets/upload')

const uploadConfig = multer.diskStorage({
    destination: function (req: Request, file, cb: CallableFunction) {
        cb(null, pahtUpload)
    },
    filename: function (req: Request, file, cb: CallableFunction) {

        const extFile = file.originalname.split('.')[1]

        const name = crypto
            .createHash('sha256')
            .digest('hex')

        const fullNameFile = `${name}${Date.now()}.${extFile}`

        cb(null, fullNameFile)



    }
})

export const uploadMulter = multer({
    storage: uploadConfig
})
