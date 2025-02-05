import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SignUp = ({ signtitle, signsubtitle }) => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div data-aos="fade-down" className="text-start">
      <h3 className=" text-[18px] gap-1 text-[#6a6d6a] md:text-lg  my-4 font-bold    ">
        <span className=""></span>
        {signtitle}
      </h3>
      <p className="text-[#44cfbf]  uppercase my-4 font-semibold  text-xl md:text-3xl ">
        {signsubtitle}
      </p>
      <hr
        className="h-[5px] bg-[#21615a]
   w-[7%] mx-auto"
      />
    </div>
  );
};

export default SignUp;
