import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";
import RouteTitle from "../../../components/RouteTitle";
import { AiOutlineCamera } from "react-icons/ai";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useSingleUserDetail from "../../../hooks/useSingleUserDetail";
import { useForm } from "react-hook-form";

const UserProfileEdit = () => {
  const [loadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const { updateUserProfile } = useAuth();
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosSecure = useAxiosSecure();
  const [userinfo] = useSingleUserDetail();
  //console.log(userinfo);
  const {
    register,
    reset,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm(); //name, role, company, phone, address, city, state, photo
  useEffect(() => {
    setValue("email", userinfo?.email);
    setValue("name", userinfo?.name);
    setValue("photo", userinfo?.photo);
    setValue("role", userinfo?.role);
    setValue("phone", userinfo?.phone);
    setValue("address", userinfo?.address);
    setValue("state", userinfo?.state);
    setValue("city", userinfo?.city);
    setValue("company", userinfo?.company);
  }, [setValue, userinfo]);

  const onSubmit = async (data) => {
    console.log(data);
    setLoadingToImageUpload(true);
    const image = { image: data.photo[0] };
    try {
      const res = await axiosPublic.post(image_hosting_api, image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("csdcjscs", res.data.data.display_url);
      if (res.data.success) {
        const imgURL = res.data.data.display_url;
        const updateRes = await axiosSecure.patch(
          `/users/update/${userinfo?.email}`,
          {
            name: data.name,
            company: data.company,
            phone: data.phone,
            address: data.address,
            city: data.city,
            state: data.state,
            photo: imgURL,
          }
        );

        console.log(updateRes.data);
        if (updateRes.data.modifiedCount === 1) {
          setLoadingToImageUpload(false);
          // ekhane access korte parbe na tai imgurl er moddhe niye nisi
          updateUserProfile(data.name, imgURL);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${data.name} profile has been updated!!`,
            showConfirmButton: false,
            timer: 1500,
          });
          reset();
        }
      }
    } catch (error) {
      setLoadingToImageUpload(false);
      console.log(error);
    }
  };
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <div className="flex justify-end">
        <Link to="/">
          <button className="flex button-style justify-start items-center gap-1">
            <IoHome className="text-xl"></IoHome> BACK TO HOME
          </button>
        </Link>
      </div>
      <RouteTitle
        routetitle={"Update Your Profile"}
        routesubtitle={
          "Keep your information up-to-date for a seamless experience."
        }></RouteTitle>
      <div className="relative  z-10 flex justify-center items-center mt-2">
        <div className=" shadow-2xl bg-[#0f1c1c] p-6  rounded-none w-full  lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="name">
                  Your Name
                </label>
                <input
                  {...register("name")}
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter your name"
                  className="py-3 text-white  border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="email">
                  Your Email
                </label>
                <input
                  readOnly
                  {...register("email")}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter your email"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Your Contact Number
                </label>
                <input
                  {...register("phone")}
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter your contact"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="role">
                  Your Role
                </label>
                <input
                  readOnly
                  {...register("role")}
                  type="text"
                  name="role"
                  id=""
                  placeholder=" your role"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-3 */}
            <div className="flex   flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="address">
                  Your Address
                </label>
                <input
                  {...register("address")}
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter your location"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="flex relative flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="photo">
                  Your Profile Photo
                </label>
                <input
                  {...register("photo")}
                  type="file"
                  name="photo"
                  id="file"
                  className="py-[6px] focus:border-[#b58753] focus:border-2 text-white border px-6 border-gray-500 focus:outline-none rounded-none file:px-4   file:text-sm file:font-semibold "
                  required
                />

                <AiOutlineCamera
                  className="absolute top-[65%] left-2 transform -translate-y-1/2 text-white"
                  style={{ fontSize: "24px" }}
                />
                {/* Display selected file name */}
              </div>
            </div>
            <div className="flex   flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="city">
                  Your city
                </label>
                <input
                  {...register("city")}
                  type="text"
                  name="city"
                  id=""
                  placeholder="Enter your location"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="hidden flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="company">
                  Your company name
                </label>
                <input
                  {...register("company")}
                  type="text"
                  name="company"
                  id=""
                  placeholder="Enter your location"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="state">
                  Your state name
                </label>
                <input
                  {...register("state")}
                  type="text"
                  name="state"
                  id=""
                  placeholder="Enter your location"
                  className="py-3 text-white border focus:border-[#b58753] focus:border-2  pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
            <div className=" grid md:w-full my-7">
              <button
                type="submit"
                value={loadingToImageUpload}
                className={`button-style ${
                  loadingToImageUpload ? "cursor-not-allowed bg-gray-500" : ""
                }`}>
                {loadingToImageUpload ? "Processing..." : " UPDATE PROFILE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfileEdit;
