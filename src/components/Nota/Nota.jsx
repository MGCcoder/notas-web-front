import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import { useState } from 'react';
import NotaEditando from './NotaEditando';
//Iconos
import DeleteIcon  from '@mui/icons-material/Delete';
import EditIcon  from '@mui/icons-material/Edit';
import InventoryIcon  from '@mui/icons-material/Inventory';
import UnarchiveIcon from '@mui/icons-material/Unarchive';
import UndoIcon from '@mui/icons-material/Undo';
import NotaBoton from './NotaBoton';

const Nota = ({notaId, titulo, contenido, onDelete, onUpdate,
  eliminarB, reciclarB, editarB, archivarB, desarchivarB, restaurarB,
}) => {
  const [edit, setEdit] = useState(false);

  const handleSubmitUpdate = (nuevaNota) => {
    onUpdate(notaId, nuevaNota);
    handleSwitchEdit();
  }
  const handleSwitchEdit = () => {
    setEdit(!edit);
  }
  const handleArchive = () => {
    onUpdate(notaId, {estado: 'archivado'});
  }
  const handleUnarchive = () => {
    onUpdate(notaId, {estado: 'visible'});
  }
  const handleRestore = () => {
    onUpdate(notaId, {estado: 'visible'});
  }
  const handleRecicle = () => {
    if(confirm('¿Realmente quieres reciclar esta nota?') == true){
      onUpdate(notaId, {estado: 'papelera'});
    }
  }
  const handleDelete = () => {
    if(confirm('¿Realmente quieres eliminar esta nota?') == true){
      onDelete(notaId);
    }
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
              <NotaBoton mostrar={reciclarB} color="error" onClick={handleRecicle}>
                <DeleteIcon />
              </NotaBoton>
              <NotaBoton mostrar={eliminarB} color="error" onClick={handleDelete}>
                <DeleteIcon />
              </NotaBoton>
              <NotaBoton mostrar={editarB} color="primary" onClick={handleSwitchEdit}>
                <EditIcon />
              </NotaBoton>
              <NotaBoton mostrar={archivarB} onClick={handleArchive}>
                <InventoryIcon />
              </NotaBoton>
              <NotaBoton mostrar={desarchivarB} onClick={handleUnarchive}>
                <UnarchiveIcon />
              </NotaBoton>
              <NotaBoton mostrar={restaurarB} onClick={handleRestore}>
                <UndoIcon />
              </NotaBoton>
            </CardActions>
          </>
        )
      }
    </Card>
  );
}

export default Nota;
