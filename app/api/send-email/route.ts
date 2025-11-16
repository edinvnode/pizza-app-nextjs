import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const data = await req.json();

    await resend.emails.send({
      from: 'Narudžba Torte <onboarding@resend.dev>',
      to: process.env.EMAIL_TO!,
      subject: `Nova narudžba - ${data.temaTorte || 'Bez teme'}`,
      html: `
        <h2>Nova narudžba torte</h2>
        <p><strong>Tema torte:</strong> ${data.temaTorte}</p>
        <p><strong>Broj komada:</strong> ${data.brojKomada}</p>
        <p><strong>Boja komada:</strong> ${data.bojKomada}</p>
        <p><strong>Preuzimanje:</strong> ${data.preuzimanje}</p>
        <p><strong>Podaci za dostavu:</strong> ${data.podaciZaDostavu}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Broj telefona:</strong> ${data.brojTelefona}</p>
        <p><strong>Dodatni opis:</strong> ${data.dodatniOpis}</p>
        <p><strong>Vrsta plaćanja:</strong> ${data.vrstePlacanja}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err: any) {
    console.error('Resend error:', err);
    return NextResponse.json(
      { success: false, error: err.message },
      { status: 500 }
    );
  }
}
