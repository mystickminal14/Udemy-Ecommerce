import React from "react";
import "./single-product.css";
import BlockImage from "./block-imgae";
import { FaPlusSquare, FaMinusSquare, FaCartPlus } from "react-icons/fa";

const SingleProduct = () => {
  return (
    <>
      <div className="view-card">
        <div className="grp">
          <div className="hover-cards">
            <BlockImage />
            <BlockImage />
            <BlockImage />
            <BlockImage />
          </div>
          <div className="single-card">
            <img src="" alt="productImage" />
          </div>
        </div>
        <div className="single-desc">
          <h1>IPhone</h1>
          <p className="desc">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat id
            aliquid aut unde eos possimus in excepturi impedit rerum mollitia.
            Ipsam sunt impedit, dolore quisquam officia tempore expedita illum
            optio.
          </p>
          <h2>$1200</h2>
          <h3>Quanitiy</h3>
          <div className="sin-quan">
            <FaMinusSquare className="cart-i" />
            <span>18</span>
            <FaPlusSquare className="cart-i" />
          </div>
          <button>
            Add to Cart <FaCartPlus />
          </button>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
