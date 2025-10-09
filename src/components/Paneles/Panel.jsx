import { Box, Grid } from "@mui/material";
import NotaNueva from "../Nota/NotaNueva";
import Nota from "../Nota/Nota";
import { useCallback, useEffect, useState } from "react";
import { actualizar, crear, eliminar, index } from '../../api/fetchNotas';
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

  const handleSubmitUpdate = useCallback( async (notaId, nuevaNota) => {
    await actualizar(notaId, nuevaNota).then((response) => {
      console.log(response);
      // alert(JSON.stringify(response));
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
      m: '15vh 0',
      minHeight: '92vh',
      minWidth: '90vw',
    }}
    container>
      <Grid 
        sx={{
          display: "flex",
          justifyContent: "center"
        }}
        size={{sm:12, md:4}}>
          <Box sx={{
            m: "4rem"
          }}>
            <NotaNueva onSubmit={handleSubmit}/>
          </Box>
      </Grid>
      <Grid 
        size={{sm:12, md:8}}
        container
        spacing={1}>
          {
            notas.map((nota, llave) => (
              <Grid
                size={4}
                key={llave}>
                  <Nota notaId={nota.id} 
                    titulo={nota.titulo} 
                    contenido={nota.contenido} 
                    onDelete={handleDelete}
                    onUpdate={handleSubmitUpdate}
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
