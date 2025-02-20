import { IoMdCamera } from "react-icons/io";
import RouteTitle from "../../../components/RouteTitle";
import { useParams } from "react-router-dom";
import useCategories from "../../../hooks/useCategories";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditCategory = () => {
  const [LoadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const [inputColor, setInputColor] = useState("text-gray-400");
  const { id } = useParams();
  const [newGetCat, setNewGetCat] = useState([]);
  const [categories, refetch] = useCategories();
  const {
    register,
    reset,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log("id holo", id, categories);
  useEffect(() => {
    if (categories.length > 0) {
      const category = categories.find((cat) => cat._id === id);
      setNewGetCat(category);
      console.log(category);
      if (category) {
        setValue("categoryname", category?.name);
        setValue("description", category?.description);
        setValue("categoryicon", category?.categoryicon);
        setValue("bannericon", category?.bannericon);
      }
    }
  }, [categories, id, setValue]);
  // console.log(storeCat);
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputColor(value ? "text-white" : "");
  };

  const onSubmit = async (data) => {
    setLoadingToImageUpload(true);
    //console.log(data);
    // input img er jonno name attribute ditei hobe noyto img er value ta pabo na
    const imageFile1 = { image: data.categoryicon[0] };
    const imageFile2 = { image: data.bannericon[0] };
    try {
      const [res1, res2] = await Promise.all([
        axiosPublic.post(image_hosting_api, imageFile1, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        axiosPublic.post(image_hosting_api, imageFile2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      ]);

      if (res1.data.data.display_url && res2.data.data.display_url) {
        axiosSecure
          .patch(`/categories/${id}`, {
            name: data.categoryname,
            description: data.description,
            categoryicon: res1.data.data.display_url,
            bannericon: res2.data.data.display_url,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount || res.data.matchedCount === 1) {
              setLoadingToImageUpload(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.categoryname} has been Updated!!`,
                showConfirmButton: false,
                timer: 1500,
              });
              refetch();
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
        routetitle={"Update  Category  Info "}
        routesubtitle={"Modify Category info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full  space-y-3">
                <label className="text-white text-lg" htmlFor="categoryname">
                  Category Name
                </label>
                <input
                  {...register("categoryname")}
                  onChange={handleInputChange}
                  type="text"
                  name="categoryname"
                  id=""
                  className={`py-3 focus:border-[#b58753]  focus:border-2 defaulyValue  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                  required
                />
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col w-full space-y-3">
              <label className="text-white text-lg" htmlFor="description">
                Description
              </label>
              <textarea
                onChange={handleInputChange}
                {...register("description")}
                name="description"
                id=""
                cols="5"
                rows="5"
                placeholder="Enter Description "
                className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                required></textarea>
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="categoryicon">
                  Category icon
                </label>
                <input
                  {...register("categoryicon", { required: true })}
                  type="file"
                  name="categoryicon"
                  id=""
                  placeholder="Upload Category icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
                {errors.categoryicon && (
                  <span className="text-yellow-400">
                    This field is required*
                  </span>
                )}
              </div>

              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="bannericon">
                  Banner icon
                </label>
                <input
                  {...register("bannericon", { required: true })}
                  type="file"
                  name="bannericon"
                  id=""
                  placeholder="Upload Banner icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
                {errors.bannericon && (
                  <span className="text-yellow-400">
                    This field is required*
                  </span>
                )}
              </div>
            </div>
            <div className="grid md:w-full my-7">
              <button
                disabled={LoadingToImageUpload}
                type="submit"
                className={`button-style ${
                  LoadingToImageUpload ? "cursor-not-allowed bg-gray-700" : ""
                }`}>
                {LoadingToImageUpload ? "PROCESSING..." : "Update CATEGORY"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
