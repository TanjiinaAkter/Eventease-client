import video from "../../assets/video.mp4";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Header from "../Shared/Header/Header";
import Featured from "./Featured/Featured";
import Joinevent from "./Joinevent/Joinevent";
import Eventartists from "./Eventartists/Eventartists";
import Testimonial from "./Testimonial/Testimonial";
import Booknow from "./Booknow/Booknow";
import { Helmet } from "react-helmet-async";
import HomeCategories from "./HomeCategories/HomeCategories";

const Home = () => {
  //bg-[#132323]
  return (
    <div className=" bg-[#0a1316]">
      <Helmet>
        <title>EventEase |Home</title>
      </Helmet>
      <div className="relative bg-amber-200">
        <video
          className="blur-md h-full md:blur-[5px] absolute top-0 bottom-0 left-0 w-full  object-cover  z-0"
          src={video}
          autoPlay
          muted
          loop
        />
        <Header />
        <Banner />
      </div>
      <div className="mx-auto ">
        <Aboutus />
        <HomeCategories></HomeCategories>
        <Featured></Featured>
        <Eventartists></Eventartists>
        <Joinevent></Joinevent>
        <Testimonial></Testimonial>
        <Booknow></Booknow>
      </div>
    </div>
  );
};

export default Home;
