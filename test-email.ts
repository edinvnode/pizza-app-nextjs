import nodemailer from 'nodemailer';

async function sendTest() {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const info = await transporter.sendMail({
    from: `"Test" <${process.env.SMTP_USER}>`,
    to: 'vatrawolf@gmail.com',
    subject: 'Test email',
    text: 'This is a test from Nodemailer!',
  });

  console.log('✅ Test email sent:', info.response);
}

sendTest().catch(console.error);
