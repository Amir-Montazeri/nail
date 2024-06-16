import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: process.env.NODE_MAILER_GOOGLE_EMAIL_ADDRESS,
    clientId: process.env.NODE_MAILER_GOOGLE_CLIENT_ID,
    clientSecret: process.env.NODE_MAILER_GOOGLE_CLIENT_SECRET,
    refreshToken: process.env.NODE_MAILER_GOOGLE_REFRESH_TOKEN,
  },
});

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `http://localhost:3000/auth-new-verification?token=${token}&email=${email}`;

  await transporter.sendMail({
    from: process.env.NODE_MAILER_GOOGLE_EMAIL_ADDRESS,
    to: email,
    subject: 'Confirm your email',
    html: `<p>Click <a href="${confirmLink}">here</a> to confirm your email!</p>`,
  });
};
