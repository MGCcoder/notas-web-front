import { useAuth } from '../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
  const { user } = useAuth();
  const location = useLocation();

  if(!user){
    return <Navigate state={{ from: location }} replace to="acceso"/>
  }
  else 
  return (children);
}

export default ProtectedRoute;
