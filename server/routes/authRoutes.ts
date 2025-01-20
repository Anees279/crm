// routes/authRoutes.ts
import express from 'express';
import { signup, login } from '../controller/authController';
import { signupValidation, loginValidation } from '../middleware/AuthValidation';

const router = express.Router();

router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

export default router;
