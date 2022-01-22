import { Fragment, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../Context';
import { Navbar } from '../navbar/Navbar';
import { Topbar } from '../topbar/Topbar';

export function AuthLayout({ children }: { children: JSX.Element }) {
  //useContext
  const { setStore } = useContext(Context);

  //useNavigate
  const navigate = useNavigate();

  const onLogout = () => {
    setStore({});
    navigate('/login');
  };
  return (
    <Fragment>
      <Topbar onLogout={onLogout} />
      <Navbar />
      {children}
    </Fragment>
  );
}
