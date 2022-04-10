import ConnectNav from "../components/ConnectNav";
import UserDashboardNav from "../components/UserDashboardNav";

const UserDashboard = () => {
  return (
    <>
      <div className="container-fluid bg-secondary p-5">
        <ConnectNav />
      </div>

      <div className="container-fluid p-4">
        <UserDashboardNav />
      </div>
    </>
  );
};

export default UserDashboard;