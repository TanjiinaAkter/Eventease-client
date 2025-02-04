import Sectiontitle from "../../../components/Sectiontitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { MdPeople } from "react-icons/md";
import { FaArrowCircleRight } from "react-icons/fa";
const Featured = () => {
  return (
    <div className="mx-auto md:mx-6 bg-[#0a1316] w-[88%] md:w-full ">
      <Sectiontitle
        title={"Upcoming Events"}
        subtitle={"Featured Events"}></Sectiontitle>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 1,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            991: {
              slidesPerView: 4,
            },
          }}
          modules={[Pagination, Autoplay]}
          className="mySwiper text-white ">
          <div className="grid grid-cols-1  mx-4 md:grid-cols-4 gap-12">
            <SwiperSlide className="border  border-[#4c4f4e] ">
              <div className="card rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                <figure className="w-full">
                  <img
                    className="rounded-none hover:scale-105 transition-transform duration-300"
                    src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
                  $100
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-[#979a97]">
                    Tech Conference 2024
                  </h2>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-[#6a6d6a] font-semibold"></SlCalender>
                    <p>01/02/25</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#6a6d6a] font-semibold"></FaLocationDot>
                    <p>USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-[#6a6d6a]  font-semibold"></MdPeople>
                    <p>3002</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="border  border-[#4c4f4e] ">
              <div className="card rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                <figure className="w-full">
                  <img
                    className="rounded-none hover:scale-105 transition-transform duration-300"
                    src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
                  $100
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-[#6a6d6a]">
                    Tech Conference 2024
                  </h2>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-[#6a6d6a] font-semibold"></SlCalender>
                    <p>01/02/25</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#6a6d6a] font-semibold"></FaLocationDot>
                    <p>USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-[#6a6d6a]  font-semibold"></MdPeople>
                    <p>3002</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="border  border-[#4c4f4e] ">
              <div className="card rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                <figure className="w-full">
                  <img
                    className="rounded-none hover:scale-105 transition-transform duration-300"
                    src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
                  $100
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-[#979a97]">
                    Tech Conference 2024
                  </h2>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-[#6a6d6a] font-semibold"></SlCalender>
                    <p>01/02/25</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#6a6d6a] font-semibold"></FaLocationDot>
                    <p>USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-[#6a6d6a]  font-semibold"></MdPeople>
                    <p>3002</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="border  border-[#4c4f4e] ">
              <div className="card rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                <figure className="w-full">
                  <img
                    className="rounded-none hover:scale-105 transition-transform duration-300"
                    src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
                  $100
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-[#979a97]">
                    Tech Conference 2024
                  </h2>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-[#6a6d6a] font-semibold"></SlCalender>
                    <p>01/02/25</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#6a6d6a] font-semibold"></FaLocationDot>
                    <p>USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-[#6a6d6a]  font-semibold"></MdPeople>
                    <p>3002</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="border  border-[#4c4f4e] ">
              <div className="card rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                <figure className="w-full">
                  <img
                    className="rounded-none hover:scale-105 transition-transform duration-300"
                    src="https://i.ibb.co.com/x8wW7Cvn/premium-photo-1681487469745-91d1d8a5836b-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg"
                    alt="Shoes"
                  />
                </figure>
                <div className="absolute top-3 p-2 rounded-sm right-3 bg-black font-semibold">
                  $100
                </div>
                <div className="card-body p-4">
                  <h2 className="card-title text-[#979a97]">
                    Tech Conference 2024
                  </h2>
                  <div className="flex items-center gap-2">
                    <SlCalender className="text-[#6a6d6a] font-semibold"></SlCalender>
                    <p>01/02/25</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaLocationDot className="text-[#6a6d6a] font-semibold"></FaLocationDot>
                    <p>USA</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <MdPeople className="text-[#6a6d6a]  font-semibold"></MdPeople>
                    <p>3002</p>
                  </div>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </div>

          {/* text-[#6a6d6a]  */}
        </Swiper>
        <div className="card-actions justify-center my-12">
          <button className="flex flex-row  items-center gap-2 ">
            View All Events
            <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
