import AdminHotelNav from "../components/AdminHotelNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <ProfileNav />
      </div>


    </>
  );
};

export default AdminDashboard;
