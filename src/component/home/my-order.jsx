import React from "react";
import Navbar from "../navbar/navbar";
import MyOrder from "../my-order/my-order";

export default function Order() {
  return (
    <s>
      <Navbar />
      <div style={{ marginTop: '150px' }}>
        <MyOrder />
      </div>
    </s>
  );
}
