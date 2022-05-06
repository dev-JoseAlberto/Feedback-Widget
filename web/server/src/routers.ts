import express from "express";
import nodemailer from "nodemailer";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routers = express.Router()

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "344f65a318bb68",
      pass: "4b6a75f435068c"
    }
});



routers.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body;
    
    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
    
  //await transport.sendMail({
    //from:'Team feedback <hello@feedget.com>',
    //to: 'Jose Alberto <alberto.05.lq1@gmail.com>',
    //subject: 'New feedback',
    //html: [
      //'<div style="font-family: sans-serif; font-size: 16px; color:#111;">',
      //'<p>Type feedback: ${type}</p>',
      //'<p>Comment: ${comment}</p>',
      //'</div>'
    //].join('\n')
 // });

  return response.status(201).send();

});