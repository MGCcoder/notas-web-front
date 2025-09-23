import { Card, CardActions, CardContent, IconButton, Typography } from '@mui/material';
import  DeleteIcon  from '@mui/icons-material/Delete';
import  EditIcon  from '@mui/icons-material/Edit';
import  InventoryIcon  from '@mui/icons-material/Inventory';

const Nota = ({notaId, titulo, contenido, onDelete}) => {
  const handleClick = () => {
    if(confirm('¿Realmente quieres eliminar la nota?') == true){
      onDelete(notaId);
    }
  }
  return (
    <Card sx={{
      width: "20vw",
      height: "25vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    }}>
      <CardContent>
          <Typography variant="h4">{titulo}</Typography>
          <Typography variant="body2">{contenido}</Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleClick}>
          <DeleteIcon />
        </IconButton>
        <IconButton>
          <EditIcon />
        </IconButton>
        <IconButton>
          <InventoryIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Nota;
