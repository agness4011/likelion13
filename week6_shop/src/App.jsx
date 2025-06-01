import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layouts/Layout';
import AppRoutes from './AppRoutes';

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
}
