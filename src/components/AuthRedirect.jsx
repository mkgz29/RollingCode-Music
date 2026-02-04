import {Navigate} from 'react-router-dom';

const AuthRedirect = ({ children }) => {
 const auth = JSON.parse(localStorage.getItem("auth"));
 
 if (!auth || !auth.isAuthenticated) {
    return <Navigate to="/login" replace />;
 }

 return children;
};
export default AuthRedirect;