import express from 'express';
import { registerUser } from '../controllers/register.controller.js';
import { loginUser } from '../controllers/login.controller.js';
import { verifyUser } from '../controllers/verifyUser.controller.js';


const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify/:token', verifyUser);

export default router;
