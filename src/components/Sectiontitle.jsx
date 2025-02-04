import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Sectiontitle = ({ title, subtitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="mx-auto text-center py-12">
      <h3 className="uppercase text-[18px] gap-1 text-[#b58753] md:text-xl  my-4 font-bold    ">
        <span className="border-l-[3px] pr-1 border-[#b58753]"></span>
        {title}
      </h3>
      <p className="text-[#44cfbf]  uppercase my-4 font-semibold  text-2xl md:text-5xl ">
        {subtitle}
      </p>
    </div>
  );
};

export default Sectiontitle;
