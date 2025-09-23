import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";


const Registro = () => {
  const [credentials, setCredentials] = useState({
    nombre: '',
    apellidos: '',
    email: '',
    password: '',
    password_confirmation: '',
  });
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signin(credentials);
    navigate("/");
  }
  const handleEdit = (e) => {
    const {name, value} = e.target;
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
          justifyContent: 'center',
          textAlign: 'center',
          width: 450,
          height: 600,
          padding: '3rem'
        }}>
          <form onSubmit={handleSubmit}>
            <Typography variant="h2">Registrarse</Typography>
            <Stack sx={{
              gap: 2
            }}>
              <TextField name="nombre" label="Nombre" onChange={handleEdit} />
              <TextField name="apellidos" label="Apellidos" onChange={handleEdit} />
              <TextField name="email" label="Email" onChange={handleEdit} />
              <TextField name="password" label="Contraseña" type="password"  onChange={handleEdit} />
              <TextField name="password_confirmation" label="Confirmar contraseña" type="password" onChange={handleEdit} />
              <Button type="submit" variant="outlined">
                Registrarse
              </Button>
              <Typography>
                ¿Ya tienes cuenta?
                <Link to="/acceso">
                  &#8195;Iniciar sesión
                </Link>
              </Typography>
            </Stack>
          </form>
        </Paper>
    </Box>
  );
}

export default Registro;
