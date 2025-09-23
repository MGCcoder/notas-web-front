import { Typography } from "@mui/material";
import { useRouteError } from "react-router-dom";


const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <Typography variant="h1">Oops!</Typography>  
      <Typography>Ha ocurrido un error</Typography>
      <Typography>
        {error.statusText || error.message}
      </Typography>
    </div>
  );
}

export default Error;
