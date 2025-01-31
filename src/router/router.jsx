import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import Artists from "../pages/Artists/Artists";

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
        element:<Artists></Artists>,
      },
    ],
  },
]);

export default router;
