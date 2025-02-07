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
import CartPage from "../pages/CartPage/CartPage";
import CheckoutPage from "../pages/CheckoutPage/CheckoutPage";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import UserDashboard from "../pages/Dahboard/UserDashboard/UserDashboard";
import UserOrders from "../pages/Dahboard/UserOrders/UserOrders";
import UserProfile from "../pages/Dahboard/UserProfile/UserProfile";
import UserProfileEdit from "../pages/Dahboard/UserProfileEdit/UserProfileEdit";
import UserEventDetail from "../pages/Dahboard/UserEventDetail/UserEventDetail";
import AdminProfile from "../pages/Dahboard/AdminProfile/AdminProfile";
import AdminProfileEdit from "../pages/Dahboard/AdminProfileEdit/AdminProfileEdit";
import AdminDashboard from "../pages/Dahboard/AdminDashboard/AdminDashboard";
import AddArtists from "../pages/Dahboard/AddArtists/AddArtists";
import EditArtists from "../pages/Dahboard/EditArtists/EditArtists";
import ArtistsList from "../pages/Dahboard/ArtistsList/ArtistsList";
import VenueList from "../pages/Dahboard/VenueList/VenueList";
import AddVenue from "../pages/Dahboard/AddVenue/AddVenue";
import EditVenue from "../pages/Dahboard/EditVenue/EditVenue";
import AddCategory from "../pages/Dahboard/AddCategory/AddCategory";
import EditCategory from "../pages/Dahboard/EditCategory/EditCategory";
import CategoryList from "../pages/Dahboard/CategoryList/CategoryList";
import EventList from "../pages/Dahboard/EventList/EventList";
import AddEvent from "../pages/Dahboard/AddEvent/AddEvent";
import EditEvent from "../pages/Dahboard/EditEvent/EditEvent";
import VendorList from "../pages/Dahboard/VendorList/VendorList";

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
      {
        path: "/cart",
        element: <CartPage></CartPage>,
      },
      {
        path: "/checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },

      // =================== ADMIN DASHBOARD ========================//
      {
        path: "/adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "/adminprofileedit",
        element: <AdminProfileEdit></AdminProfileEdit>,
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "/artistslist",
        element: <ArtistsList></ArtistsList>,
      },
      {
        path: "/addartists",
        element: <AddArtists></AddArtists>,
      },
      {
        path: "/editartists",
        element: <EditArtists></EditArtists>,
      },
      {
        path: "/venueslist",
        element: <VenueList></VenueList>,
      },
      {
        path: "/addvenue",
        element: <AddVenue></AddVenue>,
      },
      {
        path: "/editvenue",
        element: <EditVenue></EditVenue>,
      },
      {
        path: "/addcategory",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "/editcategory",
        element: <EditCategory></EditCategory>,
      },
      {
        path: "/categorylist",
        element: <CategoryList></CategoryList>,
      },
      {
        path: "/eventlist",
        element: <EventList></EventList>,
      },
      {
        path: "/addevent",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "/editevent",
        element: <EditEvent></EditEvent>,
      },
      {
        path: "/vendorlist",
        element: <VendorList></VendorList>,
      },

      // ===================== USER DASHBOARD ======================//
      {
        path: "/userdashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "/userorders",
        element: <UserOrders></UserOrders>,
      },
      {
        path: "/userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "/userprofileedit",
        element: <UserProfileEdit></UserProfileEdit>,
      },
      {
        path: "/usereventdetail",
        element: <UserEventDetail></UserEventDetail>,
      },
    ],
  },
]);

export default router;
