// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Scrollbar, Autoplay, Pagination, Navigation } from "swiper/modules";
import Sectiontitle from "../../../components/Sectiontitle";
const Testimonial = () => {
  return (
    //TO DO:ইভেন্ট রিভিউ/রেটিং সিস্টেম: ব্যবহারকারীরা ইভেন্টের পর রেটিং এবং রিভিউ দিতে পারবে।
    <div className="mx-auto w-[88%] md:w-[97%]  my-24">
      <Sectiontitle
        title={"Testimonial"}
        subtitle={"See what our clients tell about us"}></Sectiontitle>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        scrollbar={{
          hide: false,
        }}
        modules={[Scrollbar, Autoplay, Pagination, Navigation]}
        className="mySwiper text-white">
        <SwiperSlide>
          <div className="artist-card bg-[#0f1c1c] border border-dotted border-[#4c4f4e]  mb-4 p-4 mx-auto w-full red ">
            <div className="flex justify-center items-center my-7 w-full">
              <img
                className="w-[8rem] h-[8rem]  rounded-full border-4 border-[#242524] object-cover  text-red-600"
                src="https://i.ibb.co.com/tpWTj9p7/high-angle-buisness-man-23-2148479585.jpg"
                alt=""
              />
            </div>
            <div className="text-[#44cfbf] mx-auto md:w-[50%]">
              <p className="tip text-[#6a6d6a] text-center mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                vero quod commodi explicabo, ducimus laudantium dolor iusto
                eligendi odio in eveniet quam animi officiis unde? Voluptate
                adipisci magnam iste similique?
              </p>
              <div className="divider mx-auto w-[3%] divider-accent"></div>

              <div className="mx-auto md:w-[50%]">
                <h3 className="text-[#44cfbf] mt-4 text-center text-2xl">
                  Pablo Picasso
                </h3>

                <p className="text-center text-[#6a6d6a] ">CEO, AB company</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card bg-[#0f1c1c] border border-dotted border-[#4c4f4e]  mb-4 p-4 mx-auto w-full red ">
            <div className="flex justify-center items-center my-7 w-full">
              <img
                className="w-[8rem] h-[8rem]  rounded-full border-4 border-[#242524] object-cover  text-red-600"
                src="https://i.ibb.co.com/tpWTj9p7/high-angle-buisness-man-23-2148479585.jpg"
                alt=""
              />
            </div>
            <div className="text-[#44cfbf] mx-auto md:w-[50%]">
              <p className="tip text-[#6a6d6a] text-center mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                vero quod commodi explicabo, ducimus laudantium dolor iusto
                eligendi odio in eveniet quam animi officiis unde? Voluptate
                adipisci magnam iste similique?
              </p>
              <div className="divider mx-auto w-[3%] divider-accent"></div>

              <div className="mx-auto md:w-[50%]">
                <h3 className="text-[#44cfbf] mt-4 text-center text-2xl">
                  Pablo Picasso
                </h3>

                <p className="text-center text-[#6a6d6a] ">CEO, AB company</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="artist-card bg-[#0f1c1c] border border-dotted border-[#4c4f4e]  mb-4 p-4 mx-auto w-full red ">
            <div className="flex justify-center items-center my-7 w-full">
              <img
                className="w-[8rem] h-[8rem]  rounded-full border-4 border-[#242524] object-cover  text-red-600"
                src="https://i.ibb.co.com/tpWTj9p7/high-angle-buisness-man-23-2148479585.jpg"
                alt=""
              />
            </div>
            <div className="text-[#44cfbf] mx-auto md:w-[50%]">
              <p className="tip text-[#6a6d6a] text-center mb-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                vero quod commodi explicabo, ducimus laudantium dolor iusto
                eligendi odio in eveniet quam animi officiis unde? Voluptate
                adipisci magnam iste similique?
              </p>
              <div className="divider mx-auto w-[3%] divider-accent"></div>

              <div className="mx-auto md:w-[50%]">
                <h3 className="text-[#44cfbf] mt-4 text-center text-2xl">
                  Pablo Picasso
                </h3>

                <p className="text-center text-[#6a6d6a] ">CEO, AB company</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Testimonial;
