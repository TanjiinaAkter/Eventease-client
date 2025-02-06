import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  const location = useLocation();
  const isLoginOrRegistration =
    location.pathname === "/login" || location.pathname === "/registration";
  return (
    <div className="font-sans  min-h-screen">
      <Outlet></Outlet>
      {isLoginOrRegistration ? "" : <Footer></Footer>}
    </div>
  );
};

export default Main;
