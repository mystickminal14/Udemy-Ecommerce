import React from "react";
import "./product-card.css";
import Quanitity from "./quanitity";
import { MdDeleteForever } from "react-icons/md";

const ProductCart = () => {
  return (
    <>
      <div className="cart-page">
        <div className="cem">
          <div className="cart-profile">
            <div className="cart-img">
              <img src="" alt="Profile" />
            </div>
            <div className="nams">
              <h1>Harley</h1>
              <h3>harley@gmail.com</h3>
            </div>
          </div>

          <div className="cart-table">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sample Item</td>
                  <td>$10.00</td>
                  <td>
                    {" "}
                   <Quanitity/>
                  </td>
                  <td>$10.00</td>
                  <td>
                    <button className='rem-btn'><MdDeleteForever className='rem-btn-i'/></button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cart-bill">
            <table>
              <tbody>
                <tr>
                  <td>Subtotal</td>
                  <td>$10.00</td>
                  <td>$10.00</td>
                </tr>
                <tr>
                  <td>Shipping Charge</td>
                  <td>$5.00</td>
                  <td>$5.00</td>
                </tr>
                <tr>
                  <td>
                    <b>Total</b>
                  </td>
                  <td></td>
                  <td>
                    <b>$15.00</b>
                  </td>
                </tr>
              </tbody>
            </table>
            <button>Checkout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCart;
