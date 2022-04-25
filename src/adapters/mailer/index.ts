import * as nodemailer from 'nodemailer'
import { IMailer, IMailerUseCase } from './contract'


const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "fed8e5cc5ea32f",
    pass: "6693bdfb402814"
  }
});


 const sendMail = async (data: IMailer): Promise<void>  => {

  const { to, body , subject } = data
  const message = {
    from: "test@email.com",
    to: to,
    subject: subject,
    text: body
  }
    transport.sendMail(message, (err, info) =>  {return err ? err : info;}
    
  )


}


export const email : IMailerUseCase = {
 sendMail
}