import axios from 'axios';

export const notasApi =  axios.create({
  baseURL: 'http://localhost:8000/api'
});

export const  handleErrors= (error) => {
  if (error.response) {
    // La petición se hizo pero el servidor respondió con un estado de código
    // en el rango de 2xx
    alert(JSON.stringify(error.response.data));
    console.log(error.response.status);
    console.log(error.response.headers);
  } else if (error.request) {
    // La petición se hizo pero no hubo respuesta
    // `error.request` es una instancia de XMLHttpRequest en el navegador y una instancia de
    // http.ClientRequest en node.js
    alert(JSON.stringify(error.request));
    console.log(error.request);
  } else {
    // Algo paso en la configuración de la petición
    alert(JSON.stringify(error.message));
    console.log('Error', error.message);
  }
  // otro caso
  console.log(error.config);
}

export const asignarHeaders = ({ token }) => {
  notasApi.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};
