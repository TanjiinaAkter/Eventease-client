import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="mx-auto w-full   md:w-[70%] md:mt-24 relative md:z-50 space-y-5 flex justify-between">
      <div className="text-start text-[#44cfbf] bg-black p-6 opacity-70  rounded-md  md:z-10">
        <h3 className="text-[16px] md:text-lg  my-4 font-bold md:z-50">
          Our Expertise
        </h3>
        <h1 className="text-3xl md:text-7xl">
          Where Every <br />
          <span className="text-[#b58753]  md:z-50">
            Event Becomes Legendary
          </span>
        </h1>
        <p className="font-semibold text-[16px] md:text-lg my-12 text-[#44cfbf] md:z-50">
          From intimate dinners to large-scale celebrations, we specialize in
          creating memories that last forever,From intimate experiences to grand
          celebrations.
        </p>
        <div className="flex gap-2 md:gap-6 md:flex-row flex-col">
          <Link to="/events">
            <button className="button-style  w-full">Plan your event </button>
          </Link>
          <Link to="/venues">
            <button className="button-style  w-full">Explore your vanues </button>
          </Link>
        </div>
      </div>
      <div className="md:flex hidden">
        <button className="text-[13px] button-style p-0"> </button>
      </div>
    </div>
  );
};

export default Banner;
