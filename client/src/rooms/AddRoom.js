import { useState } from "react";
import AddRoomForm from "../components/AddRoomForm";
import axios from "axios";
import { toast } from "react-toastify";
import { addroom } from "../actions/admin";
import ConnectNav from "../components/ConnectNav";
import AdminRoomNav from "../components/AdminRoomNav";
import { Link } from "react-router-dom";

const AddRoom = ({ history }) => {
  const [hotelNumber, setHotelNumber] = useState("");
  // const [roomNumber, setRoomNumber] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [typeCharge, setTypeCharge] = useState("");
  const [roomBasePrice, setRoomBasePrice] = useState("");
  const [currentPrice, setCurrentPrice] = useState("");

  // const hotelNumber = "1";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await addroom({
        hotelNumber, type, image, description, typeCharge, roomBasePrice, currentPrice
      });
      console.log("Add Room ===> ", res);
      toast.success("Room Added Successfully");
      // history.push("/roomNav");
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
          <AdminRoomNav />
        </div>


        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <AddRoomForm
                  handleSubmit={handleSubmit}
                  hotelNumber={hotelNumber}
                  setHotelNumber={setHotelNumber}
                  // roomNumber={roomNumber}
                  // setRoomNumber={setRoomNumber}
                  type={type}
                  setType={setType}
                  image={image}
                  setImage={setImage}
                  description={description}
                  setDescription={setDescription}
                  typeCharge={typeCharge}
                  setTypeCharge={setTypeCharge}

                  roomBasePrice={roomBasePrice}
                  setRoomBasePrice={setRoomBasePrice}
                  currentPrice={currentPrice}
                  setCurrentPrice={setCurrentPrice}

              />
            </div>
          </div>
        </div>
      </>
  );
};

export default AddRoom;
