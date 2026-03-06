import nodemailer from "nodemailer";

export async function POST(request: Request) {
    const { name, mail, message } = await request.json()
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: process.env.SMTP_PORT,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    })
    const mailOptions = {
        from: mail,
        to: process.env.EMAIL_USER,
        subject: `Message From ${name}`,
        text: message
    }

    try {
        await transporter.sendMail(mailOptions)
        return Response.json({ status: 200, message: "Email sent successfully" })
    } catch (error) {
        console.log(error)
        return Response.json({ status: 500, message: "Email could not be sent" })
    }
}