
import mailTransport from "../config/mailConfig";
import { config } from "dotenv";
config();

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: to || process.env.RECEIVER_MAIL,
        subject: subject || 'EMAIL FROM USER',
        text: text
    };

    try {
        const result = await mailTransport.sendMail(mailOptions);
        console.log('Email sent is: ', result);
        return result;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
