import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useRole from "../hooks/useRole";
import animation from "../assets/Animation.gif";
const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  console.log(user);
  const [role, roleloading] = useRole();
  const location = useLocation();
  // loading false mane hocche user check korar somoy mane oije authprovider e setloading true korsi oikhane jeno authentication er kaj thik moto complete hote pare, noyto process sesh howar agei login page e redirect hoye jeto,,,,tar por ekhane user na thakle then amra loading false diye bujhacchi je auth er kaj sesh now next kaj e jao
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
