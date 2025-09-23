import { notasApi, handleErrors } from './main.js';

export const index = async () => {
  const { data } = await notasApi.get('/nota').catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const crear = async (datos) => {
  const { data } = await notasApi.post('/nota/create', datos).catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const eliminar = async (notaId) => {
  const { data } = await notasApi.delete(`/nota/${notaId}`).catch((error) => {
    handleErrors(error);
  });
  return data;
}