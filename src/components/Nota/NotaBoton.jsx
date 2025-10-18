import { IconButton } from '@mui/material';

const NotaBoton = ({children, mostrar, color, onClick}) => {
  if(!mostrar){
    return <></>;
  }
  else {
    return (
      <IconButton color={color} onClick={onClick}>
        {children}
      </IconButton>
    );
  }
}

export default NotaBoton;
