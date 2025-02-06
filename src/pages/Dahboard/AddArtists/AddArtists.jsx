import RouteTitle from "../../../components/RouteTitle";

const AddArtists = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Artist"}
        routesubtitle={"Add a new artist to your system"}></RouteTitle>

      <div className="relative  z-10 flex justify-center items-center mt-2">
        <div className=" shadow-2xl bg-[#0f1c1c] p-6  rounded-none w-full  lg:w-[80%] h-full">
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
                  className="py-3 text-white  border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="genre">
                  Genre
                </label>
                <input
                  type="text"
                  name=""
                  id=""
                  placeholder="Enter genre"
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
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
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter contact email"
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-3 */}
            <div className="flex   flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="bio">
                  Bio
                </label>
                <textarea
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                  name=""
                  id=""
                  cols="20"
                  rows="4"></textarea>
              </div>
              <div className="flex flex-col  w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg " htmlFor="photo">
                  Profile Photo
                </label>
                <input
                  type="photo"
                  name="text"
                  id=""
                  placeholder=" Enter photo"
                  className="py-3 text-white border pl-2 border-gray-500 focus:outline-none  rounded-none"
                  required
                />
              </div>
            </div>
          </div>
          <div className=" grid md:w-full my-7">
            <button>ADD ARTIST</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddArtists;
