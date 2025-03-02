import { useState } from "react";
import RouteTitle from "../../../components/RouteTitle";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
const AddVendor = () => {
  const axiosSecure = useAxiosSecure();
  const { data: allUsers = [] } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  console.log(allUsers);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("vendor data", data);
    axiosSecure
      .post("/vendors", {
        name: data.vendorname,
        userId: selectedUser._id,
        email: data.vendoremail,
        photo: data.photo,
        role: data.role,
        company: data.company,
        phone: data.phone,
        address: data.address,
        city: data.city,
        state: data.state,
        createdAt: new Date(),
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.result.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.vendorname} has been added as a vendor!!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
        if (res.data.newVendor.role === "Vendor" && data.role === "Vendor") {
          axiosSecure
            .patch(`/users/role/${selectedUser._id}`, {
              role: res.data.newVendor.role,
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((error) => {
              console.log(error);
            });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const [selectedUser, setSelectedUser] = useState(null);
  console.log("selectedUser", selectedUser);
  const handleUserSelect = (e) => {
    const selectedEmail = e.target.value;
    const user = allUsers.find((user) => user.email === selectedEmail);
    setSelectedUser(user);
    setValue("vendorname", user?.name || "");
    setValue("vendoremail", user?.email || "");
    setValue("photo", user?.photo || "");
    setValue("address", user?.address || "");
    setValue("city", user?.city || "");
    setValue("company", user?.conpany || "");
    setValue("phone", user?.phone || "");
    setValue("state", user?.state || "");
  };
  console.log(selectedUser);
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Vendor "}
        routesubtitle={"Add a new vendor to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="vendorname">
                  Vendor Name
                </label>
                <input
                  {...register("vendorname")}
                  type="text"
                  name="vendorname"
                  id=""
                  placeholder="Enter vendor name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="vendoremail">
                  Vendor Email
                </label>
                <input
                  readOnly
                  {...register("vendoremail")}
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Vendor Email"
                  className="py-3 bg-black focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="user">
                  User
                </label>
                <select
                  onChange={handleUserSelect}
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  {allUsers.map((user) => (
                    <option
                      key={user.email}
                      value={user.email}
                      className="text-white bg-black">
                      {user.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="role">
                  User Role
                </label>
                <select
                  defaultValue={"Vendor"}
                  {...register("role")}
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 !text-white  border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className=" bg-black" value={"Vendor"}>
                    Vendor
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="address">
                  Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Address "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
            </div>

            {/* ROW-3*/}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="company">
                  Company Name
                </label>
                <input
                  {...register("company")}
                  type="text"
                  name="company"
                  id=""
                  placeholder="Enter Company name "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="photo">
                  Photo
                </label>
                <input
                  {...register("photo")}
                  readOnly
                  type="text"
                  name="photo"
                  id=""
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  {...register("phone")}
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
            </div>
            {/* ROW-4*/}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="city">
                  City
                </label>
                <input
                  {...register("city")}
                  type="text"
                  name="city"
                  id=""
                  placeholder="Enter city "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="state">
                  State
                </label>
                <input
                  type="text"
                  {...register("state")}
                  name="state"
                  id=""
                  placeholder="Enter state "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
            </div>
            <div className="grid md:w-full my-7">
              <button type="submit" className="button-style">
                Create Vendor
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
