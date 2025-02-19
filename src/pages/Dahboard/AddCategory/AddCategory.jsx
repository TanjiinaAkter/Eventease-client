import { IoMdCamera } from "react-icons/io";
import RouteTitle from "../../../components/RouteTitle";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { IoCalendarOutline } from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./AddCategory.css";
const AddCategory = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [loadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  //console.log(image_hosting_api);
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();
  // DATE ER MAN PAWAR JONNO REACT DATE PICKER USE KORE
  useEffect(() => {
    setValue("date", startDate);
  }, [setValue, startDate]);
  const formatdate = (date) => {
    const day = String(date.getDate()).padStart("2", 0);
    const month = String(date.getMonth() + 1).padStart("2", 0);
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };

  const onSubmit = async (data) => {
    // console.log("Form Data from React Hook Form:", data);
    // mane IMGBB te image k obosshoi image nam diye obj akare send korte hoy karon imgbb te key value pair hishebe post korte hoy
    const bannerIcon = { image: data.bannericon[0] };
    const categoryIcon = { image: data.categoryicon[0] };
    setLoadingToImageUpload(true);
    try {
      // Image upload request gula parallel e cholbe
      const [res1, res2] = await Promise.all([
        axiosPublic.post(image_hosting_api, bannerIcon, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
        axiosPublic.post(image_hosting_api, categoryIcon, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
      ]);

      if (res1.data.success && res2.data.success) {
        // Ekhon category add korar request pathano hobe
        axiosSecure
          .post("/categories", {
            name: data.categoryname,
            description: data.categorydescription,
            categoryicon: res2.data.data.display_url,
            bannericon: res1.data.data.display_url,
            date: formatdate(startDate),
          })
          .then((res) => {
            // Category add howar por alert show
            if (res.data.insertedId) {
              setLoadingToImageUpload(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.categoryname} has been added!!`,
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
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Category "}
        routesubtitle={"Add a new category to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3 ">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg">Category Name</label>
                <input
                  {...register("categoryname", { required: true })}
                  type="text"
                  placeholder="Enter category name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.categoryname && (
                  <span className="text-amber-400">category name field is required*</span>
                )}
              </div>
              <div className="flex  flex-col w-full  md:w-1/2 space-y-3 relative">
                <label className="text-white text-lg">Create Date</label>
                <div className="relative w-full">
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    className="py-3 px-3 pl-9 w-full border border-gray-500 focus:border-[#b58753] focus:outline-none rounded-none  text-white"
                  />
                  <IoCalendarOutline className="absolute left-3 top-[50%] transform -translate-y-1/2 text-[#44cfbf] text-xl cursor-pointer" />
                </div>

                {errors.categorydate && (
                  <span className="text-amber-400">categorydate field is required</span>
                )}
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col w-full space-y-3">
              <label
                className="text-white text-lg"
                htmlFor="categorydescription">
                Description
              </label>
              <textarea
                {...register("categorydescription", { required: true })}
                cols="5"
                rows="5"
                placeholder="Enter Description "
                className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                required></textarea>
              {errors.categorydescription && (
                <span className="text-amber-400">category description field is required</span>
              )}
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              {/* CATEGORY ICON */}
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg">Category icon</label>
                <input
                  type="file"
                  {...register("categoryicon", { required: true })}
                  placeholder="Upload Category icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                {errors.categoryicon && (
                  <span className="text-amber-400">category icon field is required</span>
                )}
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
              {/* BANNER ICON */}
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg">Banner icon</label>
                <input
                  type="file"
                  {...register("bannericon", { required: true })}
                  placeholder="Upload Banner icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                {errors.bannericon && (
                  <span className="text-amber-400">banner icon field is required</span>
                )}
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
            </div>
            <div className="grid  md:w-full my-7">
              <button
                disabled={loadingToImageUpload}
                type="submit"
                className={`button-style ${
                  loadingToImageUpload ? "cursor-not-allowed bg-gray-500" : ""
                }`}>
                {loadingToImageUpload ? "Processing..." : "CREATE CATEGORY"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
