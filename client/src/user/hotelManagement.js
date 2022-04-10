import AdminHotelNav from "../components/AdminHotelNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <AdminHotelNav />
      </div>

      {/*<div className="container-fluid">*/}
      {/*  <div className="row">*/}
      {/*    <div className="col-md-10">*/}
      {/*      <h2>Your Bookings</h2>*/}
      {/*    </div>*/}
      {/*    <div className="col-md-2">*/}
      {/*      <Link to="/" className="btn btn-primary">*/}
      {/*        Browse Hotels*/}
      {/*      </Link>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}
    </>
  );
};

export default AdminDashboard;
