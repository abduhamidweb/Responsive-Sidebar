import React from "react";
import { useNavigate } from "react-router-dom";
import Selectors from "../select/Select";

const MainTop = (props) => {
  // const navigate = useNavigate();
  // // const toggle = useRef();
  // let main = useRef();

  // const onToggle = () => {
  //   navigation.current.classList.toggle("active");
  //   main.current.classList.toggle("active");
  // }
  const navigate = useNavigate()

  return (
    <div className="mainn pt-3 pb-3 px-2">
      <div className="topbar d-flex justify-content-between align-items-center">
        <p className="fw-bold fs-3 m-0">{props.panelName}</p>
        <div className="d-flex align-items-center">
          <p className="fw-bold fs-6 m-0 mx-3">{props.panelRole}</p>
          <Selectors />
          <button
            className="btn btn-primary ms-3"
            onClick={() => navigate("/")}
          >
            <i className="bi bi-box-arrow-left"></i> Chiqish
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainTop;
