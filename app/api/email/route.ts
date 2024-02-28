
import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"

export async function POST(req: NextRequest) {
    const {email, name, message, subject} = await req.json();
    

    const transport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.MY_EMAIL,
            pass: process.env.APP_PASSWORD
        }
    })

    const mailOptions: Mail.Options = { 
        to: 'academicbrad@gmail.com',
        subject,
        text: `${name} sent the following message: ${message} reply to ${email}`,
        html: `<b>${name}</b> <br /> Sent the following email <br /> <p>${message}</p> <br /> reply to ${email}`
    }

    const sendMailPromise = () => 
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function(err) {
                if(!err) {
                    resolve('email sent')
                } else {
                    reject(err.message)
                }
            })
        });

    try {
        await sendMailPromise()
        return NextResponse.json({message: 'Email Sent'})
    } catch(err) {
        return NextResponse.json({error: err}, {status: 500})
    }
}