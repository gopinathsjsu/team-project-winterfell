import { Link } from "react-router-dom";

const BookingNav = () => {
  const active = window.location.pathname;
  //   console.log(active);


  return (
    <ul className="nav nav-tabs">
      {/*<li className="nav-item">*/}
      {/*  <Link*/}
      {/*    className={`nav-link ${active === "/room/add" && "active"}`}*/}
      {/*    to="/room/add"*/}
      {/*  >*/}
      {/*    Add Room*/}
      {/*  </Link>*/}
      {/*</li>*/}

        {/*{auth !== null && auth.result.adminType === `admin` && (*/}
        {/*    <Link className="nav-link" to="/hotelNav">*/}
        {/*        Hotels*/}
        {/*    </Link>*/}
        {/*)}*/}

        {JSON.parse(localStorage.getItem('auth')).result.adminType === `admin` && (
            <li className="nav-item">
                <Link
                    className={`nav-link ${active === "/booking/all" && "active"}`}
                    to="/booking/all"
                >
                    All Bookings
                </Link>
            </li>
        )}

        {JSON.parse(localStorage.getItem('auth')).result.adminType === `user` && (
            <li className="nav-item">
                <Link
                    className={`nav-link ${active === "/booking/my" && "active"}`}
                    to="/booking/my"
                >
                    My Bookings
                </Link>
            </li>
        )}

        {JSON.parse(localStorage.getItem('auth')).result.adminType === `user` && (
              <li className="nav-item">
                <Link
                  className={`nav-link ${active === "/booking/modify" && "active"}`}
                  to="/booking/modify"
                >
                  Modify Booking
                </Link>
              </li>
        )}

        {JSON.parse(localStorage.getItem('auth')).result.adminType === `user` && (
            <li className="nav-item">
                <Link
                    className={`nav-link ${active === "/booking/delete" && "active"}`}
                    to="/booking/delete"
                >
                    Delete Booking
                </Link>
            </li>
        )}
    </ul>
  );
};

export default BookingNav;
