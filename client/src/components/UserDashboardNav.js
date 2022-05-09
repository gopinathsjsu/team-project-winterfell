import { Link } from "react-router-dom";

const UserDashboardNav = () => {
  const active = window.location.pathname;
    console.log(active);
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/listHotels" && "active"}`}
          to="/listHotels"
        >
          List All Hotels
        </Link>
      </li>
        <li className="nav-item">
            <Link
                className={`nav-link ${active === "/listHotelByLocation" && "active"}`}
                to="/listHotelByLocation"
            >
              Search Hotels By Location
            </Link>
        </li>
     
    </ul>
  );
};

export default UserDashboardNav;