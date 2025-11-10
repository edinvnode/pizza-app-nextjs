import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const data = await req.json();

    // 1️⃣ Setup transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // You can change this to another email service
      auth: {
        user: process.env.SMTP_USER, // Your email address
        pass: process.env.SMTP_PASS, // Your app password
      },
    });

    // 2️⃣ Email content
    const mailOptions = {
      from: `"Narudžba Torte" <${process.env.SMTP_USER}>`,
      to: 'vatrawolf@gmail.com', // ✅ Replace with your own email
      subject: `Nova narudžba - ${data.temaTorte || 'Bez teme'}`,
      html: `
        <h2>Nova narudžba torte</h2>
        <p><strong>Tema torte:</strong> ${data.temaTorte}</p>
        <p><strong>Broj kriškica:</strong> ${data.brojKriskica}</p>
        <p><strong>Boja kriškica:</strong> ${data.bojaKriskica}</p>
        <p><strong>Boja mašnice:</strong> ${data.bojaMasnice}</p>
        <p><strong>Slaganje torte:</strong> ${data.slaganjeTorte}</p>
        <p><strong>Preuzimanje:</strong> ${data.datumPreuzimanja}</p>
        <p><strong>Podaci za dostavu:</strong> ${data.podaciZaDostavu}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Broj telefona:</strong> ${data.brojTelefona}</p>
        <p><strong>Datum preuzimanja:</strong> ${data.datumPreuzimanja}</p>
        <p><strong>Dodatni opis:</strong> ${data.dodatniOpis}</p>
        <p><strong>Vrsta plaćanja:</strong> ${data.vrstePlacanja}</p>
      `,
    };

    // 3️⃣ Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Greška pri slanju e-maila:', error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
