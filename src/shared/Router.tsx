import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "../page/Main";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Detail from "../page/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Detail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
