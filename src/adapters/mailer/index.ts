import * as nodemailer from 'nodemailer'
import { IMailer, IMailerUseCase } from './contract'


const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "alurachallenge@gmail.com",
    pass: "ohasdannezowvyqo"
  }
});


 const sendMail = async (data: IMailer): Promise<void>  => {

  const { to, body , subject } = data
  const message = {
    from: "Allura Challenge",
    to: to,
    subject: subject,
    text: body
  }
      transport.sendMail(message, (err, info) =>  {
      if(err){
        return err 
      }
     return info
    }
    
  )


}


export const email : IMailerUseCase = {
 sendMail
}