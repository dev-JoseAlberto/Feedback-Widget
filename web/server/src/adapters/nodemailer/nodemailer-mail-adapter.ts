import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "344f65a318bb68",
      pass: "4b6a75f435068c"
    }
});

export class NodeMailerAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
            from:'Team feedback <oi@feedget.com>',
            to: 'Jose Alberto <alberto.05.lq1@gmail.com>',
            subject,
            html: body,
         });

    };
}