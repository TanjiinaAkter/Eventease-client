import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import animation from "../assets/Animation.gif";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  const [role, roleloading] = useRole();
  const location = useLocation();
  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  if (loading || roleloading) {
    return <img src={animation} alt="" />;
  }

  if (role !== "Admin") {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default AdminRoute;
