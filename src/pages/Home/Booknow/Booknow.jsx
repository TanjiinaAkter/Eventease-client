import { useEffect } from "react";
import { SlCalender } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
const Booknow = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    // #44cfbf bg-[#010204a1]
    <div className="mx-auto relative  bg-no-repeat h-auto md:h-[39rem] z-50  bg-cover bg-fixed bg-start bg-[url('https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg')] w-full mt-12">
      <div className="absolute inset-0 z-0 bg-[#173e38bf]  opacity-95"></div>
      <div className="flex  overflow-hidden flex-col md:flex-row mx-5 relative brightness-105 z-50 justify-between items-center gap-6">
        <div className="flex py-4 md:p-12 z-50 flex-col justify-center space-y-6 w-full md:w-1/2">
          <p className=" text-[#44cfbf] pl-1 border-l-2 border-[#44cfbf] text-[16px] ">
            BOOK NOW
          </p>
          <p className="text-[#b58753]  text-2xl md:text-4xl">
            Ready to Create Your Next Event?
          </p>
          <div className="flex justify-start">
            <button className="button">Plan your event </button>
          </div>
        </div>
        <div className="flex flex-col my-4 gap-5 w-full md:w-1/2 justify-between items-start">
          <div
            data-aos="fade-left"
            className="bg-[#e3d7d72e] text-white p-6 w-full md:w-[60%] rounded-md 
            space-y-4 text-center transition-all duration-300 ease-in-out 
            hover:bg-[#0f1c1c] ">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-2xl font-semibold">Event hosted</p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#e3d7d72e] text-white p-6 w-full md:w-[60%] rounded-md 
            space-y-4 text-center transition-all duration-300 ease-in-out hover:scale-105
            hover:bg-[#0f1c1c]">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">1300+</p>
            <p className="text-2xl font-semibold">Happy Attendees</p>
          </div>
          <div
            data-aos="fade-left"
            className="bg-[#e3d7d72e] text-white p-6 w-full md:w-[60%] rounded-md 
            space-y-4 text-center transition-all duration-300 ease-in-out 
            hover:bg-[#0f1c1c]">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">4.9/5</p>
            <p className="text-2xl font-semibold">Client Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
