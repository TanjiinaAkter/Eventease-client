import RouteTitle from "../../../components/RouteTitle";

const AddVendor = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Vendor "}
        routesubtitle={"Add a new vendor to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <div className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="vendorname">
                  Vendor Name
                </label>
                <input
                  type="text"
                  name="vendorname"
                  id=""
                  placeholder="Enter vendor name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="vendoremail">
                  Vendor Email
                </label>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Enter Vendor Email"
                  className="py-3 bg-black focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="role">
                  User Role
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled></option>
                  <option className="text-black" value="Celebrationexpert">
                    User
                  </option>
                  <option className="text-black" value="expert">
                    Vendor
                  </option>
                  <option
                    className="text-black"
                    value="expertsolution"></option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="address">
                  Address
                </label>
                <input
                  type="text"
                  name="address"
                  id=""
                  placeholder="Enter Address "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="company">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  id=""
                  placeholder="Enter Company name "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Phone
                </label>
                <input
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid md:w-full my-7">
            <button className="button-style">Create Vendor</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVendor;
