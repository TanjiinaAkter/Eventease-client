import { MdOutlineDateRange } from "react-icons/md";
import RouteTitle from "../../components/RouteTitle";
import Header from "../../pages/Shared/Header/Header";
import { IoIosTime } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { BsTicketPerforatedFill } from "react-icons/bs";
import useCategories from "../../hooks/useCategories";
import useAllevents from "../../hooks/useAllevents";

const Categories = () => {
  const [categories] = useCategories();
  const [allevents] = useAllevents();
  // CATEGORY BASED DYNAMIC EVENTS
  const categorizedEvents = categories.map((category) => ({
    name: category.name,
    icon: category.categoryicon,
    events: allevents.filter((event) => event.category === category.name),
  }));
  return (
    <div className="bg-[#0a1316] mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <RouteTitle
        routetitle={"Meet the Artist "}
        routesubtitle={
          "Discover the talent behind the performance"
        }></RouteTitle>
      <div className="grid grid-cols-1 gap-5 space-y-3 mt-5 ">
        {/*============= CATEGORY-1 DESIGN ============= */}

        {categorizedEvents.map((category) => (
          <div
            key={category.name}
            className="bg-[#152626] rounded-lg mx-auto h-max w-full md:w-[97%] p-4">
            <div className="flex items-center gap-2">
              <img
                className="h-[3rem] bg-white w-[3rem] rounded-full object-cover"
                src={category.icon}
                alt=""
              />
              <div className="text-white">
                <h2 className="text-xl text-[#44cfbf]">{category.name}</h2>
                <p>{category.events.length} events available</p>
              </div>
            </div>
            {/*============= CARD DESIGN ============= */}
            <div className="grid grid-cols-1 mx-auto w-[88%] md:w-[97%]   md:grid-cols-2 lg:grid-cols-2 gap-16 space-y-3 my-5">
              {category.events.length > 0 ? (
                category.events.map((event) => (
                  <div
                    key={event._id}
                    className="card  hover:scale-105 transition-all ease-in-out duration-500 flex md:h-[20rem] rounded-none flex-col md:flex-row card-side bg-base-100 shadow-xl">
                    <div className="flex w-full justify-center items-center">
                      <img
                        className=" w-[20rem] h-full object-cover"
                        src={event.eventimage}
                        alt="Movie"
                      />
                    </div>
                    <div className="card-body p-[1rem]  relative   rounded-none">
                      <h2 className="text-[#b58753] capitalize font-semibold text-2xl">
                        {event.eventtitle}
                      </h2>

                      <p className="text-[#6a6d6a]">{event.description}</p>
                      <div className="card-actions justify-between flex shadow-md p-2 ">
                        <div className="flex items-center gap-1">
                          <MdOutlineDateRange className="text-[#b58753]" />
                          <p className="text-[#6a6d6a] font-semibold ">
                            {event.eventstartdate}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <IoIosTime className="text-[#b58753]" />
                          <p className="text-[#6a6d6a] font-semibold ">
                            {event.eventstartdate}
                          </p>
                        </div>
                      </div>
                      <div className="card-actions justify-between flex shadow-md p-2 ">
                        <div className="flex items-center gap-1">
                          <IoLocation className="text-[#b58753]" />
                          <p className="text-[#6a6d6a] font-semibold ">
                            {event.venue}
                          </p>
                        </div>
                        <div className="flex items-center gap-1">
                          <BsTicketPerforatedFill className="text-[#b58753]" />
                          <p className="text-[#6a6d6a] font-semibold ">
                            $ {event.ticketprice}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-white">No events available</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
