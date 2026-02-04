import { useEffect } from 'react';
import { seedUsers } from './auth/authSeed';
import './App.css'
import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RequireRole from './auth/RequireRole';
import{ ROLES } from './auth/roles';
import Detail from "./pages/Detail";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from './pages/Register';
import NotFound from "./pages/Notfound";
import AuthRedirect from './components/AuthRedirect';

function App() {

  useEffect(() => {
    seedUsers();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/home" element={<AuthRedirect>
          <Home /></AuthRedirect>} />
        <Route path="/admin" element={<RequireRole allowedRoles={[ROLES.ADMIN]}><Admin /></RequireRole>} />
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
