import { IoMdCamera } from "react-icons/io";
import RouteTitle from "../../../components/RouteTitle";

const VendorAddEvent = () => {
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Create Event "}
        routesubtitle={"Add a new event to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <div className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="eventtitle">
                  Event Title
                </label>
                <input
                  type="text"
                  name="eventtitle"
                  id=""
                  placeholder="Enter event title "
                  className="py-3 focus:border-[#b58753] focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="vendor">
                  Vendor
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled></option>
                  <option className="text-black" value="Celebrationexpert">
                    Celebration Expert
                  </option>
                  <option className="text-black" value="expert">
                    Expert
                  </option>
                  <option className="text-black" value="expertsolution">
                    expert solution
                  </option>
                </select>
              </div>
            </div>

            {/* ROW-2 */}
            <div className="flex flex-col w-full space-y-3">
              <label className="text-white text-lg" htmlFor="description">
                Description
              </label>
              <textarea
                placeholder="Enter description"
                name=""
                id=""
                cols="5"
                rows="4"
                className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                required></textarea>
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="Vendor">
                  Venue
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled></option>
                  <option className="text-black" value="sidny">
                    Sidny opera center
                  </option>
                  <option className="text-black" value="expert">
                    Expert house
                  </option>
                  <option className="text-black" value="solution">
                    solution
                  </option>
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="vendor">
                  Category
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled></option>
                  <option className="text-black" value="theater">
                    Theater
                  </option>
                  <option className="text-black" value="sports">
                    Sports
                  </option>
                  <option className="text-black" value="conference">
                    Conference
                  </option>
                  <option className="text-black" value="concert">
                    Concert
                  </option>
                </select>
              </div>
            </div>
            {/* ROW-4 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full  space-y-3">
                <label className="text-white text-lg" htmlFor="artist">
                  Artist
                </label>
                <select
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled></option>
                  <option className="text-black" value="sidnipiko">
                    Sidnipikoer
                  </option>
                  <option className="text-black" value="elonmask">
                    Elon mask
                  </option>
                  <option className="text-black" value="   solwetiwue">
                    Solwetiwue
                  </option>
                </select>
              </div>
            </div>
            {/* ROW-5 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="ticket">
                  Total Ticket
                </label>
                <input
                  type="number"
                  placeholder="Total Ticket"
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="ticketprice">
                  Ticket Price
                </label>
                <input
                  type="number"
                  placeholder="Ticket Price"
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>
            {/* ROW-6 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="email">
                  Contact Email
                </label>
                <input
                  type="email"
                  placeholder="Enter contact email"
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Contact Phone
                </label>
                <input
                  type="number"
                  placeholder="Enter Contact phone"
                  name=""
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required
                />
              </div>
            </div>

            {/* ROW-7 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="eventimages">
                  Event Images
                </label>
                <input
               
                  type="file"
                  name=""
                  id=""
                  placeholder="Upload Event Images "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                  required
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="eventbanner">
                  Event Banner
                </label>
                <input
                  type="file"
                  name=""
                  id=""
                  placeholder="Upload Event Banner  "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                  required
                />
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
            </div>
          </div>
          <div className="grid md:w-full my-7">
            <button className="button-style">CREATE EVENT</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorAddEvent;
