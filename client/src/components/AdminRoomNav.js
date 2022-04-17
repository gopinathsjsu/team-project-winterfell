import { Link } from "react-router-dom";

const AdminRoomNav = () => {
  const active = window.location.pathname;
  //   console.log(active);


  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/room/add" && "active"}`}
          to="/room/add"
        >
          Add Room
        </Link>
      </li>
        <li className="nav-item">
            <Link
                className={`nav-link ${active === "/room/all" && "active"}`}
                to="/room/all"
            >
                All Rooms
            </Link>
        </li>
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/room/modify" && "active"}`}
          to="/room/modify"
        >
          Modify Room
        </Link>
      </li>
        <li className="nav-item">
            <Link
                className={`nav-link ${active === "/room/delete" && "active"}`}
                to="/room/delete"
            >
                Delete Room
            </Link>
        </li>
    </ul>
  );
};

export default AdminRoomNav;
