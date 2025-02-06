import { FaDotCircle } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import SectionTitle from "../../../components/Sectiontitle";
import { ImCross } from "react-icons/im";
import { FiDownload } from "react-icons/fi";
const UserEventDetail = () => {
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      <SectionTitle
        title={"Order Detail"}
        subtitle={"Here is what you ordered"}></SectionTitle>
      <div className="p-5 my-6 bg-[#0f1c1c] flex flex-col justify-center items-center mx-auto w-[90%]  text-white border-2 border-dotted border-[#4c4f4e]">
        <div className=" space-y-3 w-full flex flex-col md:flex-row justify-between  gap-3 ">
          <div className="flex  items-center flex-col gap-3">
            <h2 className="md:text-xl font-semibold ">Order #20250205-2866 </h2>
            <h3 className="text-base flex flex-row gap-2 items-center md:text-lg font-semibold text-[#44cfbf]">
              <SlCalender></SlCalender> 2025-02-05
            </h3>
          </div>
          <div className="flex flex-col items-center gap-3">
            <p className="px-3 py-1 bg-[#e4f360] text-[#ff8d13]  text-center rounded-2xl">
              pending
            </p>
            <p className="px-3 py-1 bg-red-600 text-white  text-center rounded-2xl">
              unpaid
            </p>
          </div>
        </div>
        <hr className="bg-gray-500 border-none my-4 h-[1px] w-full" />
        <div className=" flex flex-wrap border border-[#4b4d4c] md:w-full mx-auto justify-evenly items-center gap-4 p-7 rounded-md bg-[#0f1c1c]">
          <div className=" pb-3 text-center   md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
            <h2 className="text-xl text-white">Total Amount</h2>
            <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
              2
            </h1>
          </div>
          <div className=" pb-3 text-center   md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
            <h2 className="text-xl text-white">Total Tickets</h2>
            <h1 className="text-3xl  font-semibold text-[#44cfbf] text-center mt-2">
              4
            </h1>
          </div>
          <div className="">
            <h2 className="text-xl text-white">Payment Method</h2>
            <h1 className="text-2xl  font-semibold text-[#44cfbf]  mt-2 text-center">
              Cash
            </h1>
          </div>
        </div>
        <div className=" space-y-3 w-full">
          <h2 className="text-xl font-semibold my-3">Event Details </h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="flex col-span-full flex-wrap md:col-span-2 my-4  justify-between  gap-5 md:gap-3">
              <div>
                <h2 className="md:text-base mb-2 font-semibold flex items-center gap-1 ">
                  <FaDotCircle className="text-xs text-[#44cfbf]" />
                  Event Name
                </h2>
                <p className="text-lg md:text-[1.1rem] font-semibold ">
                  Tech Conference 2024
                </p>
              </div>
              <div>
                <h2 className="md:text-base mb-2 font-semibold flex items-center gap-1 ">
                  <FaDotCircle className="text-xs text-[#44cfbf]" />
                  Event Date
                </h2>
                <p className="text-lg md:text-[1.1rem] font-semibold ">
                  12/12/2024
                </p>
              </div>
              <div>
                <h2 className="md:text-base mb-2 font-semibold flex  items-center gap-1 ">
                  <FaDotCircle className="text-xs text-[#44cfbf]" />
                  Event Location
                </h2>
                <p className="text-lg md:text-[1.1rem] font-semibold ">
                  Tech Conference center
                </p>
              </div>
            </div>
            <div className="event-image col-span-full md:col-span-1 flex justify-center items-center">
              <img
                className="w-[8rem] h-[8rem] object-cover"
                src="https://i.ibb.co.com/4wpbwvwr/product-school-Gajr-OEN6m4-unsplash.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-full md:flex-row my-3 gap-3">
          <button className="flex gap-2 items-center">
            Cancel booking <ImCross className="text-sm" />
          </button>
          <button className="flex gap-2 sm:w-[30%] md:w-auto justify-center text-center items-center">
            <FiDownload className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserEventDetail;
