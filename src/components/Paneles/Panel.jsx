import { Box, Grid } from "@mui/material";
import NotaNueva from "../Nota/NotaNueva";
import Nota from "../Nota/Nota";
import { useCallback, useEffect, useState } from "react";
import { crear, eliminar, index } from '../../api/fetchNotas';
import Loading from "../Loading";


const Panel = () => {
  const [notas, setNotas] = useState();
  const [recargar, setRecargar] = useState(false);

  useEffect(() => {
    index().then((response) => {
      setNotas(response.datos);
    });
  },[recargar]);

  const Recargar = () => {
    setRecargar(!recargar);
  }

  const handleSubmit = useCallback( async (nota) => {
    await crear(nota).then((response) => {
      console.log(response);
    });
    Recargar();
  }, []);

  const handleDelete = useCallback( async (notaId) => {
    await eliminar(notaId).then((response) => {
      console.log(response);
    });
    Recargar();
  },[]);
  if(!notas){
    return <Loading />
  }
  else {
  return (
    <Grid 
    sx={{
      mt: '6.7vh',
      minHeight: '92vh',
      minWidth: '90vw',
    }}
    container>
      <Grid 
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
        item
        size={4}>
          <Box sx={{
            m: "4rem"
          }}>
            <NotaNueva onSubmit={handleSubmit}/>
          </Box>
      </Grid>
      <Grid 
        item
        size={8}
        container>
          {
            notas.map((nota, llave) => (
              <Grid
                sx={{
                  m: "4rem"
                }}
                size={2.5}
                key={llave}>
                  <Nota notaId={nota.id} 
                    titulo={nota.titulo} 
                    contenido={nota.contenido} 
                    onDelete={handleDelete}
                    />
              </Grid>
            ))
          }
      </Grid>
    </Grid>
  );
}
}

export default Panel;
