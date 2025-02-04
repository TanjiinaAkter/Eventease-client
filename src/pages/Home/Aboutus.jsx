import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Aboutus = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <div className="bg-[#132323] md:mx-6 pt-16 pb-4 overflow-hidden ">
      <div className="flex flex-col sm:mb-5 md:mb-0 md:flex-row  w-full ">
        <div className="flex  justify-center md:w-1/2 md:pr-8 flex-col p-1 ">
          <h3
            data-aos="fade-down"
            className=" pl-1 text-[16px] text-[#44cfbf] md:text-lg  my-4    border-l-[3px] border-[#b58753]  ">
            About Us
          </h3>
          <h1
            data-aos="fade-down"
            className="text-2xl  md:text-5xl text-[#b58753]">
            With a strong focus on customer satisfaction
          </h1>
          <p className=" text-justify px-3 text-[16px] md:text-base pt-5 my-12 text-[#6a6d6a] z-50">
            At Eventease, we are passionate about making every event
            unforgettable. We are a dedicated team of event planning
            professionals, driven by innovation, creativity, and a deep
            understanding of what makes events truly special. Whether its a
            corporate gathering, a wedding, or a community celebration, we bring
            your vision to life with precision and care.
          </p>
          <div
            data-aos="fade-up"
            className="flex sm:mb-3 md:mb-0 justify-start">
            <button className="button"> Explore Vanues</button>
          </div>
        </div>
        <div className="md:w-1/2 mb-5 md:mb-0 ">
          <img
            className="w-full  md:h-[27rem] object-cover"
            src="https://i.ibb.co.com/DHqvkRC2/md-duran-r-E9vg-D-TXg-M-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div data-aos="fade-left" className="flex flex-col md:flex-row w-full  ">
        <div className="md:w-1/2">
          <img
            className="w-full md:h-[27rem] object-cover"
            src="https://i.ibb.co.com/ynpy2x86/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg"
            alt=""
          />
        </div>
        <div
          data-aos="fade-down"
          className="flex p-3 md:p-12 justify-center md:w-1/2 md:pr-8 flex-col">
          <h3 className=" pl-1 text-[16px] text-[#b58753] md:text-lg  my-4   border-l-[3px] border-[#b58753]  ">
            Our Venue
          </h3>
          <h1
            data-aos="fade-down"
            className="text-2xl md:text-5xl text-[#44cfbf] ">
            With a strong focus on customer satisfaction
          </h1>
          <p className=" text-justify text-[16px] md:text-base my-12 text-[#6a6d6a] z-50">
            Each venue offers a unique ambiance, equipped with modern amenities,
            flexible seating arrangements, and state-of-the-art facilities to
            ensure a seamless experience. Whether you are planning an intimate
            affair or a grand event, we have the perfect space to bring your
            vision to life. Let us transform your occasion into a remarkable
            experience with a venue that speaks to your style and needs. Book
            your perfect venue today and make your event extraordinary!
          </p>
          <div data-aos="fade-up" className="flex justify-start">
            <button className="button"> Explore Vanues</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
