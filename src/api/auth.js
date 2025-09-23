import { notasApi, handleErrors } from './main.js';

export const authenticate = async (credentials) => {
  const { data } = await notasApi.post('/usuario/acceso', credentials).catch((error) => {
    handleErrors(error);
  });
  return data;
}

export const registration = async (credentials) => {
  const { data } = await notasApi.post('/usuario/registro', credentials).catch((error) => {
    handleErrors(error);
  });
  return data;
}