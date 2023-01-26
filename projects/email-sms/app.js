import config from "config"
import nodemailer from "nodemailer"
async function sendMail(emailData){
    console.clear()

    // const HOST = config.get("EMAIL_SMTP.HOST");
    // const AUTH_USER=config.get("EMAIL_SMTP.AUTH.USER")
    // const AUTH_PASS=config.get("EMAIL_SMTP.AUTH.PASS")
    // const PORT=config.get("EMAIL_SMTP.PORT")
    const {HOST,AUTH_USER,AUTH_PASS,PORT}=config.get("EMAIL_SMTP")

    try{
        let sender = nodemailer.createTransport({
            host:HOST,
            port:PORT,
            secure:true,
            auth:{
                user:AUTH_USER,
                pass:AUTH_PASS
            },
        })

        await sender.sendMail({
            from:`Tasky Services - ${[AUTH_USER]}`,
            subject: emailData.subject,
            to:emailData.to,
            html:emailData.body
        });
    console.log("Email Sent Succesfully.")    
    }catch(err){
        console.log(err)
    }
}
export default sendMail//({
    // subject:"Testing",
    // to:"mohammedrayaan1@gmail.com,suhail13@gmail.com",
    // body:"Hello I am from Tasky.My name is Riyaan."
// })
// config package will take data from default json.
