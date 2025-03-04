import useSingleUserDetail from "../../../hooks/useSingleUserDetail";
import { Link } from "react-router-dom";
const AdminProfile = () => {
  const [userinfo] = useSingleUserDetail();

  console.log(userinfo);
  return (
    <div className="mx-auto w-full p-4 bg-[#0a1316] min-h-screen h-full">
      {/* FIRST DIV */}
      <div className="p-5 bg-[#0f1c1c] items-center mx-auto w-[90%]   md:w-[40%] text-white border-2 border-dotted border-[#4c4f4e]">
        <div className="flex mb-12 justify-start items-center space-y-4 flex-col">
          <img
            className="w-[12rem] h-[12rem] border-8 border-[#b58753] inset-3 object-cover rounded-full"
            src={userinfo?.photo}
            alt=""
          />
          <h2 className=" text-lg md:text-2xl font-semibold text-white">
            Name :
            <span className="text-[#44cfbf] pl-1 md:text-xl">
              {userinfo?.name}
            </span>
          </h2>
          <h2 className="text-lg md:text-2xl font-semibold">
            Email :
            <span className="text-[#44cfbf] md:text-xl pr-1">
              {" "}
              {userinfo?.email}
            </span>
          </h2>
        </div>
      </div>
      {/* SECOND DIV */}
      <div className="p-8 my-6 bg-[#0f1c1c] flex flex-col justify-center  mx-auto w-[90%]  md:w-[70%] text-white border-2 border-dotted border-[#4c4f4e]">
        <div className=" space-y-3">
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Name : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.name}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Email : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.email}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Role : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.role}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Contact no : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.phone}
            </h3>
          </div>
          <div className=" hidden items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Company : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.company}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">Address : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.address}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">City : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.city}
            </h3>
          </div>
          <div className="flex  items-center gap-3">
            <h2 className="md:text-xl font-semibold ">State : </h2>
            <h3 className="text-base md:text-lg font-semibold text-[#44cfbf]">
              {userinfo?.state}
            </h3>
          </div>
        </div>
        <div className="grid my-10 w-[90%] md:w-[40%] gap-3">
        <Link to={`/dashboard/adminprofileedit/${userinfo?._id}`}>
            <button className="button-style">Edit Profile</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminProfile;
