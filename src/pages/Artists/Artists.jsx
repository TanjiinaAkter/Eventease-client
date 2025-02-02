import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";
import Routetitle from "../../components/RouteTitle";
const Artists = () => {
  return (
    <div className="bg-[#0f1c1c]">
      <Header></Header>
      <Helmet>
        <title>EventEase | Artists</title>
      </Helmet>
      <Routetitle
        routetitle={"Unveil Extraordinary Talent"}
        routesubtitle={
          "Step into a realm of exceptional artists and performers."
        }></Routetitle>
      <div className="artists grid grid-cols-3 gap-4">
        <div className="card bg-base-100 shadow-sm">
          <div className="card-body">
            <div>
              <img src="" alt="" />
            </div>
            <span className="badge badge-xs badge-warning">Most Popular</span>
            <div className="flex justify-between">
              <h2 className="text-3xl font-bold">Premium</h2>
              <span className="text-xl">$29/mo</span>
            </div>

            <div className="mt-6">
              <button className="btn btn-primary btn-block">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Artists;
