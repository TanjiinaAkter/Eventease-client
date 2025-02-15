import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const RouteTitle = ({ routetitle, routesubtitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="mx-auto text-center my-6">
      <h3 className=" text-[18px] gap-1 text-[#6a6d6a] md:text-lg  my-4 font-bold    ">
        <span className=""></span>
        {routetitle}
      </h3>
      <p className="text-[#44cfbf]  uppercase my-4 font-semibold  text-xl md:text-3xl ">
        {routesubtitle}
      </p>
      <hr
        className="h-[5px] bg-[#21615a]
 w-[7%] mx-auto"
      />
    </div>
  );
};

export default RouteTitle;
