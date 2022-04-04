import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "./components/TopNav";
import PrivateRoute from "./components/PrivateRoute";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import AdminDashboard from "./user/adminDashboard";
import UserDashboard from "./user/UserDashboard";
import ModifyHotel from "./hotels/ModifyHotel";
import AddHotel from "./hotels/AddHotel";
import DeleteHotel from "./hotels/DeleteHotel";
import AllHotels from "./hotels/AllHotels";
import HotelManagement from "./user/hotelManagement";
import RoomManagement from "./user/roomManagement";
import BookingManagement from "./user/bookingManagement";
import Profile from "./components/Profile";
import Billing from "./components/Billing";
import Booking from "./components/Booking";
import ListHotels from "./components/ListHotels";
import ListHotelByLocation from "./components/ListHotelByLocation";
import SearchHotelDashboard from "./components/SearchHotelDashboard";
import AddRoom from "./rooms/AddRoom";
import AllRooms from "./rooms/AllRooms";
import ModifyRoom from "./rooms/ModifyRoom";
import DeleteRoom from "./rooms/DeleteRoom";
import MyProfile from "./user/MyProfile";
import AllBookings from "./booking/AllBookings";
import MyBookings from "./booking/MyBookings";
import ModifyBooking from "./booking/ModifyBooking";
import DeleteBooking from "./booking/DeleteBooking";
import ProfileManagement from "./user/profileManagement";
import ViewRoomsByHotel from "./components/ViewRoomsByHotel";
import SelectBookingDates from "./components/SelectBookingDates";
import FinalReview from "./components/FinalReview";
import Confirmation from "./components/Confirmation";
import Payment from "./components/Payment";

function App() {
  return (
    <BrowserRouter>
      <TopNav />
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <PrivateRoute exact path="/adminDashboard" component={AdminDashboard} />
        <PrivateRoute exact path="/userDashboard" component={UserDashboard} />
        {/*<PrivateRoute exact path="/dashboard/seller" component={DashboardSeller}/>*/}
        <PrivateRoute exact path="/profile" component={Profile} />
        <PrivateRoute exact path="/billing" component={Billing} />
        <PrivateRoute exact path="/booking" component={Booking} />
        <PrivateRoute exact path="/listHotels" component={ListHotels} />
        <PrivateRoute exact path="/listHotelByLocation" component={ListHotelByLocation} />
        <PrivateRoute exact path="/hotel/modify" component={ModifyHotel}/>
        <PrivateRoute exact path="/hotel/add" component={AddHotel} />
        <PrivateRoute exact path="/hotel/delete" component={DeleteHotel}/>
        <PrivateRoute exact path="/hotel/all" component={AllHotels} />
        <PrivateRoute exact path="/hotelNav" component={HotelManagement} />
        <PrivateRoute exact path="/roomNav" component={RoomManagement} />
        <PrivateRoute exact path="/room/add" component={AddRoom} />
        <PrivateRoute exact path="/room/all" component={AllRooms} />
        <PrivateRoute exact path="/room/modify" component={ModifyRoom}/>
        <PrivateRoute exact path="/room/delete" component={DeleteRoom}/>
        <PrivateRoute exact path="/profileNav" component={ProfileManagement} />
        <PrivateRoute exact path="/user/profile" component={MyProfile}/>
        <PrivateRoute exact path="/booking/all" component={AllBookings} />
        <PrivateRoute exact path="/booking/my" component={MyBookings} />
        <PrivateRoute exact path="/booking/modify" component={ModifyBooking} />
        <PrivateRoute exact path="/booking/delete" component={DeleteBooking}/>
        <PrivateRoute exact path="/bookingNav" component={BookingManagement} />
        <PrivateRoute exact path="/searchHotelDashboard" component={SearchHotelDashboard} />
        <PrivateRoute exact path="/viewroomsbyhotel" component={ViewRoomsByHotel} />
        <PrivateRoute exact path="/selectbookingdates" component={SelectBookingDates} />
        <PrivateRoute exact path="/finalreview" component={FinalReview} />
        <PrivateRoute exact path="/confirmation" component={Confirmation} />
        <PrivateRoute exact path="/payment" component={Payment} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;