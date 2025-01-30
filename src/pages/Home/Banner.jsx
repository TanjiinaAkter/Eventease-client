const Banner = () => {
  return (
    <div className="mx-auto w-full pb-12 md:w-[70%] md:mt-24 relative z-50 space-y-5 flex justify-between">
      <div className="text-start text-[#44cfbf] bg-black p-6 opacity-70  rounded-md  z-10">
        <h3 className="text-[16px] md:text-lg  my-4 font-bold z-50">
          Our Expertise
        </h3>
        <h1 className="text-3xl md:text-7xl">
          Where Every <br />
          <span className="text-[#b58753]  z-50">Event Becomes Legendary</span>
        </h1>
        <p className="font-semibold text-[16px] md:text-lg my-12 text-[#44cfbf] z-50">
          From intimate dinners to large-scale celebrations, we specialize in
          creating memories that last forever,From intimate experiences to grand
          celebrations.
        </p>
        <div className="flex gap-2">
          <button className="button">Plan your event </button>
          <button className="button">Explore your vanues </button>
        </div>
      </div>
      <div className="md:flex hidden">
        <button className="text-[13px] button p-0"> </button>
      </div>
    </div>
  );
};

export default Banner;
