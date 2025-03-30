import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import animation from "../assets/Animation.gif";
import useRole from "../hooks/useRole";
const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loading } = useAuth();
  const [role, roleloading] = useRole();
  console.log("user er role", user?.role, " use role is", role);
  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (loading || roleloading) {
    return <img src={animation} alt="" />;
  }

  if (role !== "User") {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
