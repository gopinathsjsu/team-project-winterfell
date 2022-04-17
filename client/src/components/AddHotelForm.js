const AddHotelForm = ({
                          handleSubmit,
                          // hotelNumber, setHotelNumber,
                          hotelName, setHotelName,
                          hotelDescription, setHotelDescription,
                          hotelLocation, setHotelLocation,
                          hotelAddress, setHotelAddress,
                          hotelImage, setHotelImage,
                          breakfast, setBreakfast,
                          meal, setMeal,
                          gym, setGym,
                          pool, setPool,
                          parking, setParking,
                          hotelCharge, setHotelCharge,
                          weekendCharge, setWeekendCharge,
                          holidayCharge, setHolidayCharge,
                          seasonCharge, setSeasonCharge,
                          extraGuestCharge, setExtraGuestCharge

}) => (
  <form onSubmit={handleSubmit} className="mt-3">
      <table >
          {/*<tr>*/}
          {/*    <div className="form-group mb-3">*/}
          {/*        <td style={{width: '250px'}}>*/}
          {/*            <label className="form-label">Hotel Number</label>*/}
          {/*        </td>*/}
          {/*        <td style={{width: `400px`}}>*/}
          {/*            <input*/}
          {/*                type="text"*/}
          {/*                className="form-control"*/}
          {/*                placeholder="Enter Hotel Number For Reference"*/}
          {/*                value={hotelNumber}*/}
          {/*                onChange={(e) => setHotelNumber(e.target.value)}*/}
          {/*            />*/}
          {/*        </td>*/}
          {/*    </div>*/}
          {/*</tr>*/}
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Name</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Name"
                          value={hotelName}
                          onChange={(e) => setHotelName(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Description</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Description"
                          value={hotelDescription}
                          onChange={(e) => setHotelDescription(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Location</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Locationn"
                          value={hotelLocation}
                          onChange={(e) => setHotelLocation(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Address</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Address"
                          value={hotelAddress}
                          onChange={(e) => setHotelAddress(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Image Link</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Image"
                          value={hotelImage}
                          onChange={(e) => setHotelImage(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Breakfast Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Breakfast Charge"
                          value={breakfast}
                          onChange={(e) => setBreakfast(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Meal Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Meal Charge"
                          value={meal}
                          onChange={(e) => setMeal(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Gym Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Gym Charge"
                          value={gym}
                          onChange={(e) => setGym(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Pool Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Pool Charge"
                          value={pool}
                          onChange={(e) => setPool(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Parking Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Parking Charge"
                          value={parking}
                          onChange={(e) => setParking(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Hotel Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Hotel Charge"
                          value={hotelCharge}
                          onChange={(e) => setHotelCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Weekend Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Weekend Charge"
                          value={weekendCharge}
                          onChange={(e) => setWeekendCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Holiday Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Holiday Charge"
                          value={holidayCharge}
                          onChange={(e) => setHolidayCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Season Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Season Charge"
                          value={seasonCharge}
                          onChange={(e) => setSeasonCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>
          <tr>
              <div className="form-group mb-3">
                  <td style={{width: '250px'}}>
                      <label className="form-label">Extra Guest Charge</label>
                  </td>
                  <td style={{width: `400px`}}>
                      <input
                          type="text"
                          className="form-control"
                          placeholder="Enter Extra Guest Charge"
                          value={extraGuestCharge}
                          onChange={(e) => setExtraGuestCharge(e.target.value)}
                      />
                  </td>
              </div>
          </tr>


      </table>

      <button disabled={!hotelName || !hotelLocation || !hotelCharge || !weekendCharge || !holidayCharge || !seasonCharge || !extraGuestCharge} className="btn btn-primary">
          Add Hotel
      </button>
  </form>
);

export default AddHotelForm;
