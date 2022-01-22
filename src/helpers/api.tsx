import { auth, list } from './jsons';

export const callApi = async (url: any, options = {}) => {
  if (url.indexOf('authenticate') !== -1) {
    return new Promise((resolve, reject) => {
      resolve(auth);
    });
  } else if (url.indexOf('list') !== -1) {
    return new Promise((resolve, reject) => {
      resolve(list);
    });
  }
  try {
    let resp = await fetch(url, options);
    if (resp.status >= 200 && resp.status <= 204) {
      const body = await resp.json();
      return body;
    } else {
      const body = await resp.json();
      throw new Error(body);
    }
  } catch (e: any) {
    const message = e.title || e.message;
    throw message;
  }
};
