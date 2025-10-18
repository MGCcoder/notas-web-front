import { notasApi, handleErrors } from './main.js';

export const index = async () => {
  const { data } = await notasApi.get('/nota').catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const search = async ({contenido, estado}) => {
  const params = { contenido, estado };
  const { data } = await notasApi.get('/nota/search', {params}).catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const create = async (datos) => {
  const { data } = await notasApi.post('/nota/create', datos).catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const update = async (id, params) => {
  const { data } = await notasApi.put(`/nota/${id}`, params).catch((error) => {
    handleErrors(error);
  });
  return data;
}
export const destroy = async (notaId) => {
  const { data } = await notasApi.delete(`/nota/${notaId}`).catch((error) => {
    handleErrors(error);
  });
  return data;
}