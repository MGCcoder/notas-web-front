import { Box, IconButton, Typography } from "@mui/material";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const textColor = {
    '&:hover': {
      color: 'var(--color-main-dark-150)',
      cursor: 'pointer'
    },
    color: 'var(--color-main-dark-100)',
  }
const Navbar = ({onToggleSideBar}) => {
  const { logout, user } = useAuth();
  const handleLogout = () => {
    logout();
  }
  return (
    <Box sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      p: '1rem',
      display: 'flex',
      justifyContent: 'space-between',
      height: '6.7vh',
      width: '100vw',
      zIndex: '10001',
      backgroundColor: 'var(--color-main-dark-500)',
      borderBottom: 'solid 1px var(--color-main-dark-150)',
      color: 'white'
    }}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      }}>
        <IconButton sx={textColor} onClick={onToggleSideBar}>
          <DensityMediumIcon />
        </IconButton>
        <Typography sx={textColor}>
          { (user) ? (`${user.nombre} ${user.apellidos}`) : ('nombre apellidos') }
        </Typography>
      </Box>
      <Box sx={{
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem'
      }}>
        {
          (user) ? (
            <Link onClick={handleLogout}>
              <Typography sx={textColor}>
                Cerrar sesión
              </Typography>
          </Link>
          ): (
          <Link to="acceso">
            <Typography sx={textColor}>
              Iniciar sesión
            </Typography>
          </Link>
          )
        }
      </Box>
    </Box>
  );
}

export default Navbar;