import { SlCalender } from "react-icons/sl";

const Booknow = () => {
  return (
    // #44cfbf bg-[#010204a1]
    <div className="mx-auto relative bg-no-repeat h-auto md:h-[34rem] z-50  bg-cover bg-fixed bg-start bg-[url('https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg')] w-full my-12">
      <div className="absolute inset-0 z-0 bg-[#173e38bf]  opacity-95"></div>
      <div className="flex flex-col md:flex-row mx-5 relative brightness-105 z-50 justify-between items-center gap-6">
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
          <div className="bg-[#e3d7d72e] space-y-4 text-center  text-white p-6 w-full md:w-[60%] rounded-md">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-2xl font-semibold">Event hosted</p>
          </div>
          <div className="bg-[#e3d7d72e] space-y-4 text-center  text-white p-6 w-full md:w-[60%] rounded-md">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-2xl font-semibold">Event hosted</p>
          </div>
          <div className="bg-[#e3d7d72e] space-y-4 text-center  text-white p-6 w-full md:w-[60%] rounded-md">
            <SlCalender className="justify-self-center text-2xl font-bold"></SlCalender>
            <p className="text-2xl font-bold">10000+</p>
            <p className="text-2xl font-semibold">Event hosted</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booknow;
