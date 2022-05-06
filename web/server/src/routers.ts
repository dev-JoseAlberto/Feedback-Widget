import express from "express";
import nodemailer from "nodemailer";
import { NodeMailerAdapter } from "./adapters/nodemailer/nodemailer-mail-adapter";
import { prisma } from "./prisma";
import { PrismaFeedbackRepository } from "./repositories/prisma/prisma-feedbacks-repository";
import { SubmitFeedbackUseCase } from "./use-cases/submit-feedback-use-case";

export const routers = express.Router()

routers.post('/feedbacks', async (request, response) => {
    const { type, comment, screenshot } = request.body;
    
    const prismaFeedbackRepository = new PrismaFeedbackRepository()
    const nodemailerMailAdapter = new NodeMailerAdapter()
    
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerMailAdapter
    )

    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    })
    
    return response.status(201).send();

});