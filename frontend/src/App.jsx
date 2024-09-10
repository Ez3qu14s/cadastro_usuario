import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cadastro from './Cadastro';
import Page from './Page';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Cadastro />,
  },
  {
    path: '/users',
    element: <Page />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
