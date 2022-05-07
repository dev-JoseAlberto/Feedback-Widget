import { SubmitFeedbackUseCase } from "./submit-feedback-use-case";

const createFeedbackSpy = jest.fn();
const sendMailSpy = jest.fn();

const submitFeedback = new SubmitFeedbackUseCase(
        { create: createFeedbackSpy },
        { sendMail: sendMailSpy }
    )

describe('Submit feedback', ()  => {
    it('should be able to submit a feedback', async ()  => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,812egsu8afhasufhn12i3u',
        })).resolves.not.toThrow();

        expect(createFeedbackSpy).toHaveBeenCalled();
    });

    it('should not be able to submit a feedback without type', async ()  => {
        await expect(submitFeedback.execute({
            type: '',
            comment: 'example comment',
            screenshot: 'data:image/png;base64,812egsu8afhasufhn12i3u',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback without comment', async ()  => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: '',
            screenshot: 'data:image/png;base64,812egsu8afhasufhn12i3u',
        })).rejects.toThrow();
    });

    it('should not be able to submit a feedback with an invalid screenshot', async ()  => {
        await expect(submitFeedback.execute({
            type: 'BUG',
            comment: 'The new program still has some bugs in it',
            screenshot: 'test.jpg',
        })).rejects.toThrow();
    });
});