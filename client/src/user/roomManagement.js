import AdminHotelNav from "../components/AdminHotelNav";
import ConnectNav from "../components/ConnectNav";
import { Link } from "react-router-dom";
import AdminRoomNav from "../components/AdminRoomNav";

const AdminDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <AdminRoomNav />
      </div>


    </>
  );
};

export default AdminDashboard;
