"use server"

import { z } from "zod"
import nodemailer from "nodemailer";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
})

const transporter = nodemailer.createTransport({
  service: 'gmail',  // or your preferred email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export async function submitContactForm(data: z.infer<typeof formSchema>) {
  const result = formSchema.safeParse(data)

  if (!result.success) {
    throw new Error("Invalid form data")
  }

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECIPIENT_EMAIL, // The email where you want to receive messages
      subject: `New Contact Form Message from ${data.name}`,
      text: `
Name: ${data.name}
Email: ${data.email}
Message: ${data.message}
      `,
      html: `
<h2>New Contact Form Message</h2>
<p><strong>Name:</strong> ${data.name}</p>
<p><strong>Email:</strong> ${data.email}</p>
<p><strong>Message:</strong> ${data.message}</p>
      `,
    });
    
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email');
  }
}

