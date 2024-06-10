import React from "react";
import './product-card.css';

import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';
const Quanitity = () => {
  return (
    <div>
      <div className="sin-quan2">
        <FaMinusSquare className="cart-i" />
        <span>18</span>
        <FaPlusSquare className="cart-i" />
      </div>
    </div>
  );
};

export default Quanitity;
