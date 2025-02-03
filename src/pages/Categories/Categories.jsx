import { MdOutlineDateRange } from "react-icons/md";
import RouteTitle from "../../components/RouteTitle";
import Header from "../../pages/Shared/Header/Header";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";

const Categories = () => {
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <RouteTitle
        routetitle={"Meet the Artist "}
        routesubtitle={
          "Discover the talent behind the performance"
        }></RouteTitle>
      <div className="grid grid-cols-1 gap-5 space-y-3 mt-5 ">
        {/*============= CATEGORY-1 DESIGN ============= */}
        <div className="bg-[#0f1c1c] mx-auto w-full md:w-[97%] p-4">
          <div className="flex items-center gap-2">
            <img
              className="h-[3rem] bg-white w-[3rem] rounded-full object-cover"
              src="https://i.ibb.co.com/v6FvBqzq/academic.png"
              alt=""
            />
            <div className="text-white">
              <h2 className="text-xl text-[#44cfbf]">Concert</h2>
              <p>3 events available</p>
            </div>
          </div>
          {/*============= CARD DESIGN ============= */}
          <div className="grid grid-cols-1 mx-auto w-[88%] md:w-[97%]   md:grid-cols-2 lg:grid-cols-2 gap-16 space-y-3 my-5">
            <div className="card  hover:scale-105 transition-all ease-in-out duration-500 flex md:h-[18rem] lg:h-[15rem] rounded-none flex-col md:flex-row card-side bg-base-100 shadow-xl">
              <figure className="flex justify-center items-center">
                <img
                  className=" w-full"
                  src="https://i.ibb.co.com/4wpbwvwr/product-school-Gajr-OEN6m4-unsplash.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-[1rem]  relative   rounded-none">
                <h2 className="text-[#b58753] capitalize font-semibold text-2xl">
                  Global Creative Minds Festival
                </h2>

                <p className="text-[#6a6d6a]">
                  A premier event for tech leaders and enthusiasts to explore
                  innovations, network, and gain insights into the
                </p>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">12/02/25</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoIosTime className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">05:00 </p>
                  </div>
                </div>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <IoLocation className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">London</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsTicketPerforatedFill className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">$ 100 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  hover:scale-105 transition-all ease-in-out duration-500 flex md:h-[18rem] lg:h-[15rem] rounded-none flex-col md:flex-row card-side bg-base-100 shadow-xl">
              <figure className="flex justify-center items-center">
                <img
                  className=" w-full"
                  src="https://i.ibb.co.com/4wpbwvwr/product-school-Gajr-OEN6m4-unsplash.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-[1rem]  relative   rounded-none">
                <h2 className="text-[#b58753] capitalize font-semibold text-2xl">
                  Global Creative Minds Festival
                </h2>

                <p className="text-[#6a6d6a]">
                  A premier event for tech leaders and enthusiasts to explore
                  innovations, network, and gain insights into the
                </p>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">12/02/25</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoIosTime className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">05:00 </p>
                  </div>
                </div>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <IoLocation className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">London</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsTicketPerforatedFill className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">$ 100 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*============= CATEGORY-1 DESIGN ============= */}
        <div className="bg-[#0f1c1c] mx-auto w-full md:w-[97%] p-4">
          <div className="flex items-center gap-2">
            <img
              className="h-[3rem] bg-white w-[3rem] rounded-full object-cover"
              src="https://i.ibb.co.com/v6FvBqzq/academic.png"
              alt=""
            />
            <div className="text-white">
              <h2 className="text-xl text-[#44cfbf]">Concert</h2>
              <p>3 events available</p>
            </div>
          </div>
          {/*============= CARD DESIGN ============= */}
          <div className="grid grid-cols-1 mx-auto w-[88%] md:w-[97%]   md:grid-cols-2 lg:grid-cols-2 gap-16 space-y-3 my-5">
            <div className="card  hover:scale-105 transition-all ease-in-out duration-500 flex md:h-[18rem] lg:h-[15rem] rounded-none flex-col md:flex-row card-side bg-base-100 shadow-xl">
              <figure className="flex justify-center items-center">
                <img
                  className=" w-full"
                  src="https://i.ibb.co.com/4wpbwvwr/product-school-Gajr-OEN6m4-unsplash.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-[1rem]  relative   rounded-none">
                <h2 className="text-[#b58753] capitalize font-semibold text-2xl">
                  Global Creative Minds Festival
                </h2>

                <p className="text-[#6a6d6a]">
                  A premier event for tech leaders and enthusiasts to explore
                  innovations, network, and gain insights into the
                </p>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">12/02/25</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoIosTime className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">05:00 </p>
                  </div>
                </div>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <IoLocation className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">London</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsTicketPerforatedFill className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">$ 100 </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card  hover:scale-105 transition-all ease-in-out duration-500 flex md:h-[18rem] lg:h-[15rem] rounded-none flex-col md:flex-row card-side bg-base-100 shadow-xl">
              <figure className="flex justify-center items-center">
                <img
                  className=" w-full"
                  src="https://i.ibb.co.com/4wpbwvwr/product-school-Gajr-OEN6m4-unsplash.jpg"
                  alt="Movie"
                />
              </figure>
              <div className="card-body p-[1rem]  relative   rounded-none">
                <h2 className="text-[#b58753] capitalize font-semibold text-2xl">
                  Global Creative Minds Festival
                </h2>

                <p className="text-[#6a6d6a]">
                  A premier event for tech leaders and enthusiasts to explore
                  innovations, network, and gain insights into the
                </p>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <MdOutlineDateRange className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">12/02/25</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <IoIosTime className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">05:00 </p>
                  </div>
                </div>
                <div className="card-actions justify-between flex shadow-md p-2 ">
                  <div className="flex items-center gap-1">
                    <IoLocation className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">London</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <BsTicketPerforatedFill className="text-[#b58753]" />
                    <p className="text-[#6a6d6a] font-semibold ">$ 100 </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
