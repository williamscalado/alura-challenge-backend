export interface Iuser {
    id: string
    fullName: string,
    email: string,
    password: string,
    createAt: Date,
    userLevel: number
}

export interface IUserData extends Omit<Iuser, "id" | "createAt" | "userLevel"> { }



export interface IUserUseCase {
    findById(id: string): () => Iuser[],
    findByEmail(email: string): () => boolean
    createUser(data: IUserData): () => void
    updateUser(id: string, data: Iuser): () => void
    deleteUser(id: string): () => void
}
