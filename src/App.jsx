import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from './pages/Register';
import NotFound from "./pages/Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
