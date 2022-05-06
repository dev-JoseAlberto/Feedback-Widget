import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";

const app = express();

app.use(express.json());

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "344f65a318bb68",
      pass: "4b6a75f435068c"
    }
  });


app.post('/feedbacks', async (request, response) => {
    //const { type, comment, screenshot } = request.body;

    const feedback = await prisma.feedback.create({
        data: {
            type:request.body.type,
            comment:request.body.comment,
            screenshot: request.body.screenshot,
        }
    })
    
  await transport.sendMail({
    from:'Team feedback <hello@feedget.com>',
    to: 'Jose Alberto <alberto.05.lq1@gmail.com>',
    subject: 'New feedback',
    html: [
      '<div style="font-family: sans-serif; font-size: 16px; color:#111;">',
      '<p>Type feedback: ${type}</p>',
      '<p>Comment: ${comment}</p>',
      '</div>'
    ].join('\n')
  });

  return response.status(201).json({data:feedback});

});

app.listen(3333, () => {
    console.log('HTTP server running!');
});