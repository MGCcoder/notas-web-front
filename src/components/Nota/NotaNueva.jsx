import { Button, Card, CardActions, CardContent, Stack, TextField, Typography } from '@mui/material';
import { useState } from 'react';

const NotaNueva = ({onSubmit}) => {
  const notaDefault = {
      titulo: '',
      contenido: ''
  }
  const [nuevaNota, setNuevaNota] = useState(notaDefault);
  const handleEdit = (e) => {
    const {name, value} = e.target;
    setNuevaNota((prev) => ({...prev, [name]: value}));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(nuevaNota);
    onSubmit(nuevaNota);
    setNuevaNota(notaDefault);
  }

  return (
    <Card sx={{
      width: "20vw"
    }}
    component="form"
    onSubmit={handleSubmit}
    >
      <CardContent>
        <Typography variant="h4" sx={{mb: "1rem"}}>Crear nueva nota</Typography>
        <Stack flexDirection="column" sx={{
          gap: 1
        }}>
          <TextField 
            id="nueva-nota-titulo"
            name="titulo"
            placeholder="Título"
            value={nuevaNota.titulo}
            onChange={handleEdit}
          />
          <TextField 
            id="nueva-nota-contenido"
            name="contenido"
            placeholder="Contenido"
            multiline
            rows={4}
            value={nuevaNota.contenido}
            onChange={handleEdit}
          />
        </Stack>
      </CardContent>
      <CardActions>
        <Button type="submit" variant="outlined">
          Crear
        </Button>
      </CardActions>
    </Card>
  );
}

export default NotaNueva;
