export interface IUser {
    id?: string
    fullName: string,
    email: string,
    password: string,
    createAt: Date,
    userLevel: number
}

export interface IUserData extends Omit<IUser, "id" | "createAt" | "userLevel" | "password"> { }

export interface IUserUseCase {
    findById(id: string): () => IUser[],
    findByEmail(email: string): () => boolean
    createUser(data: IUserData): () => void
    updateUser(id: string, data: IUser): () => void
    deleteUser(id: string): () => void
}
export interface IUserRepository {
    findById(id: string): () => IUser[],
    findByEmail(email: string): () => boolean
    createUser(data: IUserData): () => void
    updateUser(id: string, data: IUser): () => void
    deleteUser(id: string): () => void
}
