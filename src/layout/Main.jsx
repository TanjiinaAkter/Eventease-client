import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="font-sans  ">
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
