import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";
const Header = () => {
  const { user, logOut } = useAuth();
  const [role] = useRole();
  console.log(role);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const lists = (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-lg font-semibold ">
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative text-[#b58753] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#b58753] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out "
              : "relative text-[#3cac9f] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#3cac9f] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          }
          to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "relative text-[#b58753] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#b58753] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              : "relative text-[#3cac9f] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#3cac9f] after:scale-x-0 after:transition-transform after:duration-300 after:ease-in-out hover:after:scale-x-100"
          }
          to="/events">
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#b58753] relative after:absolute after:w-full after:bg-[#b58753] after:left-0 after:bottom-0 after:h-[2px] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              : "text-[#3cac9f] relative after:absolute after:h-[2px] after:w-full after:bg-[#3cac9f] after:left-0 after:bottom-0  after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
          }
          to="/artists">
          Artists
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#b58753] relative after:absolute after:w-full after:bg-[#b58753] after:left-0 after:bottom-0 after:h-[2px] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              : "text-[#3cac9f] relative after:absolute after:w-full after:h-[2px] after:bg-[#3cac9f] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 transition-transform after:duration-300 "
          }
          to="/categories">
          Categories
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#b58753] relative after:absolute after:w-full after:bg-[#b58753] after:left-0 after:bottom-0 after:h-[2px] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              : "text-[#3cac9f] relative after:absolute after:w-full after:h-[2px] after:bg-[#3cac9f] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 transition-transform after:duration-300 "
          }
          to="/venues">
          Venues
        </NavLink>
      </li>

      <li>
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "text-[#b58753] relative after:absolute after:w-full after:bg-[#b58753] after:left-0 after:bottom-0 after:h-[2px] after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out"
              : "text-[#3cac9f] relative after:absolute after:w-full after:bg-[#3cac9f] after:h-[2px] after:left-0 after:bottom-0 after:scale-x-0 hover:after:scale-x-100 after:duration-300 after:ease-in-out after:transition-transform"
          }
          to="/contact">
          Contact
        </NavLink>
      </li>
    </div>
  );
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className={`relative z-10 ${
        isHome ? "bg-black opacity-80" : "bg-black "
      }  fixed top-0 left-0 py-0 m-0 px-[3px]  navbar flex-wrap md:flex-nowrap justify-center`}>
      <div className="navbar-start justify-center md:justify-start w-full md:w-1/2">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="button-style text-[#3cac9f]  bg-[#3f3131] lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content overflow-hidden bg-white rounded-box text- z-50 mt-3 w-52 p-2 shadow">
            {lists}
          </ul>
        </div>
        <a className=" hover:scale-105 transition-all ease-out text-xl ">
          <Link to="/">
            <img
              className="w-[17rem] hover:ease-in-out hover:duration-300 hover:transition-transform md:w-[18rem] "
              src={logo}
              alt=""
            />
          </Link>
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{lists}</ul>
      </div>
      {/* //text-[#3cac9f]  bg-[#3cac9f] */}
      <div className="flex  mb-2 md:mb-0 items-center  gap-3 md:navbar-end">
        {role === "User" ? (
          <div className="hover:bg-[#3cac9f] hover:rotate-12 group relative bg-amber-300transition-transform ease-in-out duration-300 p-2 border border-[#3cac9f] rounded-full">
            <Link to="/cart">
              <FaShoppingCart className="text-xl group-hover:text-black text-[#3cac9f] "></FaShoppingCart>
              <div className="absolute   -top-3 -right-2 h-5 w-5 flex justify-center items-center bg-red-600 rounded-full font-semibold text-xl text-white">
                <span>1</span>
              </div>
            </Link>
          </div>
        ) : (
          ""
        )}
        {user ? (
          <>
            <div>
              <Link
                to={
                  role === "Admin"
                    ? "/dashboard/admindashboard"
                    : role === "Vendor"
                    ? "/dashboard/vendordashboard"
                    : "/dashboard/userdashboard"
                }>
                <img
                  className="w-[4rem]  h-[4rem] rounded-full hover:opacity-65 hover:scale-105 transition-all duration-300 border-white hover:border-teal-300 border-4 object-cover "
                  src={user?.photoURL}
                  alt=""
                />
              </Link>
            </div>
            <button onClick={handleLogOut} className="button-style">
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="button-style"> Login</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
