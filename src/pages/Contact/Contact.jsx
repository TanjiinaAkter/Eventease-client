import { FaLocationDot } from "react-icons/fa6";
import RouteTitle from "../../components/RouteTitle";
import Header from "../Shared/Header/Header";

const Contact = () => {
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%]  md:w-full ">
      <Header></Header>
      <RouteTitle
        routetitle={"Meet the Artist "}
        routesubtitle={"Contact Us"}></RouteTitle>
      <div className="grid grid-cols-1 md:grid-cols-2  mx-4 gap-5 space-y-3 mt-5 ">
        {/*============= CATEGORY-1 DESIGN ============= */}

        <div className="col-span-1 md:w-[80%] mx-auto mb-6">
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
            Find Us & Let's Create Magic
          </h1>
          <FaLocationDot className="text-[#b58753] text-3xl font-semibold" />
          <h2 className=" text-white  text-justify text-base md:text-lg gap-1 md:gap-2 ">
            Welcome to EventEase, where unforgettable events come to life. Find
            us at 123 Main Street, Anytown, USA, your hub for seamless planning
            and extraordinary experiences. Whether you're organizing a corporate
            gala, a dream wedding, or a private celebration, our expert team is
            ready to turn your vision into reality. Visit us and let's create
            something spectacular together!
          </h2>
          <h2 className=" text-white self-start text-base md:text-lg  gap-1 md:gap-2">
            742 Innovation Drive, Tech Valley, CA 90210, USA
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
