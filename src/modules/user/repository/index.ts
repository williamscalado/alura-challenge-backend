import { IUser, IUserRepository, IUserUseCase } from "../../../domain/user"
import { userDb } from "../repository/model"

const  findById = async (id: string) => {        
   return  await userDb.findByPk(id).then((data)=>{

   })   

}

const findByEmail = async (email: string) => {

    return await userDb.findOne({where : { email : email}})
    
}

const createUser = (data: IUser) =>{
    return userDb.create(data)
}

