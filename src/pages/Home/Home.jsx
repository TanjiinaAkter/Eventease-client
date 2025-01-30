import video from "../../assets/video.mp4";
import Aboutus from "./Aboutus";
import Banner from "./Banner";
import Header from "../Shared/Header/Header";
import Categories from "./Categories/Categories";

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
      <div className="mx-auto  w-[97%]">
        <Aboutus />
        <Categories></Categories>
      </div>
    </div>
  );
};

export default Home;
