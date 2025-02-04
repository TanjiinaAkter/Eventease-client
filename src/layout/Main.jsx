import { Outlet } from "react-router-dom";
import Footer from "../pages/Shared/Header/Footer/Footer";

const Main = () => {
  return (
    <div className="font-sans  min-h-screen">
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
