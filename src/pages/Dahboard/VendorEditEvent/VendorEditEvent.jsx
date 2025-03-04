import { IoMdCamera } from "react-icons/io";
import RouteTitle from "../../../components/RouteTitle";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useCategories from "../../../hooks/useCategories";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DatePicker from "react-datepicker";
import { useParams } from "react-router-dom";
import useArtists from "../../../hooks/useArtists";

const VendorEditEvent = () => {
  const [artists] = useArtists();
  const [inputColor, setInputColor] = useState("text-gray-400");
  const { id } = useParams();
  const [LoadingToImageUpload, setLoadingToImageUpload] = useState(false);
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
  const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;
  console.log(image_hosting_api);
  const formatDate = (date) => {
    const day = String(date.getDay()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = String(date.getFullYear());
    return `${day}/${month}/${year}`;
  };
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [categories] = useCategories();
  const [venuesName, setVenuesName] = useState([]);
  const [catsName, setCatsName] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { data: venues = [] } = useQuery({
    queryKey: ["venues"],
    queryFn: async () => {
      const res = await axiosPublic.get("/venues");
      return res.data;
    },
  });
  console.log(venuesName);
  const { data: events = [], refetch } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosPublic.get("/events");
      console.log(res.data);
      return res.data;
    },
  });
  console.log(events);
  const {
    register,
    handleSubmit,
    setValue,

    formState: { errors },
  } = useForm();
  useEffect(() => {
    if (venues.length > 0 && categories.length > 0 && events.length > 0) {
      const venuesname = venues.map((venue) => venue.name);
      setVenuesName(venuesname);
      const categoriesname = categories.map((cat) => cat.name);
      setCatsName(categoriesname);
    }
    const event = events.find((event) => event._id === id);
    console.log("here is single event", event);
    setValue("eventtitle", event?.eventtitle);
    setValue("vendor", event?.vendor);
    setValue("description", event?.description);
    setValue("venue", event?.venue);
    setValue("category", event?.category);
    setValue("artist", event?.artist);
    setValue("ticket", event?.ticket);
    setValue("ticketprice", event?.ticketprice);
    setValue("phone", event?.phone);
    setValue("eventstartdate", startDate);
    setValue("eventenddate", endDate);
   setValue("eventstatus", event.eventstatus);
    setValue("email", user?.email);
  }, [venues, categories, user, setValue, events, id]);
  const onSubmit = async (data) => {
    console.log(data);

    const getimg1 = { image: data.eventimage[0] };
    const getimg2 = { image: data.eventbanner[0] };
    console.log(getimg1, getimg2);
    setLoadingToImageUpload(true);
    try {
      const [res1, res2] = await Promise.all([
        axiosPublic.post(image_hosting_api, getimg1, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
        axiosPublic.post(image_hosting_api, getimg2, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }),
      ]);
      console.log(res1.data, res2.data);
      if (res1.data.success && res2.data.success) {
        console.log(id);
        axiosSecure
          .patch(`/events/${id}`, {
            eventtitle: data.eventtitle,
            vendor: data.vendor,
            description: data.description,
            venue: data.venue,
            category: data.category,
            artist: data.artist,
            eventstartdate: formatDate(startDate),
            eventenddate: formatDate(endDate),
            ticket: data.ticket,
            ticketprice: data.ticketprice,
            // email: data.email,
            phone: data.phone,
            eventimage: res1.data.data.display_url,
            eventbanner: res2.data.data.display_url,
            createdAt: formatDate(new Date()),
            eventstatus: data.eventstatus,
          })
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount === 1) {
              refetch();
              setLoadingToImageUpload(false);
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${data.eventtitle} has been updated!!`,
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      }
    } catch (error) {
      setLoadingToImageUpload(false);
      console.log(error);
    }
  };
  const handleInputColor = (e) => {
    const value = e.target.value;
    console.log(value);
    setInputColor(value ? "text-white" : "text-gray-500");
  };
  return (
    <div className="relative bg-black w-full h-full min-h-screen p-6">
      <RouteTitle
        routetitle={"Update Event Info  "}
        routesubtitle={"Modify Event info to your system"}></RouteTitle>

      <div className="relative z-10 flex justify-center items-center mt-2">
        <div className="shadow-2xl bg-[#0f1c1c] p-6 rounded-none w-full lg:w-[80%] h-full">
          <form onSubmit={handleSubmit(onSubmit)} className="form space-y-3">
            {/* ROW-1 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="eventtitle">
                  Event Title
                </label>
                <input
                  {...register("eventtitle", { required: true })}
                  type="text"
                  onChange={handleInputColor}
                  name="eventtitle"
                  id=""
                  placeholder="Enter event title "
                  className={`py-3 focus:border-[#b58753] focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
                {errors.eventtitle && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="vendor">
                  Vendor
                </label>
                <select
                  {...register("vendor", { required: true })}
                  name="vendor"
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" disabled>
                    select vendor
                  </option>
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
                onChange={handleInputColor}
                {...register("description", { required: true })}
                name="description"
                id=""
                cols="5"
                rows="4"
                className={`py-3 focus:border-[#b58753]  focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}></textarea>
              {errors.description && (
                <span className="text-yellow-400">This field is required</span>
              )}
            </div>

            {/* ROW-3 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              {/* VENUES NAME */}
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="venue">
                  Venue
                </label>
                <select
                  {...register("venue", { required: true })}
                  name="venue"
                  id=""
                  className="py-3 focus:border-[#b58753] bg-black focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" selected disabled>
                    Select a venue
                  </option>
                  {venuesName.map((venuename) => (
                    <option
                      key={venuename}
                      className="text-white bg-black "
                      value={venuename}>
                      {venuename}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="category">
                  Category
                </label>
                <select
                  {...register("category", { required: true })}
                  name="category"
                  id=""
                  className="py-3 focus:border-[#b58753] bg-black focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white " selected disabled>
                    select a category
                  </option>
                  {catsName.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {/* ROW-4 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="artist">
                  Artist
                </label>
                <select
                  {...register("artist", { required: true })}
                  name="artist"
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white bg-black border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  {/* TO DO: ARTIST NAME WILL BE DYNAMIC */}
                  <option className="text-white bg-black " selected disabled>
                    Select artist
                  </option>
                  {artists.map((artist) => (
                    <option
                      key={artist._id}
                      value={artist.name}
                      className="text-white bg-black">
                      {artist.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex flex-col w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="eventstatus">
                  Event Status
                </label>
                <select
                  {...register("eventstatus", { required: true })}
                  name="eventstatus"
                  id=""
                  className="py-3 focus:border-[#b58753] bg-black focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                  required>
                  <option className="text-white bg-black" selected disabled>
                    Select status
                  </option>
                  <option className="text-white" value="Pending">
                    Pending
                  </option>
                  <option className="text-white" value="Canceled">
                    Canceled
                  </option>
                </select>
              </div>
            </div>
            {/* ROW-5 EVENT START AND END DATE */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="eventstartdate">
                  Event start date
                </label>

                <div>
                  <DatePicker
                    {...register("eventstartdate", { required: true })}
                    selected={startDate}
                    className="py-3 focus:border-[#b58753] w-full  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                    onChange={(date) => setStartDate(date)}
                  />
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="eventenddate">
                  Event end date
                </label>

                <div>
                  <DatePicker
                    {...register("eventenddate", { required: true })}
                    selected={endDate}
                    className="py-3 focus:border-[#b58753] w-full  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                    onChange={(date) => setEndDate(date)}
                  />
                </div>
              </div>
            </div>
            {/* ROW-6 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="ticket">
                  Total Ticket
                </label>
                <input
                  {...register("ticket", { required: true })}
                  type="number"
                  min={1}
                  placeholder="Total Ticket"
                  name="ticket"
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none"
                />
                {errors.ticket && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
              </div>
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="ticketprice">
                  Ticket Price
                </label>
                <input
                  {...register("ticketprice", { required: true })}
                  type="number"
                  min={1}
                  placeholder="Ticket Price"
                  name="ticketprice"
                  id=""
                  className="py-3 focus:border-[#b58753]  focus:border-2 text-white border border-gray-500 focus:outline-none rounded-none"
                />
                {errors.ticketprice && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
              </div>
            </div>
            {/* ROW-7 */}
            <div className="flex flex-col md:flex-row justify-between w-full  items-center gap-5 ">
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="email">
                  Contact Email
                </label>
                <input
                  onChange={handleInputColor}
                  readOnly
                  {...register("email", { required: true })}
                  type="email"
                  name="email"
                  id=""
                  className={`py-3 focus:border-[#b58753]  focus:border-2  border pl-2 border-gray-500 focus:outline-none rounded-none ${inputColor}`}
                />
                {errors.email && <span>This field is required</span>}
              </div>
              <div className="flex flex-col w-full  md:w-1/2  space-y-3">
                <label className="text-white text-lg" htmlFor="phone">
                  Contact Phone
                </label>
                <input
                  onChange={handleInputColor}
                  {...register("phone", { required: true })}
                  type="number"
                  placeholder="Enter Contact phone"
                  name="phone"
                  id=""
                  className={`py-3 focus:border-[#b58753]  focus:border-2 text-white border pl-2 border-gray-500 focus:outline-none rounded-none${inputColor} `}
                />
                {errors.phone && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
              </div>
            </div>

            {/* ROW-8 */}
            <div className="flex flex-col md:flex-row justify-between w-full items-center gap-5 ">
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="eventimage">
                  Event Images
                </label>
                <input
                  {...register("eventimage", { required: true })}
                  type="file"
                  name="eventimage"
                  id=""
                  placeholder="Upload Event Images "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                {errors.eventimage && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
              <div className=" relative flex flex-col w-full md:w-1/2 space-y-3">
                <label className="text-white text-lg" htmlFor="eventbanner">
                  Event Banner
                </label>
                <input
                  {...register("eventbanner", { required: true })}
                  type="file"
                  name="eventbanner"
                  id=""
                  placeholder="Upload Event Banner  "
                  className="py-3 focus:border-[#b58753]  pl-5 file:px-3  focus:border-2 text-white border  border-gray-500 focus:outline-none rounded-none"
                />
                {errors.eventbanner && (
                  <span className="text-yellow-400">
                    This field is required
                  </span>
                )}
                <IoMdCamera className=" absolute top-14 left-1 text-xl text-[#44cfbf]" />
              </div>
            </div>
            <div className="grid md:w-full my-7">
              <button
                disabled={LoadingToImageUpload}
                type="submit"
                className={`button-style ${
                  LoadingToImageUpload ? "cursor-not-allowed bg-gray-500" : ""
                }`}>
                {LoadingToImageUpload ? "Processing..." : " UPDATE EVENT"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default VendorEditEvent;
