import React, { forwardRef, useRef } from "react";
import { NavLink } from "react-router-dom";
import NavItems from "../navbar/NavItems";

import "./Sidebar.css";

const Sidebar = forwardRef((props, navigation) => {
  const openMenuBtn = useRef();

  // let navItem = useRef();
  // navigation.current.classList.add("openMenu")
  console.log(openMenuBtn);
  return (
    <>
      <div className="min-hight">
        <div className="cloeMenuHamburg">
          <i class="bi bi-list" onClick={()=> openMenuBtn.current.classList.toggle("hamburgMenu")}></i>
        </div>
        <div className="navigation" ref={openMenuBtn}>
          <ul className="sidebar-list">
            <li className="sidebar-logo">
              <NavLink to={"/home"} className="nav-logo">
                <span className="textileLogo">
                  <i className="fa-solid fa-warehouse"></i>
                  Textile
                </span>
              </NavLink>
              <div className="openmenu">
                <i
                  class="bi bi-list"
                  onClick={() =>
                    openMenuBtn.current.classList.toggle("hamburgMenu")
                  }
                ></i>
              </div>
            </li>
            <NavItems
              spanClass="icon"
              iconName="fa-solid fa-shirt"
              spanClassName="title"
              itemName="Bichim bo'limi"
              link="/home/size"
            />
            <NavItems
              spanClass="icon"
              iconName="fa-solid fa-vest"
              spanClassName="title"
              itemName="Tikish bo'limi"
              link="/home/sewing"
            />
            <NavItems
              spanClass="icon"
              iconName="fa-solid fa-vest-patches"
              spanClassName="title"
              itemName="To'quv bo'limi"
              link="/home/crochet"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-inbox"
              spanClassName="title"
              itemName="Qadoqlash bo'limi"
              link="/home/packaging"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-coin"
              spanClassName="title"
              itemName="Oyliklar"
              link="/home/salaries"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-currency-dollar"
              spanClassName="title"
              itemName="Kunlik chiqim"
              link="/home/dailyoutput"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-wallet"
              spanClassName="title"
              itemName="Tashqi xarajatlar"
              link="/home/outgoings"
            />
            <NavItems
              spanClass="icon"
              iconName="bi bi-gear"
              spanClassName="title"
              itemName="Settings"
              link="/home/settings"
            />
          </ul>
        </div>
      </div>
    </>
  );
});

export default Sidebar;
