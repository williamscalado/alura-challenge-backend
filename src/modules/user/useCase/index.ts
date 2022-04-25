import { match } from "assert"
import { IUser, IUserData, IUserUseCase } from "../../../domain/user"
import { userDb } from "../repository/model"

const  findById = async (id: string) => {
        
   const userFind = await userDb.findByPk(id).then((data)=>{
    if(!data) throw 'User not found'
    return data
   })   

}

const findByEmail = async (email: string) => {

    return await userDb.findOne({where : { email : email}})
    
}


const createUser = (data: IUserData) =>{
    
    const newPassword = Math.floor(Math.random() * (999999 - 10000) + 10000 ).toString()
    const newData: IUser = {
        ...data,
        password: newPassword,
        userLevel: 2,
        createAt: new Date     

    }

    console.log(newData)

}

export const userUseCase = {
    createUser
}