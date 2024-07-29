import React, { useContext, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import insurance from '../assets/insurance.jpg';
import './Login.css';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  height: '100vh',
  padding: 0,
  overflow: 'hidden',
}));

const ImageSection = styled(Box)(({ theme }) => ({
  flex: 1,
  backgroundImage: `url(${insurance})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
}));

const FormSection = styled(Box)(({ theme }) => ({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f0f8ff',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: '400px',
  width: '100%',
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: '#2575fc',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#1e63d0',
  },
}));

const Login = () => {
  const { setUsername } = useContext(UserContext);
  const navigate = useNavigate(); // Hook for navigation
  const emailRef = useRef(null);
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState({ email: false, username: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = emailRef.current.value;
    const usernameValue = usernameRef.current.value;
    const passwordValue = passwordRef.current.value;

    if (emailValue && usernameValue && passwordValue) {
      if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(emailValue)) {
        setError((prev) => ({ ...prev, email: true }));
      } else {
        setError({ email: false, username: false, password: false });
        setUsername(usernameValue);
        console.log('Form Submitted Successfully');
        navigate('/Display'); // Navigate to Home page
      }
    } else {
      setError({
        email: !emailValue,
        username: !usernameValue,
        password: !passwordValue,
      });
    }
  };

  return (
    <StyledContainer>
      <ImageSection />
      <FormSection>
        <StyledPaper elevation={6}>
          <Typography variant="h4" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Affordable health insurance to families in America since 2022.
          </Typography>
          <Box component="form" sx={{ width: '100%' }} noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              inputRef={emailRef}
              id="email"
              label="Email"
              variant="outlined"
              fullWidth
              margin="normal"
              error={error.email}
              helperText={error.email ? 'Please enter a valid email' : ''}
            />
            <TextField
              inputRef={usernameRef}
              id="username"
              label="Username"
              variant="outlined"
              fullWidth
              margin="normal"
              error={error.username}
              helperText={error.username ? 'Please enter your username' : ''}
            />
            <TextField
              inputRef={passwordRef}
              id="password"
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              margin="normal"
              error={error.password}
              helperText={error.password ? 'Please enter your password' : ''}
            />
            <StyledButton type="submit" variant="contained" fullWidth>
              Login
            </StyledButton>
          </Box>
          <Typography variant="body2" align="center" style={{ marginTop: '20px' }}>
            Don't have an account? <a href="/register">Create An Account</a>
          </Typography>
        </StyledPaper>
      </FormSection>
    </StyledContainer>
  );
};

export default Login;
