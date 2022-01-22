import { ThemeProvider } from '@emotion/react';
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './assets/scss/App.scss';
import { theme } from './assets/theme';
import { AuthLayout } from './components/layout/AuthLayout';
import { NonAuthLayout } from './components/layout/NonAuthLayout';
import { Context } from './Context';
import { routes } from './routes';

function App() {
  //useState
  const [state, setState]: any = useState({});
  const Layout = state.isUserAuthenticated ? AuthLayout : NonAuthLayout;

  return (
    <ThemeProvider theme={theme}>
      <Context.Provider value={{ store: state, setStore: setState }}>
        <BrowserRouter>
          <Layout>
            <Routes>
              {routes.map(({ path, element }: any) => {
                return <Route path={path} element={element} key={path} />;
              })}
            </Routes>
          </Layout>
        </BrowserRouter>
      </Context.Provider>
    </ThemeProvider>
  );
}

export default App;
