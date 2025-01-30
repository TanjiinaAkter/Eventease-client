import { Outlet } from "react-router-dom";
import Header from "../pages/Shared/Header/Header";
import Banner from "../pages/Home/Banner";
import video from "../assets/video.mp4";
const Main = () => {
  return (
    <div className="font-sans  ">
      <div className="relative bg-amber-200">
        <video
          className="blur-md h-full md:blur-[5px] absolute top-0 bottom-0 left-0 w-full  object-cover  z-0"
          src={video}
          autoPlay
          muted
          loop
        />
        <Header></Header>
        <Banner></Banner>
      </div>
      <Outlet></Outlet>
    </div>
  );
};

export default Main;
