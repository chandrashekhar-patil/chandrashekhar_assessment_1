import { useContext } from 'react';
import { Context } from '../Context';

export const useIsUserAuthenticated = () => {
  //useContext
  const { store }: any = useContext(Context);
  return store?.isUserAuthenticated || false;
};
