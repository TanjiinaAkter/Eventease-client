import { AiOutlineCamera } from "react-icons/ai";
import RouteTitle from "../../../components/RouteTitle";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

const VendorEditArtists = () => {
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  const axiosPublic = useAxiosPublic();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("artists default data", data);
    const image = { image: data.photo[0] };
    const res = axiosPublic
      .post(image_hosting_api, image, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.success) {
          axiosSecure
            .patch(`/artists/${id}`, {
              name: data.artistname,
              genre: data.genre,
              phone: data.contact,
              email: data.email,
              bio: data.bio,
              facebooklink: data.facebook,
              instagramlink: data.instagram,
              photo: res.data.data.display_url,
            })
            .then((res) => {
              console.log(res.data);
              if (res.data.modifiedCount === 1) {
                Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: `information of ${data.artistname} has been updated!!`,
                  showConfirmButton: false,
                  timer: 1500,
                });
                // reset();
              }
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
  const [artist, setAartist] = useState([]);

  const { id } = useParams();
  const { user } = useAuth();
  const { data: artists = [] } = useQuery({
    queryKey: ["artists", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/artists/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    if (artists.length > 0) {
      const getartistData = artists.find((artist) => artist._id === id);
      setAartist(getartistData);
      if (getartistData) {
        setValue("artistname", getartistData.name);
        setValue("genre", getartistData.genre);
        setValue("contact", getartistData.phone);
        setValue("email", getartistData.email);
        setValue("bio", getartistData.bio);
        setValue("instagram", getartistData.instagramlink);
        setValue("facebook", getartistData.facebooklink);
      }
    }
  }, [artists, id, setValue]);
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update Artist Info"}
        routesubtitle={"Modify artist info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="artistname">
                  Name
                </label>
                <input
                  {...register("artistname")}
                  type="text"
                  name="artistname"
                  id=""
                  placeholder="Enter artist name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="genre">
                  Genre
                </label>
                <input
                  {...register("genre")}
                  type="text"
                  name="genre"
                  id=""
                  placeholder="Enter genre"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
            </div>
            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="contact">
                  Contact Number
                </label>
                <input
                  {...register("contact")}
                  type="text"
                  name="contact"
                  id=""
                  placeholder="Enter contact number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email")}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter contact email"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
              </div>
            </div>
            {/* ROW-3 */}
            <div className="w-full ">
              <div className="flex flex-col w-full space-y-3">
                <label className="text-white text-lg" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  {...register("bio")}
                  placeholder="Artist biography"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  name="bio"
                  id=""
                  cols="20"
                  rows="4"></textarea>
              </div>
            </div>
            {/* ROW-4 */}
            <div className="w-full ">
              <h3 className="text-xl text-white border-b-[1px] md:w-1/3 border-b-gray-600 my-3 pb-2">
                Social media links -
              </h3>
              <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5">
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label className="text-white text-[17px]" htmlFor="facebook">
                    Facebook
                  </label>
                  <input
                    {...register("facebook")}
                    type="url"
                    name="facebook"
                    id="facebook"
                    placeholder="Facebook profile URL"
                    className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  />
                </div>
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label
                    className="text-white text-[17px] "
                    htmlFor="instagram">
                    Instagram
                  </label>
                  <input
                    {...register("instagram")}
                    type="url"
                    name="instagram"
                    id="instagram"
                    placeholder="Instagram profile URL"
                    className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  />
                </div>
              </div>
            </div>

            {/* ROW-5 */}
            <div className="flex flex-col md:flex-row justify-between  w-full items-start gap-5 ">
              <div className="flex relative flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="photo">
                  Profile Image
                </label>
                <input
                  {...register("photo", { required: true })}
                  type="file"
                  name="photo"
                  id="photo"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border px-6 border-gray-500 focus:outline-none rounded-none file:px-4   file:text-sm file:font-semibold "
                />
                {errors.photo && (
                  <span className="text-yellow-400">photo required</span>
                )}

                <AiOutlineCamera
                  className="absolute top-[65%] left-2 transform -translate-y-1/2 text-white"
                  style={{ fontSize: "24px" }}
                />
                {/* Display selected file name */}
              </div>
            </div>
            <div className="grid md:w-full my-7">
              <button type="submit" className="button-style">
                UPDATE ARTIST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorEditArtists;
