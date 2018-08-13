import fetch from 'isomorphic-fetch';

const api = async (pathname: string) => {
  debugger;
  const u = `https://swapi.co/api/${pathname}`;
  const res = await fetch(u);
  return res.json();
};

export default api;

export const people = async (id?: number): Promise<any> =>
  api(`people${id ? '/' + id : ''}`);
export const planets = async (id?: number) =>
  api(`planets${id ? '/' + id : ''}`);
export const starships = async (id?: number) =>
  api(`starships${id ? '/' + id : ''}`);
