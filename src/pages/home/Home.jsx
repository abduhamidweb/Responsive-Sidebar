import React  from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import "./Home.css";
// import { useRef } from "react";
// import {Context} from "../../context/hamburger/Hamburger";
// import context from "react-bootstrap/esm/AccordionContext";

const Home = () => {

//   const { setNavigate } = React.useContext(Context);

//  const navigation = useRef(); 

//   React.useEffect(() => {
//     setNavigate(context)
//   }, [setNavigate]);

//   console.log(Context , navigation)

  return (
    <div className="d-flex justify-content-between">
      <Sidebar />
      <Outlet />
    </div>
  );
};
export default Home;
