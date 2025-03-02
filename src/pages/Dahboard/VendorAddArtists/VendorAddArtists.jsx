import { AiOutlineCamera } from "react-icons/ai";
import RouteTitle from "../../../components/RouteTitle";
import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";

const VendorAddArtists = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

  const onSubmit = async (data) => {
    console.log(data);
    const image = { image: data.photo[0] };
    const res = await axiosPublic.post(image_hosting_api, image, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("csdcjscs", res.data.data.display_url);
    if (res.data.success) {
      axiosSecure
        .post("/artists", {
          name: data.artistname,
          genre: data.genre,
          phone: data.contact,
          email: data.email,
          bio: data.bio,
          facebooklink: data.facebook,
          instagramlink: data.instagram,
          photo: res.data.data.display_url,
          createdBy: user.email,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${data.artistname} has been added!!`,
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
  };
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Artist"}
        routesubtitle={"Add a new artist to your system"}></RouteTitle>

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
                  {...register("artistname", { required: true })}
                  type="text"
                  name="artistname"
                  id=""
                  placeholder="Enter artist name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.exampleRequired && (
                  <span className="text-yellow-400">Artistname required</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="genre">
                  Genre
                </label>
                <input
                  {...register("genre", { required: true })}
                  type="text"
                  name="genre"
                  id=""
                  placeholder="Enter genre"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.genre && (
                  <span className="text-yellow-400">genre required</span>
                )}
              </div>
            </div>
            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="contact">
                  Contact Number
                </label>
                <input
                  {...register("contact", { required: true })}
                  type="text"
                  name="contact"
                  id=""
                  placeholder="Enter contact number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.contact && (
                  <span className="text-yellow-400">contact required</span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="email">
                  Email
                </label>
                <input
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter contact email"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.email && (
                  <span className="text-yellow-400">contact required</span>
                )}
              </div>
            </div>
            {/* ROW-3 */}
            <div className="w-full ">
              <div className="flex flex-col w-full space-y-3">
                <label className="text-white text-lg" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  {...register("bio", { required: true })}
                  placeholder="Artist biography"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  name="bio"
                  id=""
                  cols="20"
                  rows="4"></textarea>
                {errors.bio && (
                  <span className="text-yellow-400">contact required</span>
                )}
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
                    {...register("facebook", { required: true })}
                    type="url"
                    name="facebook"
                    id=""
                    placeholder="Facebook profile URL"
                    className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  />
                  {errors.facebook && (
                    <span className="text-yellow-400">photo is required</span>
                  )}
                </div>
                <div className="flex flex-col w-full md:w-1/2 space-y-3">
                  <label
                    className="text-white text-[17px] "
                    htmlFor="instagram">
                    Instagram
                  </label>
                  <input
                    {...register("instagram", { required: true })}
                    type="url"
                    name="instagram"
                    id=""
                    placeholder="Instagram profile URL"
                    className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  />
                  {errors.instagram && (
                    <span className="text-yellow-400">contact required</span>
                  )}
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
                  <span className="text-yellow-400">contact required</span>
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
                CREATE ARTIST
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorAddArtists;
