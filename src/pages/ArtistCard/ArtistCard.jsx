import { FaFacebookF, FaInstagram } from "react-icons/fa";
import RouteTitle from "../../components/RouteTitle";
import Header from "../Shared/Header/Header";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useArtists from "../../hooks/useArtists";
const ArtistCard = () => {
  const [artist, setArtist] = useState([]);
  const { id } = useParams();
  const [artists] = useArtists();
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
    if (artists.length > 0) {
      const getArtistData = artists.find((artist) => artist._id === id);
      setArtist(getArtistData);
    }
  }, [id, artists]);
  return (
    <div className="bg-[#0a1316]  mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <RouteTitle
        routetitle={"Meet the Artist "}
        routesubtitle={
          "Discover the talent behind the performance"
        }></RouteTitle>
      <div className="flex mx-3 mb-5 relative flex-col justify-between items-center gap-5 md:flex-row ">
        <div className="md:w-[50%] flex justify-center items-center  w-full ">
          <img
            className="h-[20rem] w-full md:h-[36rem] object-cover "
            src={artist.photo}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="absolute overflow-hidden hover:scale-105 transform duration-700 flex flex-wrap md:top-[25%] z-50 bottom-0 left-0 top-[0%] md:left-[40%] text-white md:h-[20rem] border  md:w-[50%] w-full  border-[#b58753]">
          <div className="absolute opacity-55 inset-0  bg-[#44cfbf]"></div>
          <div className="flex  flex-col w-full text-center  z-50 top-[50%] left-[50%] transform  translate-x-[-50%] translate-y-[-50%] absolute  space-y-5">
            <h3 className="text-3xl md:text-2xl font-semibold ">
              {artist.name}
            </h3>
            <h3 className="text-xl md:text-2xl  font-semibold">
              {artist.genre}
            </h3>
            <h3 className="text-xl md:text-2xl  font-semibold">
              email : {artist.email}
            </h3>
            <h3 className="text-xl md:text-2xl  font-semibold">
              {artist.phone}
            </h3>
            <div className="flex justify-center my-6 items-center gap-3">
              <a target="_blank"
                href={artist.facebooklink}
                className="p-3  hover:scale-125 hover:ease-in-out transform hover:duration-1000  rounded-sm border border-white text-959590">
                <FaFacebookF></FaFacebookF>
              </a>
              <a
                href={artist.instagramlink} target="_blank"
                className="p-3  hover:scale-125 hover:ease-out transform hover:duration-1000  rounded-sm border border-white text-959590">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 p-6  mx-auto text-justify w-[80%]">
        <h2
          className="text-[#b58753] font-semibold text-2xl
 mb-8">
          - ARTISTS BIO -
        </h2>
        <p className="text-white">
          Artist Name is a passionate and talented performer known forstand-up
          comedy, music, or dance. With 7 years of experience, they have
          captivated audiences across locations or events. Their unique style
          blends humor, energy, or soulful melodies that leave a lasting impact.
          Recognized for awards, achievements, or collaborations, they continue
          to push creative boundaries. Catch them live at event name and
          experience an unforgettable performance!
        </p>
      </div>
    </div>
  );
};

export default ArtistCard;
