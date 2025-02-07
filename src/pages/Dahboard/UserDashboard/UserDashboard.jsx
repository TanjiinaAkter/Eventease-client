const UserDashboard = () => {
  return (
    <div className="mx-auto w-full p-8 bg-[#0a1316] min-h-screen h-full">
     
      <div className=" flex flex-wrap border border-[#4b4d4c]  mx-auto justify-evenly items-center gap-4 p-7 rounded-md bg-[#0f1c1c]">
        <div className=" pb-3 text-center  sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <h2 className="text-xl text-[#b58753]">Cancelled Orders</h2>
          <h1 className="text-3xl text-[#44cfbf] font-semibold text-center mt-2">
            2
          </h1>
        </div>
        <div className=" pb-3 text-center  sm:border-b-[1px] md:border-r-[1px] md:pr-12 md:border-r-[#6a6d6a]">
          <h2 className="text-xl text-[#b58753]">Confirmed Orders</h2>
          <h1 className="text-3xl  font-semibold text-[#44cfbf] text-center mt-2">
            4
          </h1>
        </div>
        <div className="">
          <h2 className="text-xl text-[#b58753]">Pending Orders</h2>
          <h1 className="text-3xl  font-semibold text-[#44cfbf]  mt-2 text-center">
            4
          </h1>
        </div>
      </div>
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Recent Orders</h2>
        {/* ==============  card-box =========== */}
        <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
          <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
            <div className="pt-2">
              <img
                className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-base text-white">
                Gaming Expo Unlimited 2024
              </h2>
              <p className="text-base text-white">12/02/25</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="badge badge-sm font-semibold badge-ghost">$320</div>
            <div className="badge badge-sm font-semibold text-white border-none bg-[#0BDA51]">
              Confirmed
            </div>
          </div>
        </div>
        {/* ==============  card-box =========== */}
        <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
          <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
            <div className="pt-2">
              <img
                className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-base text-white">
                Gaming Expo Unlimited 2024
              </h2>
              <p className="text-base text-white">12/02/25</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="badge badge-sm font-semibold badge-ghost">$320</div>
            <div className="badge badge-sm font-semibold text-white border-none bg-[#0BDA51]">
              Confirmed
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 border border-[#4b4d4c] flex flex-col flex-wrap  mx-auto  gap-4 p-5 rounded-md bg-[#0f1c1c]">
        <h2 className="text-xl text-white">Upcoming Events</h2>
        {/* ==============  card-box =========== */}
        <div className=" card-box flex p-5 bg-[#1b303087] transition-all hover:shadow-md shadow-[#383938] duration-300 gap-3 justify-between items-center">
          <div className="flex flex-wrap space-y-4 justify-between gap-3 items-center">
            <div className="pt-2">
              <img
                className="object-cover h-[4rem] w-[4rem] rounded-full border-4  border-white"
                src="https://i.ibb.co.com/4RNsn51T/chuttersnap-a-En-H4h-J-Mrs-unsplash.jpg"
                alt=""
              />
            </div>
            <div>
              <h2 className="text-base text-white">
                Gaming Expo Unlimited 2024
              </h2>
              <p className="text-base text-white">12/02/25</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-center items-center">
            <div className="badge badge-sm font-semibold badge-ghost">$320</div>
            <div className="badge badge-sm font-semibold text-white border-none bg-[#0BDA51]">
              Confirmed
            </div>
          </div>
        </div>
        {/* ==============  card-box =========== */}
      </div>
    </div>
  );
};

export default UserDashboard;
