import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/logo.png";
import "./header.css";
import { FaShoppingCart } from "react-icons/fa";
const Header = () => {
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
            className="btn text-[#3cac9f]  bg-[#3f3131] lg:hidden">
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
          <img
            className="w-[17rem] hover:ease-in-out hover:duration-300 hover:transition-transform md:w-[18rem] "
            src={logo}
            alt=""
          />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{lists}</ul>
      </div>
      <div className="flex mb-2 md:mb-0   flex-wrap gap-3 md:navbar-end">
        <div className="hover:text-black hover:bg-[#3cac9f] transition-transform ease-in-out duration-300 p-2 border border-[#3cac9f] rounded-full">
          <FaShoppingCart className="text-xl text-[#3cac9f] hover:text-black"></FaShoppingCart>
        </div>
        <Link to='/login'>
          <button className=""> Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
