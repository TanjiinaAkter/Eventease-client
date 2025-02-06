const AdminProfile = () => {
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      {/* FIRST DIV */}
      <div className="p-5 bg-[#0f1c1c] items-center mx-auto w-[90%]  md:w-[40%] text-white border-2 border-dotted border-[#4c4f4e]">
        <div className="flex mb-12 justify-start items-center space-y-4 flex-col">
          <img
            className="w-[12rem] h-[12rem] border-8 border-[#44cfbf] inset-3 object-cover rounded-full"
            src="https://i.ibb.co.com/Xzx84Jx/colorful-paper-shopping-bags-blue-surface.jpg"
            alt=""
          />
          <h2 className=" text-lg md:text-2xl font-semibold text-white">
            Name :
            <span className="text-[#44cfbf] pl-1 md:text-xl">Money honey</span>{" "}
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold">
            Email :
            <span className="text-[#44cfbf] md:text-xl pr-1">a@gmail.com</span>{" "}
          </h2>
        </div>
      </div>
      {/* SECOND DIV */}
      <div className="p-5 my-6 bg-[#0f1c1c] flex flex-col justify-center items-center mx-auto w-[90%]  md:w-[70%] text-white border-2 border-dotted border-[#4c4f4e]">
        <div className=" space-y-3">
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Name : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              sehdesd
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Email : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {" "}
              a@gmail.com
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Role : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {" "}
              User
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Contact no : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {" "}
              34572345824
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Address : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              uk, los angeles
            </h3>
          </div>
        </div>
        <div className="grid my-10 w-[90%] md:w-[40%] gap-3">
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
