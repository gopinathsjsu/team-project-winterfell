import { useState } from "react";
import RegisterForm from "../components/AddHotelForm";
import axios from "axios";
import { toast } from "react-toastify";
import { addhotel } from "../actions/admin";
import ConnectNav from "../components/ConnectNav";
import AdminHotelNav from "../components/AdminHotelNav";
import { Link } from "react-router-dom";

const AddHotel = ({ history }) => {
  // const [hotelNumber, setHotelNumber] = useState("");
  const [hotelName, setHotelName] = useState("");
  const [hotelDescription, setHotelDescription] = useState("");
  const [hotelLocation, setHotelLocation] = useState("");
  const [hotelAddress, setHotelAddress] = useState("");
  const [hotelImage, setHotelImage] = useState("");

  const [breakfast, setBreakfast] = useState("");
  const [meal, setMeal] = useState("");
  const [gym, setGym] = useState("");
  const [pool, setPool] = useState("");
  const [parking, setParking] = useState("");

  const [hotelCharge, setHotelCharge] = useState("");
  const [weekendCharge, setWeekendCharge] = useState("");
  const [holidayCharge, setHolidayCharge] = useState("");
  const [seasonCharge, setSeasonCharge] = useState("");
  const [extraGuestCharge, setExtraGuestCharge] = useState("");

  // const hotelNumber = "1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addhotel({
         hotelName, hotelDescription, hotelLocation, hotelAddress, hotelImage, breakfast, meal, gym, pool, parking,
        hotelCharge, weekendCharge, holidayCharge, seasonCharge, extraGuestCharge
      });
      console.log("Add Hotel ===> ", res);
      toast.success("Hotel Added Successfully");
      // history.push("/hotelNav");
    } catch (err) {
      console.log(err);
      if (err.response.status === 400) toast.error(err.response.data);
    }
  };

  return (
      <>
        <div className="container-fluid bg-secondary p-5">
          <ConnectNav />
        </div>


        <div className="container-fluid p-4">
          <AdminHotelNav />
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <RegisterForm
                  handleSubmit={handleSubmit}
                  // hotelNumber={hotelNumber}
                  // setHotelNumber={setHotelNumber}
                  hotelName={hotelName}
                  setHotelName={setHotelName}
                  hotelDescription={hotelDescription}
                  setHotelDescription={setHotelDescription}
                  hotelLocation={hotelLocation}
                  setHotelLocation={setHotelLocation}
                  hotelAddress={hotelAddress}
                  setHotelAddress={setHotelAddress}
                  hotelImage={hotelImage}
                  setHotelImage={setHotelImage}

                  breakfast={breakfast}
                  setBreakfast={setBreakfast}
                  meal={meal}
                  setMeal={setMeal}
                  gym={gym}
                  setGym={setGym}
                  pool={pool}
                  setPool={setPool}
                  parking={parking}
                  setParking={setParking}

                  hotelCharge={hotelCharge}
                  setHotelCharge={setHotelCharge}
                  weekendCharge={weekendCharge}
                  setWeekendCharge={setWeekendCharge}
                  holidayCharge={holidayCharge}
                  setHolidayCharge={setHolidayCharge}
                  seasonCharge={seasonCharge}
                  setSeasonCharge={setSeasonCharge}
                  extraGuestCharge={extraGuestCharge}
                  setExtraGuestCharge={setExtraGuestCharge}
              />
            </div>
          </div>
        </div>
      </>
  );
};

export default AddHotel;
