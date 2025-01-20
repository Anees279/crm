
import React, { useState } from 'react';
import { Box, TextField, Button, Typography, Stack, Divider, Link } from '@mui/material';
import { Google as GoogleIcon, Apple as AppleIcon } from '@mui/icons-material';
import LottieAnimation from './lottiefiles';
import { SignUpForm } from './SignUpForm';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

interface AuthFormProps {
  onLogin: (email: string, password: string) => void;
  setIsSignUp: (isSignUp: boolean) => void;
  isSignUp: boolean;
}

export const AuthForm: React.FC<AuthFormProps> = ({ onLogin, setIsSignUp, isSignUp }) => {
  const [email, setEmail] = useState<string>(''); 
  const [password, setPassword] = useState<string>(''); 
  const navigate = useNavigate(); 

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isSignUp) {
      try {
        const response = await axios.post('https://crm-eight-pied.vercel.app/auth/login', { email, password });

        if (response.data.token) {
          localStorage.setItem('authToken', response.data.token); // Save token
          localStorage.setItem('loggedInUser', response.data.name); // Save user's name

          toast.success('Login successful!');
          navigate('/HomePage'); // Redirect to HomePage after successful login
        } else {
          toast.error('Incorrect email or password!');
        }
      } catch (error) {
        toast.error('Login failed. Please try again.');
        console.error(error);
      }
    }
  };

  return (
    <Box
      sx={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <LottieAnimation /> 

      {isSignUp ? (
        <SignUpForm
          onSignUp={onLogin}
          setIsSignUp={setIsSignUp}
        />
      ) : (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: '100%',
            maxWidth: 400,
            padding: 3,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: 'background.paper',
            zIndex: 1,
            opacity: 0.9,
          }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            Login
          </Typography>

          <TextField
            label="Email" 
            variant="outlined"
            fullWidth
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            margin="normal"
          />

          <Button type="submit" variant="contained" color="primary" fullWidth sx={{ marginTop: 2 }}>
            Login
          </Button>

          <Stack direction="row" justifyContent="space-between" sx={{ width: '100%', marginTop: 2 }}>
            <Link href="#" variant="body2" onClick={() => setIsSignUp(!isSignUp)}>
              Don't have an account? Sign Up
            </Link>
          </Stack>

          <Divider sx={{ marginY: 2 }}>OR</Divider>

          <Stack spacing={2}>
            <Button variant="outlined" color="primary" startIcon={<GoogleIcon />} fullWidth>
              Login with Google
            </Button>
            <Button variant="outlined" color="primary" startIcon={<AppleIcon />} fullWidth>
              Login with Apple
            </Button>
          </Stack>
        </Box>
      )}

      <ToastContainer />
    </Box>
  );
};
