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
import AddVendor from "../pages/Dahboard/AddVendor/AddVendor";
import UserList from "../pages/Dahboard/UserList/UserList";
import OrderManagement from "../pages/Dahboard/OrderManagement/OrderManagement";
import VendorDashboard from "../pages/Dahboard/VendorDashboard/VendorDashboard";
import VendorArtistList from "../pages/Dahboard/VendorArtistList/VendorArtistList";
import VendorAddArtists from "../pages/Dahboard/VendorAddArtists/VendorAddArtists";
import VendorEditArtists from "../pages/Dahboard/VendorEditArtists/VendorEditArtists";
import VendorVenueList from "../pages/Dahboard/VendorVenueList/VendorVenueList";
import VendorAddVenue from "../pages/Dahboard/VendorAddVenue/VendorAddVenue";
import VendorEditVenue from "../pages/Dahboard/VendorEditVenue/VendorEditVenue";
import VendorEventList from "../pages/Dahboard/VendorEventList/VendorEventList";
import VendorAddEvent from "../pages/Dahboard/VendorAddEvent/VendorAddEvent";
import VendorEditEvent from "../pages/Dahboard/VendorEditEvent/VendorEditEvent";
import VendorOrderManagement from "../pages/Dahboard/VendorOrderManagement/VendorOrderManagement";
import VendorProfile from "../pages/Dahboard/VendorProfile/VendorProfile";
import VendorProfileEdit from "../pages/Dahboard/VendorProfileEdit/VendorProfileEdit";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../layout/Dashboard";

const router = createBrowserRouter([
  // =================== HOME ROUTES ========================//
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "events",
        element: <Events></Events>,
      },
      {
        path: "artists",
        element: <Artists></Artists>,
      },
      {
        path: "eventdetail",
        element: <Singleenventcard></Singleenventcard>,
      },
      {
        path: "artistdetail",
        element: <ArtistCard></ArtistCard>,
      },
      {
        path: "categories",
        element: <Categories></Categories>,
      },
      {
        path: "venues",
        element: <Venues></Venues>,
      },
      {
        path: "contact",
        element: <Contact></Contact>,
      },
      {
        path: "cart",
        element: (
          <PrivateRoute>
            <CartPage></CartPage>
          </PrivateRoute>
        ),
      },
      {
        path: "checkout",
        element: <CheckoutPage></CheckoutPage>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
      {
        path: "registration",
        element: <Registration></Registration>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // =================== ADMIN DASHBOARD ========================//
      {
        path: "adminprofile",
        element: <AdminProfile></AdminProfile>,
      },
      {
        path: "adminprofileedit",
        element: <AdminProfileEdit></AdminProfileEdit>,
      },
      {
        path: "admindashboard",
        element: <AdminDashboard></AdminDashboard>,
      },
      {
        path: "artistslist",
        element: <ArtistsList></ArtistsList>,
      },
      {
        path: "addartists",
        element: <AddArtists></AddArtists>,
      },
      {
        path: "editartists",
        element: <EditArtists></EditArtists>,
      },
      {
        path: "venueslist",
        element: <VenueList></VenueList>,
      },
      {
        path: "addvenue",
        element: <AddVenue></AddVenue>,
      },
      {
        path: "editvenue",
        element: <EditVenue></EditVenue>,
      },
      {
        path: "addcategory",
        element: <AddCategory></AddCategory>,
      },
      {
        path: "editcategory",
        element: <EditCategory></EditCategory>,
      },
      {
        path: "categorylist",
        element: <CategoryList></CategoryList>,
      },
      {
        path: "eventlist",
        element: <EventList></EventList>,
      },
      {
        path: "addevent",
        element: <AddEvent></AddEvent>,
      },
      {
        path: "editevent",
        element: <EditEvent></EditEvent>,
      },
      {
        path: "vendorlist",
        element: <VendorList></VendorList>,
      },
      {
        path: "addvendor",
        element: <AddVendor></AddVendor>,
      },
      {
        path: "userlist",
        element: <UserList></UserList>,
      },
      {
        path: "ordermanagement",
        element: <OrderManagement></OrderManagement>,
      },

      // ===================== VENDOR DASHBOARD ======================//
      {
        path: "vendordashboard",
        element: <VendorDashboard></VendorDashboard>,
      },

      {
        path: "vendorartistslist",
        element: <VendorArtistList></VendorArtistList>,
      },
      {
        path: "vendoraddartists",
        element: <VendorAddArtists></VendorAddArtists>,
      },
      {
        path: "vendoreditartists",
        element: <VendorEditArtists></VendorEditArtists>,
      },
      {
        path: "vendorvenueslist",
        element: <VendorVenueList></VendorVenueList>,
      },
      {
        path: "vendoraddvenue",
        element: <VendorAddVenue></VendorAddVenue>,
      },
      {
        path: "vendoreditvenue",
        element: <VendorEditVenue></VendorEditVenue>,
      },
      {
        path: "vendoreventlist",
        element: <VendorEventList></VendorEventList>,
      },
      {
        path: "vendoraddevent",
        element: <VendorAddEvent></VendorAddEvent>,
      },
      {
        path: "vendoreditevent",
        element: <VendorEditEvent></VendorEditEvent>,
      },
      {
        path: "vendorordermanagement",
        element: <VendorOrderManagement></VendorOrderManagement>,
      },
      {
        path: "vendorprofile",
        element: <VendorProfile></VendorProfile>,
      },
      // TO DO : EI ROUTE ADD korte hobe
      {
        path: "vendorprofileedit",
        element: <VendorProfileEdit></VendorProfileEdit>,
      },
      // ===================== USER DASHBOARD ======================//
      {
        path: "userdashboard",
        element: <UserDashboard></UserDashboard>,
      },
      {
        path: "userorders",
        element: <UserOrders></UserOrders>,
      },
      {
        path: "userprofile",
        element: <UserProfile></UserProfile>,
      },
      {
        path: "userprofileedit",
        element: <UserProfileEdit></UserProfileEdit>,
      },
      //TO DO: THIS route is not added
      {
        path: "usereventdetail",
        element: <UserEventDetail></UserEventDetail>,
      },
    ],
  },
]);

export default router;
