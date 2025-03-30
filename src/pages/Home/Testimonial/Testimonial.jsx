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
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
const Testimonial = () => {
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [] } = useQuery({
    queryKey: ["reviews"],
    queryFn: async () => {
      const res = await axiosPublic.get("/reveiews");
      console.log(res.data);
      return res.data;
    },
  });
  const [storeReveiews, setStoreReveiews] = useState([]);
  useEffect(() => {
    if (reviews && reviews.length > 0) {
      setStoreReveiews(reviews);
    }
  }, [reviews, storeReveiews]);
  console.log(storeReveiews);
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
        {storeReveiews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="artist-card bg-[#0f1c1c] border border-dotted border-[#4c4f4e]  mb-4 p-4 mx-auto w-full red ">
              <div className="flex justify-center items-center my-7 w-full">
                <img
                  className="w-[8rem] h-[8rem]  rounded-full border-4 border-[#4cdfef] object-cover  text-red-600"
                  src={review.photo}
                  alt=""
                />
              </div>
              <div className="text-[#44cfbf] text-lg mx-auto md:w-[50%]">
                <p className="tip text-[#8b918b]  text-center mb-2">
                  {review.review}
                </p>
                <div className="divider mx-auto w-[3%] divider-accent"></div>

                <div className="mx-auto md:w-[50%]">
                  <h3 className="text-[#44cfbf] mt-4 text-center text-2xl">
                    {review.name}
                  </h3>

                  <p className="text-center text-[#8b918b] ">
                    {review.company}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonial;
