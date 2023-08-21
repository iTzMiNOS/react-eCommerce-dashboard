
import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Avatar, Box, Button, Checkbox, CssBaseline, FormControlLabel, Grid, Paper, TextField, ThemeProvider, Typography, createTheme } from '@mui/material';

export default function Login(props) {
    const navigate = useNavigate()
    

  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (user === 'test' && pass === '1234') {
      // eslint-disable-next-line react/prop-types
      props.setIsLoggedIn(true);
      navigate('/')
    } else {
      alert('Wrong User or Password, Try again!');
    }
  };

  function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit">
          AI Agency
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

  const defaultTheme = createTheme();

    return (
        <ThemeProvider theme={defaultTheme}>
          <Grid container component="main" sx={{ height: '100vh' }}>
            <CssBaseline />
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: 'url(./login-image.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundColor: (t) =>
                  t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={user}
                    id="user"
                    label="User Name"
                    name="user"
                    placeholder="test"
                    onChange={(event) => setUser(event.target.value)}
                    autoComplete="user"
                    autoFocus
                  />
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    value={pass}
                    name="password"
                    label="Password"
                    type="password"
                    placeholder="1234"
                    onChange={(event) => setPass(event.target.value)}
                    id="password"
                    autoComplete="current-password"
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                    onSubmit={handleSubmit}
                  >
                    Sign In
                  </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                     </Link>
                    </Grid>
        
                  </Grid>
                  <Copyright sx={{ mt: 5 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      );
}