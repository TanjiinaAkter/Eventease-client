import { IoMdCamera } from "react-icons/io";
import RouteTitle from "../../../components/RouteTitle";

const EditCategory = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update  Category  Info "}
        routesubtitle={"Modify Category info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <div className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full  space-y-3">
                <label className="text-white text-lg" htmlFor="categoryname">
                  Category Name
                </label>
                <input
                  type="text"
                  name="categoryname"
                  id=""
                  placeholder="Enter category name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
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
                name=""
                id=""
                cols="5"
                rows="5"
                placeholder="Enter Description "
                className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                required></textarea>
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="categoryicon">
                  Category icon
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Upload Category icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                  required
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="bannericon">
                  Banner icon
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Upload Banner icon "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                  required
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
            </div>
          </div>
          <div className="grid md:w-full my-7">
            <button className="button-style">Update CATEGORY</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCategory;
