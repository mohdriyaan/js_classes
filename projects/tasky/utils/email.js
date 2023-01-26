import nodelmailer from "nodemailer";
import config from "config";
import generaterandom from "./otp.js";
let otp = generaterandom(4);

let sendMail = async (emailData) => {
  const HOST = config.get("EMAIL_SMTP.HOST");
  const AUTH = config.get("EMAIL_SMTP.AUTH");
  const PORT = config.get("EMAIL_SMTP.PORT");

  console.clear();
  console.log("Working ✅");
  console.log(HOST, AUTH, PORT);

 
  try {

    let transporter = nodelmailer.createTransport({
      host: HOST,
      port: PORT,
      secure: true,
      auth: {
        user: AUTH["USER"],
        pass: AUTH["PASS"],
      },
    });
    await transporter.sendMail({
      from: `"Tasky Solutions" <${AUTH["USER"]}>`,
      subject: emailData.subject,
      to: emailData.to,
      html: emailData.body,
    });
  } catch (error) {
    console.log(error);
  }
};

export default sendMail
