import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const TopNav = () => {
  const dispatch = useDispatch();
  const { auth } = useSelector((state) => ({ ...state }));
  const history = useHistory();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
      payload: null,
    });
    window.localStorage.removeItem("auth");
    history.push("/login");
  };

  return (
    <div className="nav bg-light d-flex justify-content-between">

      {auth !== null  && (
          <Link className="nav-link" to="/profileNav">
            Profile
          </Link>
      )}

      {auth !== null && auth.result.adminType === `admin` && (
        <Link className="nav-link" to="/hotelNav">
          Hotels
        </Link>
      )}

      {auth !== null && auth.result.adminType === `admin` && (
          <Link className="nav-link" to="/roomNav">
            Rooms
          </Link>
      )}

      {auth !== null &&  (
          <Link className="nav-link" to="/bookingNav">
            Bookings
          </Link>
      )}

      {auth !== null && auth.result.adminType === `user` && (
          <Link className="nav-link" to="/userDashboard">
            Dashboard
          </Link>
      )}  

      {auth !== null && auth.result.adminType === `user` && (
          <Link className="nav-link" to="/listHotels">
            Search Hotels
          </Link>
      )} 

      {/*{auth !== null && auth.result.adminType === `user` && (*/}
      {/*    <Link className="nav-link" to="/booking">*/}
      {/*      Bookings*/}
      {/*    </Link>*/}
      {/*)}   */}

      {auth !== null && (
        <a className="nav-link pointer" onClick={logout}>
          Logout
        </a>
      )}

      {auth === null && (
        <>
          <Link className="nav-link" to="/login">
            Login
          </Link>
          <Link className="nav-link" to="/register">
            Register
          </Link>
        </>
      )}
    </div>
  );
};

export default TopNav;
