const AddRoomForm = ({
                          handleSubmit,
                          hotelNumber, setHotelNumber,
                          // roomNumber, setRoomNumber,
                          type, setType,
                          image, setImage,
                          description, setDescription,
                          typeCharge, setTypeCharge,
                          roomBasePrice, setRoomBasePrice,
                          currentPrice, setCurrentPrice

}) => (
  <form onSubmit={handleSubmit} className="mt-3">
      <table >
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Number</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Number For Reference"
                          value={hotelNumber}
                          onChange={(e) => setHotelNumber(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          {/*<tr>*/}
          {/*    <div className="form-group mb-3">*/}
          {/*        <td style={{width: '250px'}}>*/}
          {/*            <label className="form-label">Room Number</label>*/}
          {/*        </td>*/}
          {/*        <td style={{width: `400px`}}>*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Enter Room Number"*/}
          {/*                value={roomNumber}*/}
          {/*                onChange={(e) => setRoomNumber(e.target.value)}*/}
          {/*            />*/}
          {/*        </td>*/}
          {/*    </div>*/}
          {/*</tr>*/}
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room type</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Type"
                          value={type}
                          onChange={(e) => setType(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room Image</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Image Link"
                          value={image}
                          onChange={(e) => setImage(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room Description</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Description"
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room Type Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Type Charge"
                          value={typeCharge}
                          onChange={(e) => setTypeCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room Base Price</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Base Price"
                          value={roomBasePrice}
                          onChange={(e) => setRoomBasePrice(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Room Current Price</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Room Current Price"
                          value={currentPrice}
                          onChange={(e) => setCurrentPrice(e.target.value)}
                      />
                  </td>
              </div>
          </tr>

      </table>

      <button disabled={!hotelNumber ||  !type || !typeCharge || !roomBasePrice } className="btn btn-primary">
          Add Room
      </button>
  </form>
);

export default AddRoomForm;
