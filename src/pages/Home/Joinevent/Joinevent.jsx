import { BsTicketPerforated } from "react-icons/bs";
import { Link } from "react-router-dom";

const Joinevent = () => {
  return (
    <div className="my-24 mx-auto  w-[88%] md:w-[97%]">
      <div className="flex justify-between md:flex-row flex-col gap-5">
        <div className="w-full space-y-5 p-0 md:p-12 md:w-1/2 flex justify-center items-start flex-col">
          <h3 className="text-[#44cfbf] text-[16px] md:text-lg">
            Why EvenEase ?
          </h3>
          <h2 className="text-[#b58753] text-2xl md:text-5xl ">
            Because Your Events Deserve the Best
          </h2>
          <p className="text-[#44cfbf] text-[16px] md:text-base">
            Streamline, engage, and elevate every event with our game-changing
            platform!
          </p>
          <Link to="/events">
            <button className="button-style flex items-center my-5 gap-2">
              Buy ticket <BsTicketPerforated className="text-xl" />
            </button>
          </Link>
        </div>
        <div className="grid w-full md:w-1/2 grid-cols-1 md:grid-cols-2 gap-6">
          <div className=" singleCard h-40 duration-500 group overflow-hidden relative rounded bg-[#0f1c1c] text-neutral-50 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#2a7d73] right-1 -top-12"></div>

            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-xl  font-bold">Seamless Connections</span>
              <p className="text-[#828582]">
                Empower events with smart networking solutions, AI-driven
                matchmaking, and real-time engagement.
              </p>
            </div>
          </div>
          <div className=" singleCard h-40 duration-500 group overflow-hidden relative rounded bg-[#0f1c1c] text-neutral-50 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#2a7d73] right-1 -top-12"></div>

            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-xl  font-bold">Next-Gen Speakers</span>
              <p className="text-[#828582]">
                Revolutionize speaker experiences with interactive sessions,
                data-driven insights, and audience engagement tools.
              </p>
            </div>
          </div>
          <div className=" singleCard h-40 duration-500 group overflow-hidden relative rounded bg-[#0f1c1c] text-neutral-50 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#2a7d73] right-1 -top-12"></div>

            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-xl  font-bold">Smart Bites</span>
              <p className="text-[#828582]">
                Transform event dining with cashless payments and seamless order
                management. Serve convenience, delight attendees!.
              </p>
            </div>
          </div>
          <div className=" singleCard h-40 duration-500 group overflow-hidden relative rounded bg-[#0f1c1c] text-neutral-50 p-4 flex flex-col justify-evenly">
            <div className="absolute blur duration-500 group-hover:blur-none w-36 h-36 rounded-full group-hover:translate-x-12 group-hover:-translate-y-12 bg-[#2a7d73] right-1 -top-12"></div>

            <div className="z-10 flex flex-col justify-evenly w-full h-full">
              <span className="text-xl  font-bold">Experience the Future</span>
              <p className="text-[#828582]">
                Elevate event entertainment with immersive tech, gamification,
                and interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Joinevent;
