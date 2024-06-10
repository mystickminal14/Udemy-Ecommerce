import React, { useState } from "react";
import { GrHomeRounded } from "react-icons/gr";
import { AiFillProduct } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaUserAlt } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import "./navbar.css";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleToggle = (display) => {
    if (display === "open") {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <h1>
            <b>Ecommerce</b>
          </h1>
          <div>
            {" "}
            <input type="text" placeholder="Search Project" />
            <button>
              {" "}
              <FaSearch />
            </button>
          </div>
        </div>
        <GiHamburgerMenu className="ibg" onClick={() => handleToggle("open")} />
        <div className={show === true ? "falsy" : "links"}>
          <ImCross className="i-cross" onClick={() => handleToggle("close")} />
          <ul>
            <li>
              <NavLink to="/home">
                {" "}
                <span>Home</span> <GrHomeRounded />
              </NavLink>
            </li>
            <li>
              <NavLink to="/product">
                {" "}
                <span>Products</span> <AiFillProduct />
              </NavLink>
            </li>
            <li className="counter">
              <NavLink to="/cart">
                {" "}
                <FaShoppingCart /> <span className="count"> 0 </span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/order">
                {" "}
                <span>Orders</span>
                <GiShoppingBag />
              </NavLink>
            </li>
            <li className="dropdown">
              <span>User</span>
              <FaUserAlt />
              <div className="drop-enable">
                <span>Sign-in</span>
                <span>Sign-up</span>
                <span>logout</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
