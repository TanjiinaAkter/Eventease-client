import { IoHome } from "react-icons/io5";
import { MdAdminPanelSettings, MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { FaEdit, FaUser } from "react-icons/fa";

import { CiShop } from "react-icons/ci";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import useRole from "../../../hooks/useRole";
const UserList = () => {
  const [role] = useRole();
  const isAdmin = role === "Admin";
  // const isAdmin = true;
  const axiosSecure = useAxiosSecure();
  const { data: allusers = [], refetch } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      console.log("usesr data", res.data);
      return res.data;
    },
  });
  console.log(allusers);
  //========== DELETE A USER ==========//
  const handleDelete = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  //========== USER ROLE UPDATE ==========//
  const makeAdminRole = (user, newrole) => {
    console.log(user);
    if (!isAdmin) {
      return Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You are not authorized to change roles!",
      });
    }
    axiosSecure
      .patch(`/users/role/${user._id}`, {
        role: newrole,
      })
      .then((res) => {
        console.log(
          "result from server",
          res.data,
          "updated user role we will get to add or delete in vendorcollection :",
          res.data.updatedUser.role
        );
        if (res.data.result.modifiedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Role of ${user.name} has been changed! `,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        console.log(
          {
            name: user.name,
            userrole: user.role,
            email: res.data?.updatedUser?.email,
            photo: res.data?.updatedUser?.photo,
            role: res.data?.updatedUser?.role,
            company: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            createdAt: new Date(),
          },
          "updatedUser  nnnnnnnnnnnnnnnnnnn"
        );
        // ekhn client side theke send kora role ar server side theke pawa updated role jodi vendor hoy tahole vendorcollection e post korbo
        if (newrole === "Vendor" && res.data?.updatedUser?.role === "Vendor") {
          axiosSecure
            .post("/vendors", {
              name: res.data?.updatedUser?.name,
              userId: user._id,
              email: res.data?.updatedUser?.email,
              photo: res.data?.updatedUser?.photo,
              role: res.data?.updatedUser?.role,
              company: "",
              phone: "",
              address: "",
              city: "",
              state: "",
              createdAt: new Date(),
            })
            .then((res) => {
              console.log("sdvsfffffff", res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        } else if (
          (newrole === "User" || newrole === "Admin") &&
          res.data?.updatedUser?.role !== "Vendor"
        ) {
          axiosSecure
            .delete(`/vendors/${user.email}`)
            .then((res) => {
              console.log("Vendor role removed", res.data);
            })
            .catch((error) => {
              console.error("Error removing vendor:", error);
            });
        }
      });
  };
  return (
    <div className="relative z-0 bg-black w-full h-full min-h-screen p-6">
      {/* Back to Home Button */}
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex button-style items-center gap-1">
            <IoHome className="text-xl" /> BACK TO HOME
          </button>
        </Link>
      </div>

      {/* Page Title */}
      <RouteTitle
        routetitle="Users Directory"
        routesubtitle="Manage and organize Users profiles efficiently."
      />

      {/* Search Input */}
      <div className="flex flex-wrap my-7 gap-4">
        <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Type here..."
            className="input input-bordered input-info border border-[#b58753] bg-[#0f1c1c] text-white w-full md:max-w-xs placeholder:text-white"
          />
          <button className="button-style hover:scale-105">Search</button>
        </div>
      </div>

      {/* Table Wrapper */}
      <div className="mx-auto overflow-auto md:overflow-visible border border-[#4b4d4c] w-full flex flex-col gap-4 p-5 pb-8 rounded-md bg-[#0f1c1c]">
        <div className="">
          <table className="table-auto w-full min-w-[600px] text-center text-white text-sm sm:text-base">
            {/* Table Head */}
            <thead>
              <tr className="border-b border-white text-[#44cfbf] text-lg">
                <th className=" py-2 ">#</th>
                <th className=" py-2 ">User Image</th>
                <th className=" py-2 ">User Name</th>
                <th className=" py-2 ">Email</th>
                <th className=" py-2 ">Phone</th>
                <th className=" py-2 ">City</th>
                <th className=" py-2 ">Role</th>
                <th className=" py-2 ">Action</th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {/* Sample Row */}
              {allusers.map((user, index) => (
                <tr key={user._id} className="border-b border-[#4c4f4e] ">
                  <th className="py-2">{index + 1}</th>
                  <td className=" py-2">
                    <div className="flex justify-center items-center ">
                      <img
                        className="w-[4.5rem] h-[4.5rem] object-cover rounded-full"
                        src={
                          user.photo ||
                          "https://i.ibb.co/2FsfXqM/default-avatar.png"
                        }
                        alt=""
                      />
                    </div>
                  </td>
                  <td className=" py-2">{user.name}</td>
                  <td className=" py-2">{user.email}</td>
                  <td className=" py-2">{user.phone || "N/A"}</td>
                  <td className=" py-2">{user.city || "N/A"}</td>
                  {/* ============  MAKE ADMIN OR VENDOR  ================*/}
                  <td className=" py-2 flex justify-center gap-4 text-center mt-5 items-center ">
                    <span className="font-semibold">{user.role || "User"}</span>
                    <div className="dropdown relative">
                      <label
                        tabIndex={0}
                        className=" bg-transparent text-amber-300 rounded-none">
                        <FaEdit className="text-blue-500 text-3xl py-1 pl-1 hover:bg-gray-600 rounded-sm transition-all duration-700 " />
                      </label>

                      <ul className="dropdown-content menu  absolute top-[-65%] right-[100%] p-2 shadow bg-white text-black rounded-box w-44">
                        <li
                          onClick={() =>
                            isAdmin && makeAdminRole(user, "Admin")
                          }
                          className="place-self-center">
                          <button>
                            <MdAdminPanelSettings className="text-xl text-red-600" />
                            <span className="font-semibold">Admin</span>
                          </button>
                        </li>
                        <li
                          onClick={() => isAdmin && makeAdminRole(user, "User")}
                          className="place-self-center">
                          <button>
                            <FaUser className="text-base text-red-600" />
                            <span className="font-semibold">User</span>
                          </button>
                        </li>
                        <li
                          onClick={() =>
                            isAdmin && makeAdminRole(user, "Vendor")
                          }
                          className="place-self-center">
                          <button>
                            <CiShop className="text-xl text-red-600" />
                            <span className="font-semibold">Vendor</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                  </td>
                  {/* ============  DELETE ADMIN OR VENDOR  OR USER ================*/}
                  <td onClick={() => handleDelete(user)} className=" py-2  ">
                    <MdDelete className="text-4xl  py-1 hover:bg-gray-600 rounded-sm transition-all duration-700  text-center justify-self-center text-red-600" />
                  </td>
                </tr>
              ))}

              {/* Another user icon  */}
              {/* <td className=" py-2">
                <FaUsers className="text-amber-400 text-2xl mx-auto" />
              </td> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
