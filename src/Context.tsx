import { createContext } from 'react';

export const Context = createContext({
  store: {},
  setStore: (data: any) => {},
});
