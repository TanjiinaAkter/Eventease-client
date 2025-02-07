import { FaAddressBook, FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import RouteTitle from "../../components/RouteTitle";
import Header from "../Shared/Header/Header";
import { MdEmail } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-[#0a1316]  mx-auto sm:w-[88%]  md:w-full ">
      <Header></Header>
      <RouteTitle
        routetitle={"Meet the Artist "}
        routesubtitle={"Contact Us"}></RouteTitle>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-4 gap-5 space-y-3 mt-5 mb-12">
        {/*============= CATEGORY-1 DESIGN ============= */}

        <div className="col-span-1  md:w-[80%] mx-auto mb-6">
          <img
            className="h-[14rem] md:h-[40rem] text-center object-cover rounded-bl-[60px ] rounded-r-[120px] "
            src="https://i.ibb.co.com/Z6xJvsdm/top-view-blue-monday-concept-composition-with-telephone.jpg"
            alt=""
          />
        </div>

        <div className="px-2 mx-auto  col-span-1 flex md:py-18 md:px-2 space-y-6 text-center flex-col justify-start items-center">
          <h3 className="uppercase text-white font-semibold text-2xl md:text-lg">
            - Location -
          </h3>
          <h1 className="text-4xl text-[#b58753] font-bold">
            Find Us & Lets Create Magic
          </h1>
          <FaLocationDot className="text-[#b58753] text-3xl font-semibold" />
          <h2 className=" text-white  text-justify text-base md:text-lg gap-1 md:gap-2 ">
            Welcome to EventEase, where unforgettable events come to life. Find
            us at 123 Main Street, Anytown, USA, your hub for seamless planning
            and extraordinary experiences. Whether you are organizing a
            corporate gala, a dream wedding, or a private celebration, our
            expert team is ready to turn your vision into reality. Visit us and
            lets create something spectacular together!
          </h2>
          <h2 className=" text-white flex items-center self-start text-base md:text-lg  gap-1 md:gap-2">
            <FaAddressBook className="text-[#44cfbf]  text-xl font-semibold" />
            742 Innovation Drive, Tech Valley, CA 90210, USA
          </h2>
          <h2 className=" text-white flex items-center self-start text-base md:text-lg  gap-1 md:gap-2">
            <FaPhoneVolume className="text-[#44cfbf] text-xl font-semibold" />
            2634389173
          </h2>
          <h2 className=" text-white flex items-center self-start text-base md:text-lg  gap-1 md:gap-2">
            <MdEmail className="text-[#44cfbf] text-xl font-semibold" />
            a@gmail.com
          </h2>
        </div>
      </div>
      <div
        className="relative bg-no-repeat bg-center bg-fixed bg-cover h-[28rem] w-full "
        style={{
          backgroundImage:
            "url('https://i.ibb.co/v4shgKD4/premium-photo-1682126154930-cd952a02581d-w-500-auto-format-fit-crop-q-60-ixlib-rb-4-0.jpg')",
        }}>
        <div className="absolute bg-black opacity-40 inset-0"></div>
        <div className="absolute w-full h-full top-0 left-0 space-y-3.5 flex flex-col justify-center px-12 items-start">
          <h2 className="text-white border-l-4 pl-1 border-l-[#44cfbf] text-2xl md:text-xl font-bold">
            We’d Love to Hear From You
          </h2>
          <p className=" text-2xl md:text-5xl text-[#44cfbf] font-semibold">
            Subscribe To Our Newsletter
          </p>
          <div className="flex-wrap flex md:flex-row mt-4 gap-2">
            <input
              placeholder="Enter your email"
              className="py-2.5 px-7 font-semibold text-white border-none bg-black focus:outline-0"
              type="email"
              name=""
              id=""
            />
            <button className=" button-style font-semibold">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
