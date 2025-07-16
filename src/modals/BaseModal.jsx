import { Box } from "@mui/material";

const BaseModal = ({open, children, onClose}) => {
  if(!open){ return null }
  else {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.58)',
      overflow: 'hidden',
      zIndex: '10000',
    }}
    name="overlay"
    onClick={onClose}>
      {children}
    </Box>
  );
  }
}

export default BaseModal;
