const Sectiontitle = ({ title, subtitle }) => {
  return (
    <div className="mx-auto text-center ">
      <h3 className=" text-[18px] gap-1 text-[#b58753] md:text-xl  my-4 font-bold    ">
        <span className="border-l-[3px] pr-1 border-[#b58753]"></span>
        {title}
      </h3>
      <p className="text-[#44cfbf]   my-4 font-semibold  text-2xl md:text-5xl ">
        {subtitle}
      </p>
    </div>
  );
};

export default Sectiontitle;
