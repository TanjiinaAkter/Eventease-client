import { AiOutlineCamera } from "react-icons/ai";
import RouteTitle from "../../../components/RouteTitle";

const EditArtists = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update Artist Info"}
        routesubtitle={"Modify artist info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <div className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="email">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id=""
                  placeholder="Enter artist name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="genre">
                  Genre
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter genre"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
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
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter contact number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter contact email"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  placeholder="Artist biography"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                  name=""
                  id=""
                  cols="20"
                  rows="4"></textarea>
              </div>
              <div className="flex relative flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="file">
                  Profile Photo
                </label>
                <input
                  type="file"
                  name="file"
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
          </div>
          <div className="grid md:w-full my-7">
            <button>UPDATE ARTIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditArtists;
