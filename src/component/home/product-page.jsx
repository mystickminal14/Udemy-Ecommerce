import React from "react";
import Navbar from "../navbar/navbar";
import ProductPage from "../product-page/product-page";

export default function ProductPages() {
  return (
    <>
      <Navbar />
      <div style={{ marginTop: "50px" }}>
        <ProductPage />
      </div>
    </>
  );
}
