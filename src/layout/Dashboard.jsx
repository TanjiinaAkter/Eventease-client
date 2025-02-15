import { useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {
  FaClipboardList,
  FaStore,
  FaUserFriends,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { MdCategory, MdDashboard } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    //#0f1c1c
    <div className="mx-auto  w-full bg-[#0a1316] ">
      <div className="grid relative grid-cols-1 md:grid-cols-4  p-1 h-full">
        <div className=" sidebar px-4 bg-[#0f1c1c] col-span-full md:col-span-1">
          <h1 className="text-[#44cfbf] my-2 text-center text-[26px] font-semibold">
            EventEase
          </h1>

          <ul className={`md:block ${isOpen ? "block" : "hidden"}`}>
            <>
              {[
                {
                  to: "/dashboard/admindashboard",
                  icon: <MdDashboard />,
                  label: "Admin Dashboard",
                },
                {
                  to: "/dashboard/adminprofile",
                  icon: <CgProfile />,
                  label: "Admin Profile",
                },
                {
                  to: "/dashboard/venueslist",
                  icon: <FaLocationDot />,
                  label: "Venues",
                },
                {
                  to: "/dashboard/artistslist",
                  icon: <IoPeople />,
                  label: "Artists",
                },
                {
                  to: "/dashboard/vendorlist",
                  icon: <FaStore />,
                  label: "Vendors",
                },
                {
                  to: "/dashboard/categorylist",
                  icon: <MdCategory />,
                  label: "Categories",
                },
                {
                  to: "/dashboard/eventlist",
                  icon: <AiOutlineSchedule />,
                  label: "Events",
                },
                {
                  to: "/dashboard/ordermanagement",
                  icon: <FaClipboardList />,
                  label: "Manage Orders",
                },
                {
                  to: "/dashboard/userlist",
                  icon: <FaUserFriends />,
                  label: "Users",
                },
                {
                  to: "/",
                  icon: <IoIosLogOut />,
                  label: "Logout",
                },
              ].map((item) => (
                <li key={item.to} className="w-full ">
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${
                        isActive ? "bg-gray-600 " : ""
                      } justify-start rounded-md p-3 text-lg flex  items-center gap-2 text-[#44cfbf]`
                    }>
                    {item.icon}
                    <span className="text-white">{item.label}</span>
                  </NavLink>
                </li>
              ))}
            </>
          </ul>
        </div>
        <div onClick={toggleMenu} className="md:hidden absolute top-4 right-4">
          <RiMenu2Line className="text-[#44cfbf] text-3xl" />
        </div>
        <div className="col-span-full md:col-span-3">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
