import { FaArrowCircleRight, FaFacebookF, FaInstagram } from "react-icons/fa";
import Sectiontitle from "../../../components/Sectiontitle";
import useArtists from "../../../hooks/useArtists";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Eventartists = () => {
  const [artists] = useArtists();
  const [showCard, setShowCard] = useState(4);
  useEffect(() => {
    setShowCard(4);
  }, [artists]);
  return (
    <div className="bg-[#0a1316] md:mx-6 mx-auto w-[88%] md:w-[97%]">
      <Sectiontitle
        title={"Our Artists"}
        subtitle={"Know event artists"}></Sectiontitle>
      <div className=" grid grid-cols-1 md:grid-cols-4 mx-auto  gap-4 ">
        {artists.slice(0, showCard).map((artist) => (
          <div
            key={artist._id}
            className="artist-card bg-[#0f1c1c] border border-dotted border-[#4c4f4e]  mb-4 p-4 mx-auto w-full red ">
            <div className="flex justify-center items-center my-7 w-full">
              <img
                className="w-[10rem] h-[10rem]  rounded-full border-4 border-[#242524] object-cover  text-red-600"
                src={artist.photo}
                alt=""
              />
            </div>
            <div className="text-[#44cfbf]">
              <h3 className="text-[#44cfbf] mt-8 text-center text-2xl">
                {artist.name}
              </h3>
              <p className="tip text-[#6a6d6a] text-center mb-2">
                {artist.genre}
              </p>
              <div className="flex justify-center my-6 items-center gap-3">
                <a href={artist.facebooklink} target="_blank">
                  <div className="p-3  hover:scale-125 hover:ease-in-out hover:transition-transform hover:duration-1000  rounded-sm border border-[#6a6d6a] text-959590">
                    <FaFacebookF></FaFacebookF>
                  </div>
                </a>
                <a href={artist.instagramlink} target="_blank">
                  <div className="p-3  hover:scale-125 hover:ease-out hover:transition-transform hover:duration-1000  rounded-sm border border-[#6a6d6a] text-959590">
                    <FaInstagram />
                  </div>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="card-actions justify-center my-12">
        <Link to="/artists">
          <button className="flex button-style flex-row  items-center gap-2 ">
            View All Artists
            <FaArrowCircleRight className="text-2xl"></FaArrowCircleRight>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Eventartists;
