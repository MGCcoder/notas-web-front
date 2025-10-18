import { Box, Typography } from '@mui/material';
import React from 'react';

const Loading = () => {
  return (
    <Box sx={{
      m: '5rem',
      width: '92%',
      height: '80vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Typography color="primary" variant="h4">Cargando...</Typography>
    </Box>
  );
}

export default Loading;
