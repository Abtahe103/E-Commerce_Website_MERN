import crypto from 'crypto';
import { transporter } from '../utils/mailer.js';
import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const registerUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ success: false, message: 'Email already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = crypto.randomBytes(32).toString('hex');

    const newUser = new User({
      email,
      password: hashedPassword,
      verificationToken,
      isVerified: false,
    });

    await newUser.save();

    const verifyUrl = `http://localhost:5173/verify/${verificationToken}`;

    await transporter.sendMail({
      from: `"${process.env.EMAIL_FROM_NAME}" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: 'Verify Your Email',
      html: `
        <h2>Verify Your Email</h2>
        <p>Click below link to verify your mail:</p>
        <a href="${verifyUrl}">${verifyUrl}</a>
      `,
    });


    res.status(201).json({ success: true, message: 'Check your email to verify your account' });

  } catch (error) {
    console.error('Register Error:', error.message);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
