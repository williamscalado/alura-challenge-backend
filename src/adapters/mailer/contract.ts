export interface IMailer {
    to: string
    subject: string
    body: string
    isHTML?: boolean
    template?: number
}

export interface IMailerUseCase {
    sendMail(data: IMailer): Promise<void>
}