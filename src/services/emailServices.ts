
import mailTransport from "../config/mailConfig";

export const sendEmail = async (to: string, subject: string, text: string) => {
    const mailOptions = {
        from: process.env.MAIL_USER,
        to: to,
        subject: subject,
        text: text
    };

    try {
        const result = await mailTransport.sendMail(mailOptions);
        console.log('Email sent:', result);
        return result;
    } catch (error) {
        console.error('Failed to send email:', error);
        throw error;
    }
};
