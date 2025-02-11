import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import animation from "../assets/Animation.gif";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  if (loading) {
    return <img src={animation} alt="" />;
  }
  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }}></Navigate>;
};

export default PrivateRoute;
