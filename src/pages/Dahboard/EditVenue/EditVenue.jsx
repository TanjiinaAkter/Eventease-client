import RouteTitle from "../../../components/RouteTitle";

const EditVenue = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update Venue Info "}
        routesubtitle={"Modify Venue info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <div className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="venuename">
                  Venue Name
                </label>
                <input
                  type="text"
                  name="venuename"
                  id=""
                  placeholder="Enter venue name"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="venue">
                  Venue Type
                </label>
                <select
                  className="py-3 bg-black focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className=" text-white " disabled>
                    Venue Type
                  </option>
                  <option value="conference">Conference Center</option>
                  <option value="hotel">Hotel</option>
                  <option value="theater">Theater</option>
                  <option value="stadium">Stadium</option>
                  <option value="outdoor">Outdoor Space</option>
                  <option value="restaurant">Restaurant</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col w-full space-y-3">
              <label className="text-white text-lg" htmlFor="description">
                Venue Description
              </label>
              <input
                type="text"
                name="description"
                id=""
                placeholder="Enter Description "
                className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                required
              />
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
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
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="city">
                  City
                </label>
                <input
                  type="text"
                  name="text"
                  id=""
                  placeholder="Enter City "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-4 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="capacity">
                  Capacity
                </label>
                <input
                  type="number"
                  name="capacity"
                  id=""
                  placeholder="Enter capacity "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg " htmlFor="country">
                  Country
                </label>
                <select
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
                  type="text"
                  name="phone"
                  id=""
                  placeholder="Enter phone number"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  placeholder="Enter email address"
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>
          </div>
          <div className="grid md:w-full my-7">
            <button className="button-style">UPDATE VENUE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditVenue;
