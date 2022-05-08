const nodemailer = require("nodemailer");

class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      // host: 'smtp.gmail.com',
      // port: process.env.SMTP_PORT,
      // secure: false,
      service: 'gmail',
      auth: {
        user: 'nodetestyan@gmail.com',
        pass:'lkrblbauzapsuhjr',
      },
    });
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: 'nodetestyan@gmail.com',
      to,
      subject: "Активация аккаунта на " + process.env.API_URL,
      text: "",
      html: `
                    <div>
                        <h1>Для активации перейдите по ссылке</h1>
                        <a href="${link}">${link}</a>
                    </div>
           `,
    });
  }
}

module.exports = new MailService();
