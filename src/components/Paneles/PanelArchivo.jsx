import { Grid } from '@mui/material';
import Nota from '../Nota/Nota';
import Loading from '../Loading';
import { destroy, search, update } from '../../api/fetchNotas';
import { useCallback, useEffect, useState } from 'react';

const PanelArchivo = () => {
  const [recargar, setRecargar] = useState();
  const [notas, setNotas] = useState();

  useEffect(() => {
    search({estado: 'archivado'}).then((response) => {
      setNotas(response.datos);
    });
  },[recargar]);

  const Recargar = () => {
    setRecargar(!recargar);
  }

  const handleSubmitUpdate = useCallback( async (notaId, nuevaNota) => {
      await update(notaId, nuevaNota).then((response) => {
        console.log(response);
        // alert(JSON.stringify(response));
      });
      Recargar();
    }, []);
  
  const handleDelete = useCallback( async (notaId) => {
    await destroy(notaId).then((response) => {
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
        m: '15vh 5rem',
        minHeight: '92vh',
        minWidth: '90vw',
      }}
      container>
      <Grid 
        size={{sm:12, md:12}}
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
                    reciclarB
                    editarB
                    desarchivarB
                    />
              </Grid>
            ))
          }
      </Grid>
    </Grid>
  );
  }
}

export default PanelArchivo;
