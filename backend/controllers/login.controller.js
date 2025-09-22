import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ success: false, message: 'User not found' });

  if (!user.isVerified)
    return res.status(403).json({ success: false, message: 'Please verify your email first' });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({ success: false, message: 'Invalid credentials' });

  res.status(200).json({ success: true, message: 'Login successful' });
};

