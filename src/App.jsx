import { useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import { seedUsers } from "./auth/authSeed";
import "./App.css";

import Home from "./pages/Home";
import Admin from "./pages/Admin";
import RequireRole from "./auth/RequireRole";
import { ROLES } from "./auth/roles";
import Detail from "./pages/Detail";
import About from "./pages/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/Notfound";
import AuthRedirect from "./components/AuthRedirect";
import SearchResults from "./pages/SearchResults";

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route
          path="/home"
          element={
            <AuthRedirect>
              <Home />
            </AuthRedirect>
          }
        />

        <Route path="/search" element={<SearchResults />} />

        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  useEffect(() => {
    seedUsers();
  }, []);

  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;