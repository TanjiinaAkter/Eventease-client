import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Artists from "../pages/Artists/Artists";
import Singleenventcard from "../pages/Singleenventcard/Singleenventcard";
import ArtistCard from "../pages/ArtistCard/ArtistCard";
import Categories from "../pages/Categories/Categories";
import Venues from "../pages/Venues/Venues";
import Contact from "../pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/events",
        element: <Events></Events>,
      },
      {
        path: "/artists",
        element: <Artists></Artists>,
      },
      {
        path: "/eventdetail",
        element: <Singleenventcard></Singleenventcard>,
      },
      {
        path: "/artistdetail",
        element: <ArtistCard></ArtistCard>,
      },
      {
        path: "/categories",
        element: <Categories></Categories>,
      },
      {
        path: "/venues",
        element: <Venues></Venues>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
]);

export default router;
