import React, { forwardRef } from "react";
import { NavLink } from "react-router-dom";
import "./NavItems.css";

const NavItems = forwardRef((props, navItem) => {

    return (
      <li ref={navItem} className='sidebar--item'>
        <NavLink
          to={props.link}
          className={({ isActive }) => /// isActive
            isActive ? "activeLink text-primary" : ""
          }
        >
          <span className={props.spanClass}  width='28px' height='28px' style={{display: 'block'}}>
            <i className={props.iconName} ></i>
          </span>
          <span className={props.spanClassName}>{props.itemName}</span>
        </NavLink>
      </li>
    );
  }
);

export default NavItems;
