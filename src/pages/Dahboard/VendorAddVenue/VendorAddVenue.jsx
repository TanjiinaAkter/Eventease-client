import { useEffect, useState } from "react";
import RouteTitle from "../../../components/RouteTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMdCamera } from "react-icons/io";
import useAuth from "../../../hooks/useAuth";

const VendorAddVenue = () => {
  const { user } = useAuth();
  const [LoadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log("here is data", data, formatDate(startDate));
    const image1 = { image: data.bannericon[0] };
    const image2 = { image: data.venueimage[0] };
    try {
      setLoadingToImageUpload(true);
      const [res1, res2] = await Promise.all([
        axiosPublic.post(image_hosting_api, image1, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        axiosPublic.post(image_hosting_api, image2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      ]);
      // console.log(
      //   "ppppppppppppppppppppppppppppp",
      //   res1.data.data.display_url,
      //   res2.data.data.display_url
      // );

      if (res1.data.success && res2.data.success) {
        axiosSecure
          .post("/venues", {
            name: data.venuename,
            type: data.venuetype,
            date: formatDate(startDate),
            city: data.city,
            address: data.address,
            capacity: data.capacity,
            country: data.country,
            phone: data.phone,
            createdBy: data.email,
            description: data.description,
            bannericon: res1.data.data.display_url,
            venueimage: res2.data.data.display_url,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              setLoadingToImageUpload(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.venuename} has been added!!`,
                showConfirmButton: false,
                timer: 1500,
              });
              reset();
            }
          })
          .catch((error) => {
            setLoadingToImageUpload(false);
            console.log(error);
          });
      }
    } catch (error) {
      setLoadingToImageUpload(false);
      console.log(error);
    }
  };

  const [startDate, setStartDate] = useState(new Date());
  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    setValue("date", startDate);
    setValue("email", user?.email);
  }, [setValue, startDate, user]);
  console.log(startDate);
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Venue "}
        routesubtitle={"Add a new venue to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="venuename">
                  Venue Name
                </label>
                <input
                  {...register("venuename", { required: true })}
                  type="text"
                  name="venuename"
                  id=""
                  placeholder="Enter venue name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.venuename && (
                  <span className="text-amber-400">Venue name is required</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="venuetype">
                  Venue Type
                </label>
                <select
                  {...register("venuetype")}
                  className="py-3 bg-black focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className=" text-white " disabled>
                    Venue Type
                  </option>
                  <option value="conference">Conference Center</option>
                  <option value="expo">Expos & Conventions</option>
                  <option value="food">Food & Drink</option>
                  <option value="sports">Sports</option>
                  <option value="concerts">Concerts</option>
                  <option value="wedding">Weddings & Parties</option>
                  <option value="workshops">Workshops & Training</option>
                  <option value="others">others</option>
                </select>
              </div>
              {errors.venuetype && (
                <span className="text-amber-400">Venue type is required</span>
              )}
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex  flex-col w-full  md:w-1/2 space-y-3 relative">
                <label className="text-white  text-lg" htmlFor="date">
                  Create date
                </label>
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="py-3 pl-9 w-full  focus:border-[#b58753] focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"></DatePicker>
                  <IoCalendarOutline className="absolute left-3 top-[50%] transform -translate-y-1/2 text-[#44cfbf] text-xl cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col  w-full  md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="city">
                  City
                </label>
                <div className="flex ">
                  <input
                    {...register("city", { required: true })}
                    type="text"
                    name="city"
                    id=""
                    placeholder="Enter City "
                    className="py-3 focus:border-[#b58753] w-full focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  />
                </div>
                {errors.city && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
            </div>
            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full  space-y-3">
                <label className="text-white text-lg" htmlFor="address">
                  Address
                </label>
                <input
                  {...register("address", { required: true })}
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Address "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.address && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
            </div>
            {/* ROW-4 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="capacity">
                  Capacity
                </label>
                <input
                  min={1}
                  {...register("capacity", { required: true })}
                  type="number"
                  name="capacity"
                  id=""
                  placeholder="Enter capacity "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.capacity && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="country">
                  Country
                </label>
                <select
                  {...register("country")}
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white bg-black border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option disabled></option>
                  <option value="us">US</option>
                  <option value="australia">Australia</option>
                  <option value="bangladesh">Bangladesh</option>
                  <option value="nepal">Nepal</option>
                  <option value="china">China</option>
                </select>
              </div>
            </div>
            {/* ROW-5 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Phone
                </label>
                <input
                  {...register("phone", { required: true })}
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.phone && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  readOnly
                  id=""
                  placeholder="Enter email address"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.email && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
            </div>
            {/* ROW-6 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full  space-y-3">
                <label className="text-white text-lg" htmlFor="description">
                  Venue Description
                </label>

                <textarea
                  {...register("description", { required: true })}
                  name="description"
                  id=""
                  cols="4"
                  placeholder="Enter description"
                  rows="3"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required></textarea>
              </div>
            </div>
            {/* ROW-7 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex relative flex-col w-full md:1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="bannericon">
                  Venue Banner image
                </label>

                <input
                  {...register("bannericon", { required: true })}
                  type="file"
                  name="bannericon"
                  id=""
                  className="py-3 pl-6 focus:border-[#b58753] file:px-3 text-lg focus:border-2 text-white border border-gray-500 focus:outline-none rounded-none"
                />
                <IoMdCamera className="mr-2 absolute top-14 left-1 text-xl text-[#44cfbf]" />
                {errors.bannericon && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
              <div className="flex relative flex-col w-full md:1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="venueimage">
                  Venue image
                </label>

                <input
                  {...register("venueimage", { required: true })}
                  type="file"
                  name="venueimage"
                  id=""
                  className="py-3 pl-6 focus:border-[#b58753] file:px-3 text-lg focus:border-2 text-white border border-gray-500 focus:outline-none rounded-none"
                />
                <IoMdCamera className="mr-2 absolute top-14 left-1 text-xl text-[#44cfbf]" />
                {errors.venueimage && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
            </div>
            <div className="grid md:w-full my-7">
              <button
                disabled={LoadingToImageUpload}
                type="submit"
                className={`button-style ${
                  LoadingToImageUpload ? "cursor-not-allowed bg-gray-500" : ""
                }`}>
                {LoadingToImageUpload ? "Processing..." : "CREATE VENUE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorAddVenue;
