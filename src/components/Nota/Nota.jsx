import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import  DeleteIcon  from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import  InventoryIcon  from '@mui/icons-material/Inventory';
import { useState } from 'react';
import NotaEditando from './NotaEditando';

const Nota = ({notaId, titulo, contenido, onDelete, onUpdate}) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    if(confirm('¿Realmente quieres eliminar la nota?') == true){
      onDelete(notaId);
    }
  }
  const handleSubmitUpdate = (nuevaNota) => {
    onUpdate(notaId, nuevaNota);
    handleSwitchEdit();
  }
  const handleSwitchEdit = () => {
    setEdit(!edit);
  }
  return (
    <Card sx={{
      width: "100%",
      height: "35vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      {
        (edit) ? (
          <NotaEditando 
            titulo={titulo} 
            contenido={contenido}
            onClose={handleSwitchEdit}
            onSubmit={handleSubmitUpdate}
            />
        ): (
          <>
            <CardContent sx={{
              height: '80%'
            }}>
                <Typography variant="h4">{titulo}</Typography>
                <Typography variant="body2" sx={{
                  height: '80%',
                  overflow: 'auto',
                }}>{contenido}</Typography>
            </CardContent>
            <CardActions>
              <IconButton color="error" onClick={handleDelete}>
                <DeleteIcon />
              </IconButton>
              <IconButton color="primary" onClick={handleSwitchEdit}>
                <EditIcon />
              </IconButton>
              <IconButton>
                <InventoryIcon />
              </IconButton>
            </CardActions>
          </>
        )
      }
    </Card>
  );
}

export default Nota;
