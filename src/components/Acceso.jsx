import { useState } from 'react';
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logoVite  from '../assets/vite.svg';
import { useAuth } from '../hooks/useAuth';

const Acceso = () => {
  const [ credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credentials);
    navigate("/");
  }
  const handleEdit = (e) => {
    const { name, value } = e.target;
    setCredentials((prev) => ({...prev, [name]: value}));
  }
  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100vw',
      height: '100vh'
    }}>
      <Paper elevation={4}
        sx={{
          display: 'flex',
          alignItems: 'center',
          textAlign: 'center',
          width: 450,
          height: 600,
          padding: '3rem'
        }}>
          <form onSubmit={handleSubmit}>
            <img src={logoVite} style={{
              margin: 0,
              padding: 0,
              width: 50,
              height: 50
            }}/>
            <Typography variant="h2">Iniciar Sesión</Typography>
            <Stack sx={{
              gap: 2
            }}>
              <TextField name="email" label="Email" onChange={handleEdit}/>
              <TextField name="password" label="Contraseña" type="password" onChange={handleEdit}/>
              <Typography>
                ¿Has olvidado tu contraseña? 
                <Link to="">
                  &#8195;recuperar
                </Link>
              </Typography>
              <Button type="submit" variant="outlined">
                Ingresar
              </Button>
              <Typography>
                ¿Aún tienes cuenta?
                <Link to="/registro">
                  &#8195;registrarse
                </Link>
              </Typography>
            </Stack>
          </form>
      </Paper>
    </Box>
  );
}

export default Acceso;
