import { Helmet } from "react-helmet-async";
import Header from "../Shared/Header/Header";

const Artists = () => {
  return (
    <div>
      <Header></Header>
      <Helmet>
        <title>EventEase | Artists</title>
      </Helmet>
    </div>
  );
};

export default Artists;
