import nodemailer from 'nodemailer';
import { mailContentGenerator } from './mail-generator';

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
  const confirmLink = `http://localhost:3000/auth-new-verification?token=${token}&email=${email}`,
    htmlContent = mailContentGenerator(
      'verify your email',
      `It seems you have requested to confirm your email through our <a href="http://localhost:3000" style="text-decoration: none; color: rgb(124, 58, 237)" >website</a >. If so please click the following button '<span>Confirm Email!</span >'; however, if this wasn't you please do nothing, or call our admin to inform us.`,
      'Confirm Email!',
      confirmLink
    );

  await transporter.sendMail({
    from: process.env.NODE_MAILER_GOOGLE_EMAIL_ADDRESS,
    to: email,
    subject: 'Confirm your email',
    html: htmlContent,
  });
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `http://localhost:3000/configure-new-password?token=${token}&email=${email}`,
    htmlContent = mailContentGenerator(
      'reset your password',
      `It seems you have requested to reset your password through our <a href="http://localhost:3000" style="text-decoration: none; color: rgb(124, 58, 237)" >website</a >. If so please click the following button '<span>Reset Password!</span >'; however, if this wasn't you please do nothing, or call our admin to inform us.`,
      'Reset Password!',
      resetLink
    );

  await transporter.sendMail({
    from: process.env.NODE_MAILER_GOOGLE_EMAIL_ADDRESS,
    to: email,
    subject: 'Reset your password',
    html: htmlContent,
  });
};
