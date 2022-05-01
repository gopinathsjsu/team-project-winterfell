import { Link } from "react-router-dom";

const ProfileNav = () => {
  const active = window.location.pathname;
  //   console.log(active);


  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <Link
          className={`nav-link ${active === "/user/profile" && "active"}`}
          to="/user/profile"
        >
          My Profile
        </Link>
      </li>
      {/*  <li className="nav-item">*/}
      {/*      <Link*/}
      {/*          className={`nav-link ${active === "/hotel/all" && "active"}`}*/}
      {/*          to="/hotel/all"*/}
      {/*      >*/}
      {/*          All Hotels*/}
      {/*      </Link>*/}
      {/*  </li>*/}
      {/*<li className="nav-item">*/}
      {/*  <Link*/}
      {/*    className={`nav-link ${active === "/hotel/modify" && "active"}`}*/}
      {/*    to="/hotel/modify"*/}
      {/*  >*/}
      {/*    Modify Hotel*/}
      {/*  </Link>*/}
      {/*</li>*/}
      {/*  <li className="nav-item">*/}
      {/*      <Link*/}
      {/*          className={`nav-link ${active === "/hotel/delete" && "active"}`}*/}
      {/*          to="/hotel/delete"*/}
      {/*      >*/}
      {/*          Delete Hotel*/}
      {/*      </Link>*/}
      {/*  </li>*/}
    </ul>
  );
};

export default ProfileNav;
