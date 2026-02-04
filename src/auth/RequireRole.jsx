import { Navigate } from "react-router-dom";

const RequireRole = ({ allowedRoles, children }) => {
  const auth = JSON.parse(localStorage.getItem("auth"));

  if (!auth || !auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!allowedRoles.includes(auth.role)) {
    return <Navigate to="/home" replace />;
  }

  return children;
};

export default RequireRole;