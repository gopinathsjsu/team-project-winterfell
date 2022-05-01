import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from "../components/UserDashboardNav";

const SearchHotelDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid bg-secondary p-5">
        <UserDashboardNav />
      </div>

    </>
  );
};

export default SearchHotelDashboard;