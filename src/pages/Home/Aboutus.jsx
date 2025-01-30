const Aboutus = () => {
  return (
    <div className="p-8 my-12">
      <div className="flex flex-col  md:flex-row  w-full  ">
        <div className="flex  justify-center md:w-1/2 pr-8 flex-col p-1 md:p-12">
          <h3 className=" pl-1 text-[16px] text-[#44cfbf] md:text-lg  my-4 font-bold   border-l-[3px] border-[#b58753]  ">
            About Us
          </h3>
          <h1 className="text-2xl md:text-5xl text-[#b58753]">
            With a strong focus on customer satisfaction
          </h1>
          <p className=" text-justify text-[16px] md:text-base my-12 text-[#6a6d6a] z-50">
            At Eventease, we are passionate about making every event
            unforgettable. We are a dedicated team of event planning
            professionals, driven by innovation, creativity, and a deep
            understanding of what makes events truly special. Whether its a
            corporate gathering, a wedding, or a community celebration, we bring
            your vision to life with precision and care.
          </p>
        </div>
        <div className="md:w-1/2 sm:mb-2">
          <img
            className="w-full  md:h-auto object-cover"
            src="https://i.ibb.co.com/DHqvkRC2/md-duran-r-E9vg-D-TXg-M-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full  ">
        <div className="md:w-1/2">
          <img
            className="w-full"
            src="https://i.ibb.co.com/ynpy2x86/chuttersnap-Q-Kdj-Kxnt-H8-unsplash.jpg"
            alt=""
          />
        </div>
        <div className="flex p-3 md:p-12 justify-center md:w-1/2 pr-8 flex-col">
          <h3 className=" pl-1 text-[16px] text-[#44cfbf] md:text-lg  my-4 font-bold   border-l-[3px] border-[#b58753]  ">
            Our Venue
          </h3>
          <h1 className="text-2xl md:text-5xl text-[#b58753]">
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
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
