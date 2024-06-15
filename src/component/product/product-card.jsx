import React from "react";
import { FcRating } from "react-icons/fc";
import { FaShoppingBag } from "react-icons/fa";
import "./product.css";
export default function ProductCard({
  id,
  image,
  price,
  title,
  rating,
  quantity,
}) {
  return (
    <>
      <div className="p-card">
        <div className="p-img">
          {" "}
          <img
            src={`http://localhost:5000/products/${image}`}
            alt="PRODUCT IMAGE"
          />
        </div>
        <h2 className="p-title">${price}</h2>
        <h2>{title}</h2>
        <div class="p-footer">
          <div>
            <div className="p-rate">
              <FcRating className="p-i" /> <h4>{rating}</h4>
            </div>
            <h4>{quantity}</h4>
          </div>
          <button>
            <FaShoppingBag className="p-cart" />
          </button>
        </div>
      </div>
    </>
  );
}
