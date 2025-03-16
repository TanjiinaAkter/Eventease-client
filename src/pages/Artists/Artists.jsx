import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import Routetitle from "../../components/RouteTitle";
import useArtists from "../../hooks/useArtists";
import { Link } from "react-router-dom";
const Artists = () => {
  const [artists] = useArtists();
  console.log('artists', artists);
  return (
    <div className="bg-[#0a1316]  mx-auto sm:w-[88%] md:w-full ">
      <Header></Header>
      <Helmet>
        <title>EventEase | Artists</title>
      </Helmet>
      <Routetitle
        routetitle={"Unveil Extraordinary Talent"}
        routesubtitle={
          "Step into a realm of exceptional artists and performers."
        }></Routetitle>
      <div className="artists  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto w-[100%] md:w-[97%]">
        {artists.map((artist) => (
          <div
            key={artist._id}
            className="card w-full h-[30rem] relative text-white  shadow-sm">
            <div className="card-body p-0">
              <div className="w-[80%] mx-auto ">
                <img
                  className="h-[20rem] w-full border-2 border-[#51ebb8] object-cover"
                  src={artist.photo}
                  alt=""
                />
              </div>

              <div className="flex space-y-4 absolute opacity-80 p-3 bg-black w-[60%] left-[50%] top-[80%] transform -translate-x-[50%] -translate-y-[80%] flex-col justify-center items-center">
                <h2 className="text-xl font-semibold  text-[#b58753] capitalize">
                  {artist.name}
                </h2>
                <span className="text-lg ">{artist.genre}</span>
                <div className="flex flex-wrap  md:justify-between text-[1rem] md:items-center gap-3 font-semibold">
                  <span className="border-r-4 p-1  h-[2rem] border-r-[#44cfbf]">
                    {artist.phone}
                  </span>
                  <span className="p-1">{artist.email}</span>
                </div>
                <Link to={`/artistdetail/${artist._id}`}>
                  <div className="mt-6 flex justify-center">
                    <button className="button-style">View Details</button>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Artists;
