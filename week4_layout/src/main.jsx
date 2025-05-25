import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import MainPage from "./App";
import Search from "./pages/Search";
import RootLayout from "./layouts/RootLayout";
import MyLayout from "./layouts/MyLayout";
import EditNamePage from "./pages/EditNamePage";
import Account from "./pages/Account";


const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<MainPage />} />
        <Route path="search" element={<Search />} />
        <Route element={<MyLayout />}></Route>
      </Route>
      <Route path= "account" element={<MyLayout />}>
        <Route index element={<Account />} />
        <Route path="edit" element={<EditNamePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

