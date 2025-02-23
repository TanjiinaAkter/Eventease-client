import { useEffect, useState } from "react";
import RouteTitle from "../../../components/RouteTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { IoMdCamera } from "react-icons/io";
import DatePicker from "react-datepicker";
import { IoCalendarOutline } from "react-icons/io5";
import { useParams } from "react-router-dom";
import useVenues from "../../../hooks/useVenues";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const VendorEditVenue = () => {
  const [LoadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const [inputColor, setInputColor] = useState("text-gray-400");
  const { id } = useParams();
  const [venues, refetch] = useVenues();
  console.log("venues", venues);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const [startDate, setStartDate] = useState(new Date());
  const handleInputColor = (e) => {
    const value = e.target.value;
    if (value) {
      setInputColor(value ? "text-white" : "text-gray-400");
    }
  };
  const {
    register,
    handleSubmit,
    setValue,
    // reset,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setLoadingToImageUpload(true);
    console.log("lets seee", id);
    const image1 = { image: data.bannericon[0] };
    const image2 = { image: data.venueimage[0] };
    try {
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
      //console.log("res1.data", res1.data, "res2.data", res2.data);

      if (res1.data.success && res2.data.success) {
        axiosSecure
          .patch(`/venues/${id}`, {
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
            setLoadingToImageUpload(false);
            refetch();
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.venuename} has been Updated!!`,
              showConfirmButton: false,
              timer: 1500,
            });
            // reset();
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
  const formatDate = (date) => {
    const day = String(date.getDay()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  useEffect(() => {
    const venue = venues.find((ven) => ven._id === id);
    if (venue) {
      setValue("venuename", venue?.name);
      setValue("venuetype", venue?.type);
      setValue("city", venue?.city);
      setValue("date", startDate);
      setValue("address", venue?.address);
      setValue("capacity", venue?.capacity);
      setValue("country", venue?.country);
      setValue("phone", venue?.phone);
      setValue("email", venue?.createdBy);
      setValue("description", venue?.description);
      setValue("bannericon", venue?.bannericon);
      setValue("venueimage", venue?.venueimage);
    }
  }, [setValue, startDate, id, venues]);
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update Venue Info "}
        routesubtitle={"Modify Venue info to your system"}></RouteTitle>

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
                  onChange={handleInputColor}
                  name="venuename"
                  id=""
                  placeholder="Enter venue name"
                  className={`py-3 focus:border-[#b58753]  focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
                {errors.venuename && (
                  <span className="text-amber-400">
                    Venue name is required*
                  </span>
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
                {errors.venuetype && (
                  <span className="text-amber-400">Venue type is required</span>
                )}
              </div>
            </div>
            {/* ROW-2 mine */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="w-full flex flex-col space-y-3 md:w-1/2">
                <label className="text-white text-lg" htmlFor="date">
                  Create date
                </label>
                <div className="relative ">
                  <DatePicker
                    className="py-3 w-full  focus:border-[#b58753] focus:border-2 text-white border pl-9 border-gray-500 focus:outline-none rounded-none"
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                  />
                  <IoCalendarOutline className="absolute left-3 top-[50%] transform -translate-y-1/2 text-[#44cfbf] text-xl cursor-pointer" />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="city">
                  City
                </label>
                <input
                  {...register("city", { required: true })}
                  onChange={handleInputColor}
                  type="text"
                  name="city"
                  id=""
                  placeholder="Enter City "
                  className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
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
                  onChange={handleInputColor}
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Address "
                  className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
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
                  onChange={handleInputColor}
                  min={1}
                  {...register("capacity", { required: true })}
                  type="number"
                  name="capacity"
                  id=""
                  placeholder="Enter capacity "
                  className={`py-3 focus:border-[#b58753] focus:border-2 border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
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
                  onChange={handleInputColor}
                  {...register("phone", { required: true })}
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
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
                  onChange={handleInputColor}
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  readOnly
                  id=""
                  placeholder="Enter email address"
                  className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
                {errors.email && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
            </div>
            {/* ROW-6 mine */}
            <div className="flex flex-col w-full space-y-3">
              <label className="text-white text-lg" htmlFor="description">
                Venue Description
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="Enter Description "
                className="py-3 focus:border-[#b58753] focus:border-2  border pl-2 text-gray-400 border-gray-500 focus:outline-none rounded-none"
                name="description"
                id=""
                cols="4"
                rows="3"></textarea>
            </div>
            {/* ROW-7 mine */}
            <div className="flex flex-col gap-5 md:flex-row w-full  space-y-3">
              <div className="flex flex-col relative  w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="bannericon">
                  Venue Banner image
                </label>
                <input
                  onChange={handleInputColor}
                  {...register("bannericon", { required: true })}
                  type="file"
                  name="bannericon"
                  id=""
                  className={`py-3 pl-6 focus:border-[#b58753] file:px-3 text-lg focus:border-2 text-white border border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
                <IoMdCamera className="mr-2 absolute top-14 left-1 text-xl text-[#44cfbf]" />
                {errors.bannericon && (
                  <span className="text-amber-400">This field is required</span>
                )}
              </div>
              <div className="flex flex-col relative  w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="venueimage">
                  Venue image
                </label>
                <input
                  onChange={handleInputColor}
                  {...register("venueimage", { required: true })}
                  type="file"
                  name="venueimage"
                  id=""
                  className={`py-3 pl-6 focus:border-[#b58753] file:px-3 text-lg focus:border-2 text-white border border-gray-500 focus:outline-none rounded-none ${inputColor}`}
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
                  LoadingToImageUpload ? "cursor-not-allowed bg-gray-400" : ""
                }`}>
                {LoadingToImageUpload ? "Proccessing..." : "UPDATE VENUE"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorEditVenue;
