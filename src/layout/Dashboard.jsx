import { useState } from "react";
import { AiOutlineSchedule } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaClipboardList, FaStore, FaUserFriends } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { IoPeople } from "react-icons/io5";
import { MdCategory, MdDashboard } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import { Link, NavLink, Outlet } from "react-router-dom";

import useRole from "../hooks/useRole";

const Dashboard = () => {
  const [role] = useRole();
  console.log(role);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="mx-auto min-h-screen  w-full bg-[#0a1316] ">
      <div className="grid min-h-screen relative grid-cols-1 md:grid-cols-5  p-1 h-full">
        <div className=" sidebar px-4 bg-[#0f1c1c] col-span-full md:col-span-1">
          <Link to="/">
            <h1 className="text-[#44cfbf] my-2 text-center text-[26px] font-semibold">
              EventEase
            </h1>
          </Link>
          <hr className="h-[2px] w-full bg-gray-600" />
          <ul className={`md:block ${isOpen ? "block" : "hidden"}`}>
            {role === "Admin" ? (
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
            ) : role === "Vendor" ? (
              <>
                {[
                  {
                    to: "/dashboard/vendordashboard",
                    icon: <MdDashboard />,
                    label: "Vendor Dashboard",
                  },
                  {
                    to: "/dashboard/vendorprofile",
                    icon: <CgProfile />,
                    label: "Vendor Profile",
                  },
                  {
                    to: "/dashboard/vendorvenueslist",
                    icon: <FaLocationDot />,
                    label: "Venues",
                  },
                  {
                    to: "/dashboard/vendorartistslist",
                    icon: <IoPeople />,
                    label: "Artists",
                  },

                  {
                    to: "/dashboard/vendoreventlist",
                    icon: <AiOutlineSchedule />,
                    label: "Events",
                  },
                  {
                    to: "/dashboard/vendorordermanagement",
                    icon: <FaClipboardList />,
                    label: "Manage Orders",
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
            ) : role === "User" ? (
              <>
                {[
                  {
                    to: "/dashboard/userdashboard",
                    icon: <MdDashboard />,
                    label: "User Dashboard",
                  },
                  {
                    to: "/dashboard/userprofile",
                    icon: <CgProfile />,
                    label: "User Profile",
                  },

                  {
                    to: "/dashboard/userorders",
                    icon: <FaClipboardList />,
                    label: "Your Orders",
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
            ) : (
              ""
            )}
          </ul>
        </div>
        <div onClick={toggleMenu} className="md:hidden absolute top-4 right-4">
          <RiMenu2Line className="text-[#44cfbf] text-3xl" />
        </div>
        <div className="col-span-full md:col-span-4">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
