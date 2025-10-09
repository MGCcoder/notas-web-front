import { Box, Button, CardActions, CardContent, IconButton, TextField, Tooltip } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';

const NotaEditando = ({titulo, contenido, onSubmit, onClose}) => {
  const [nuevaNota, setNuevaNota] = useState({
    titulo,
    contenido
  });

  const handleEdit = (e) => {
    const { name, value } = e.target;
    setNuevaNota((prev) => ({...prev, [name]: value}));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(nuevaNota);
  }
   return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}
    component="form"
    onSubmit={handleSubmit}
    >
      <CardContent sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: 1
      }}>
        <Box sx={{
          display: 'flex',
          justifyContent:'start'
        }}>
          <Tooltip title="Atrás" placement="top">
            <IconButton onClick={onClose}>
              <ArrowBackIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <TextField name="titulo" label="titulo" defaultValue={titulo} onChange={handleEdit}/>
        <TextField 
          name="contenido"
          label="contenido"
          defaultValue={contenido}
          onChange={handleEdit}
          multiline
          rows={4}
          />
      </CardContent>
      <CardActions>
        <Button variant="outlined" type="submit">
          Terminar
        </Button>
      </CardActions>
    </Box>
  );
}

export default NotaEditando;
