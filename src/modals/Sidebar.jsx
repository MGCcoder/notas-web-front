import { Box, Paper, Stack, Typography } from "@mui/material";
import NoteIcon from '@mui/icons-material/Note';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShieldIcon  from "@mui/icons-material/Shield";
import DeleteIcon  from "@mui/icons-material/Delete";
import { Link } from "react-router-dom";


const items = [
  {
    name: 'inicio',
    url: '',
    icono: <HomeIcon />
  },
  {
    name: 'archivo',
    url: 'archivo',
    icono: <InventoryIcon />
  },
  // {
  //   name: 'baúl',
  //   url: 'baul',
  //   icono: <ShieldIcon />
  // },
  {
    name: 'papelera',
    url: 'papelera',
    icono: <DeleteIcon />
  },
]
const Sidebar = () => {
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      padding: '10vh 0 0 1rem',
      backgroundColor: 'var(--color-main-dark-500)',
      width: '200px',
      height: '100vh',
      zIndex: '10000'
    }} 
    name="content"
    component={Paper}
    >
      <Stack sx={{
        color: 'var(--color-main-dark-100)',
        gap: 2
      }}>
        {
          items.map((item, llave) => (
            <Link 
              to={item.url}
              key={llave}
            >
              <Stack sx={{
                color: 'var(--color-main-dark-100)',
                '&:hover': {
                  color: 'var(--color-main-dark-250)',
                  cursor: 'pointer'
                },
                flexDirection: 'row',
                gap: 2
              }}
              >
                {
                  item.icono
                }
                <Typography>
                  {item.name}
                </Typography>
              </Stack >
            </Link>
          ))
        }
      </Stack>
    </Box>
  );
}

export default Sidebar;
