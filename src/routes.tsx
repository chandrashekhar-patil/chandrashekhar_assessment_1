import { Navigate } from 'react-router-dom';
import { useIsUserAuthenticated } from './helpers/hooks';
import { Login } from './pages/authentication/Login';
import { Dashboard } from './pages/dashboard/Dashboard';
import { List } from './pages/list/List';
import { Details } from './pages/details/Details';

const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const isUserAuthenticated = useIsUserAuthenticated();
  if (!isUserAuthenticated) {
    return <Navigate to='/login' />;
  }
  return children;
};

export const routes = [
  { path: '/login', element: <Login /> },
  {
    path: '/dashboard',
    element: (
      <RequireAuth>
        <Dashboard />
      </RequireAuth>
    ),
  },
  {
    path: '/list',
    element: (
      <RequireAuth>
        <List />
      </RequireAuth>
    ),
  },
  {
    path: '/details/:key',
    element: (
      <RequireAuth>
        <Details />
      </RequireAuth>
    ),
  },
  { path: '/', name: 'Login', element: <Login /> },
];
