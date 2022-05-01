const RegisterForm = ({
  handleSubmit,
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword, mobileNumber, setMobileNumber, type, setType
}) => (
  <form onSubmit={handleSubmit} className="mt-3">
    <div className="form-group mb-3">
      <label className="form-label">Your name</label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Email address</label>
      <input
        type="email"
        className="form-control"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
    </div>

    <div className="form-group mb-3">
      <label className="form-label">Password</label>
      <input
        type="password"
        className="form-control"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>

      <div className="form-group mb-3">
          <label className="form-label">Mobile Number</label>
          <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
          />
      </div>

      <div className="form-group mb-3">
          <label className="form-label">User Type</label>
          <input
              type="text"
              className="form-control"
              placeholder="Enter User Type"
              value={type}
              onChange={(e) => setType(e.target.value)}
          />
      </div>

    <button disabled={!name || !email || !password} className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default RegisterForm;
