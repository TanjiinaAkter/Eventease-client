import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import animation from "../assets/Animation.gif";
const VendorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [role, roleloading ] = useRole();
  const location = useLocation();
  if (!user && !loading) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  if (loading || roleloading) {
    return <img src={animation} alt="" />;
  }
  if (role !== "Vendor") {
    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default VendorRoute;
