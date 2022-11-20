import React from "react";
import { ToastContainer } from 'react-toastify'
import user from "../../assets/user.svg";
import userPassword from "../../assets/lock.svg";
import "./Login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate('/home')
  }

  return (
    <div className="col-md-6 col-lg-6 d-flex flex-column align-items-center justify-content-center check-box mx-auto">
      <h3>Textile Login</h3>

      <form
        className="needs-validation d-flex flex-column align-items-center justify-content-center mt-3"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div className="row g-4 justify-content-center">
          <div className="col-sm-7">
            <div className="input-group input-group-lg">
              <div className="input-group-text">
                <img src={user} alt="first name logo" />
              </div>

              <input
                type="text"
                className="form-control"
                id="userName"
                placeholder="Loginingizni kiriting"
              />
            </div>
          </div>
          <div className="col-sm-7">
            <div className="input-group input-group-lg">
              <div className="input-group-text">
                <img src={userPassword} alt="first name logo" />
              </div>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Parolingizni kiriting"
              />
            </div>
          </div>
        </div>
        <div className="col-sm-7 mt-3">
          <button type="submit" className="btn btn-primary w-100 btn-lg">
            Login
          </button>
        </div>
      </form>
      <ToastContainer/>
    </div>
  );
};
export default Login;
