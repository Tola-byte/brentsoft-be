import { Request, Response } from 'express';
import { sendEmail } from '../services/emailServices';

export const sendEmailHandler = async (req: Request, res: Response) => {
    const { to, subject, text } = req.body;
    try {
        await sendEmail(to, subject, text);
        res.status(200).json({ message: "Email sent successfully" });
    } catch (error: any) {
        res.status(500).json({ message: "Failed to send email", error: error.message });
    }
};
