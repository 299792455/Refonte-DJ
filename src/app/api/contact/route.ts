import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  const { email, telefono, message, honeypot } = await req.json();

  if (honeypot && honeypot.trim() !== '') {
    return NextResponse.json({ success: false, error: 'Bot detected' }, { status: 400 });
  }

  if (!email || !message || !telefono) {
    return NextResponse.json(
      { error: 'Faltan campos obligatorios' },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.GMAIL_USER,
    subject: 'Nuevo mensaje desde el formulario de contacto',
    text: `Teléfono: ${telefono}\n\nMensaje:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
