import Sectiontitle from "../../../components/Sectiontitle";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { SlCalender } from "react-icons/sl";
import { FaLocationDot } from "react-icons/fa6";
import { FaArrowCircleRight, FaTicketAlt } from "react-icons/fa";
import useAllevents from "../../../hooks/useAllevents";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const Featured = () => {
  //(Upcoming Events)
  const [allevents] = useAllevents();
  const [showCard, setShowCard] = useState(6);
  useEffect(() => {
    setShowCard(6);
  }, [allevents]);
  return (
    <div className="mx-auto md:mx-6 bg-[#0a1316] w-[88%] md:w-[97%] ">
      <Sectiontitle
        title={"Upcoming Events"}
        subtitle={"Featured Events"}></Sectiontitle>
      <div>
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
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
            {allevents.slice(0, showCard).map((event) => (
              <SwiperSlide
                key={event._id}
                className="border  border-[#4c4f4e] ">
                <Link to={`/eventdetail/${event._id}`}>
                  {" "}
                  <div
                    key={event._id}
                    className="card h-[25rem] md:h-[22rem] border  border-[#4c4f4e]  rounded-md relative w-full   bg-[#0f1c1c] shadow-md">
                    <Link to={`/eventdetail/${event._id}`}>
                      <figure className="w-full">
                        <img
                          className="rounded-none h-[10rem] w-full object-cover hover:scale-105 transition-transform duration-300"
                          src={event.eventimage}
                          alt="Shoes"
                        />
                      </figure>
                    </Link>

                    <div className="absolute top-3 p-2 rounded-sm right-3 bg-black text-white font-semibold">
                      ${event.ticketprice}
                    </div>
                    <Link to={`/eventdetail/${event._id}`}>
                      <div className="card-body p-4">
                        <h2 className="card-title text-white">
                          {event.eventtitle}
                        </h2>
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center  gap-2">
                            <SlCalender className="text-white font-semibold"></SlCalender>
                            <p className="text-white ">
                              {event.eventstartdate}
                            </p>
                          </div>
                          <div className="flex items-center  gap-2">
                            <SlCalender className="text-white font-semibold"></SlCalender>
                            <p className="text-white ">{event.eventenddate}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaLocationDot className="text-white font-semibold"></FaLocationDot>
                          <p className="text-white">{event.venue}</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <FaTicketAlt className="text-white  font-semibold"></FaTicketAlt>
                          <p className="text-white ">{event.ticket}</p>
                        </div>
                        <div className="card-actions md:absolute md:my-4 md:right-3 md:bottom-0 justify-end">
                          <Link to={`/eventdetail/${event._id}`}>
                            <button className="button-style ">
                              View details
                            </button>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
            {/* <SwiperSlide className="border  border-[#4c4f4e] ">
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
                    <button className="button-style">View details</button>
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
                    <button className="button-style">View details</button>
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
                    <button className="button-style">View details</button>
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
                    <button className="button-style">View details</button>
                  </div>
                </div>
              </div>
            </SwiperSlide> */}
          </div>

          {/* text-[#6a6d6a]  */}
        </Swiper>
        <div className="card-actions justify-center my-12">
          <Link to="/events">
            <button className="flex button-style flex-row  items-center gap-2 ">
              View All Events
              <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
