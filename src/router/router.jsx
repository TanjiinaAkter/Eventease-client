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
import AdminRoute from "./AdminRoute";
import VendorRoute from "./VendorRoute";

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
    element: <Dashboard></Dashboard>,
    children: [
      // =================== ADMIN DASHBOARD ========================//
      {
        path: "adminprofile",
        element: (
          <AdminRoute>
            <AdminProfile></AdminProfile>
          </AdminRoute>
        ),
      },
      {
        path: "adminprofileedit",
        element: (
          <AdminRoute>
            <AdminProfileEdit></AdminProfileEdit>
          </AdminRoute>
        ),
      },
      {
        path: "admindashboard",
        element: (
          <AdminRoute>
            <AdminDashboard></AdminDashboard>
          </AdminRoute>
        ),
      },
      {
        path: "artistslist",
        element: (
          <AdminRoute>
            <ArtistsList></ArtistsList>
          </AdminRoute>
        ),
      },
      {
        path: "addartists",
        element: (
          <AdminRoute>
            <AddArtists></AddArtists>
          </AdminRoute>
        ),
      },
      {
        path: "editartists",
        element: (
          <AdminRoute>
            <EditArtists></EditArtists>
          </AdminRoute>
        ),
      },
      {
        path: "venueslist",
        element: (
          <AdminRoute>
            <VenueList></VenueList>
          </AdminRoute>
        ),
      },
      {
        path: "addvenue",
        element: (
          <AdminRoute>
            <AddVenue></AddVenue>
          </AdminRoute>
        ),
      },
      {
        path: "editvenue/:id",
        element: (
          <AdminRoute>
            <EditVenue></EditVenue>
          </AdminRoute>
        ),
      },
      {
        path: "addcategory",
        element: (
          <AdminRoute>
            <AddCategory></AddCategory>
          </AdminRoute>
        ),
      },
      {
        path: "editcategory/:id",
        element: (
          <AdminRoute>
            <EditCategory></EditCategory>
          </AdminRoute>
        ),
      },
      {
        path: "categorylist",
        element: (
          <AdminRoute>
            <CategoryList></CategoryList>
          </AdminRoute>
        ),
      },
      {
        path: "eventlist",
        element: (
          <AdminRoute>
            <EventList></EventList>
          </AdminRoute>
        ),
      },
      {
        path: "addevent",
        element: (
          <AdminRoute>
            <AddEvent></AddEvent>
          </AdminRoute>
        ),
      },
      {
        path: "editevent",
        element: (
          <AdminRoute>
            <EditEvent></EditEvent>
          </AdminRoute>
        ),
      },
      {
        path: "vendorlist",
        element: (
          <AdminRoute>
            <VendorList></VendorList>
          </AdminRoute>
        ),
      },
      {
        path: "addvendor",
        element: (
          <AdminRoute>
            <AddVendor></AddVendor>
          </AdminRoute>
        ),
      },
      {
        path: "userlist",
        element: (
          <AdminRoute>
            <UserList></UserList>
          </AdminRoute>
        ),
      },
      {
        path: "ordermanagement",
        element: (
          <AdminRoute>
            <OrderManagement></OrderManagement>
          </AdminRoute>
        ),
      },

      // ===================== VENDOR DASHBOARD ======================//
      {
        path: "vendordashboard",
        element: (
          <VendorRoute>
            <VendorDashboard></VendorDashboard>
          </VendorRoute>
        ),
      },

      {
        path: "vendorartistslist",
        element: (
          <VendorRoute>
            <VendorArtistList></VendorArtistList>
          </VendorRoute>
        ),
      },
      {
        path: "vendoraddartists",
        element: (
          <VendorRoute>
            <VendorAddArtists></VendorAddArtists>
          </VendorRoute>
        ),
      },
      {
        path: "vendoreditartists",
        element: (
          <VendorRoute>
            <VendorEditArtists></VendorEditArtists>
          </VendorRoute>
        ),
      },
      {
        path: "vendorvenueslist",
        element: (
          <VendorRoute>
            <VendorVenueList></VendorVenueList>
          </VendorRoute>
        ),
      },
      {
        path: "vendoraddvenue",
        element: (
          <VendorRoute>
            <VendorAddVenue></VendorAddVenue>
          </VendorRoute>
        ),
      },
      {
        path: "vendoreditvenue",
        element: (
          <VendorRoute>
            <VendorEditVenue></VendorEditVenue>
          </VendorRoute>
        ),
      },
      {
        path: "vendoreventlist",
        element: (
          <VendorRoute>
            {" "}
            <VendorEventList></VendorEventList>
          </VendorRoute>
        ),
      },
      {
        path: "vendoraddevent",
        element: (
          <VendorRoute>
            <VendorAddEvent></VendorAddEvent>
          </VendorRoute>
        ),
      },
      {
        path: "vendoreditevent",
        element: (
          <VendorRoute>
            <VendorEditEvent></VendorEditEvent>
          </VendorRoute>
        ),
      },
      {
        path: "vendorordermanagement",
        element: (
          <VendorRoute>
            <VendorOrderManagement></VendorOrderManagement>
          </VendorRoute>
        ),
      },
      {
        path: "vendorprofile",
        element: (
          <VendorRoute>
            <VendorProfile></VendorProfile>
          </VendorRoute>
        ),
      },
      // TO DO : EI ROUTE ADD korte hobe
      {
        path: "vendorprofileedit",
        element: (
          <VendorRoute>
            <VendorProfileEdit></VendorProfileEdit>
          </VendorRoute>
        ),
      },
      // ===================== USER DASHBOARD ======================//
      {
        path: "userdashboard",
        element: (
          <PrivateRoute>
            <UserDashboard></UserDashboard>
          </PrivateRoute>
        ),
      },
      {
        path: "userorders",
        element: (
          <PrivateRoute>
            <UserOrders></UserOrders>
          </PrivateRoute>
        ),
      },
      {
        path: "userprofile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "userprofileedit",
        element: (
          <PrivateRoute>
            <UserProfileEdit></UserProfileEdit>
          </PrivateRoute>
        ),
      },
      //TO DO: THIS route is not added
      {
        path: "usereventdetail",
        element: (
          <PrivateRoute>
            <UserEventDetail></UserEventDetail>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
