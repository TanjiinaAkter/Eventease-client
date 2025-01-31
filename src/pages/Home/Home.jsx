import video from "../../assets/video.mp4";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Header from "../Shared/Header/Header";
import Categories from "./Categories/Categories";
import Featured from "./Featured/Featured";
import Joinevent from "./Joinevent/Joinevent";
import Eventartists from "./Eventartists/Eventartists";
import Testimonial from "./Testimonial/Testimonial";
import Booknow from "./Booknow/Booknow";

const Home = () => {
  return (
    <div className="bg-[#0a1316]">
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
        <Categories></Categories>
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
