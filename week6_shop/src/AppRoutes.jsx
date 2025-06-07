import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import CreateProduct from "./pages/CreateProduct";

export default function AppRoutes() {
  return (
  <Routes>
    <Route path="/detail/:id" element={<Detail />} />
    <Route path="/" element={<Home />} />
    <Route path="/create" element={<CreateProduct />} />
  </Routes>

  );
}
