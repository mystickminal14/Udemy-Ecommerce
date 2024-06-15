import React, { useEffect, useState } from "react";
import "./product-page.css";
import LinkButton from "./link-button";
import { SiYoutubegaming } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoWatch } from "react-icons/io5";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import ProductCard from "../product/product-card";
import axiosClient from "../../utils/api-client";

export default function ProductPage() {
  const [show, setShow] = useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const productData = () => {
    axiosClient
      .get("/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((error) => setError(error.message));

    axiosClient
      .get("/category")
      .then((res) => {
        setCategories(res.data);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    productData();
  }, []);
console.log(categories)
  

  const getCategoryIcon = (name) => {
    switch (name) {
      case "Gaming Consoles":
        return <SiYoutubegaming />;
      case "Headphones":
        return <FaHeadphones />;
      case "Laptops":
        return <FaLaptop />;
      case "SmartPhones":
        return <MdOutlineSmartphone />;
      case "Smartwatches":
        return <IoWatch />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className="pro-page">
        {!show && (
          <BsLayoutSidebarInsetReverse
            onClick={() => setShow(true)}
            className="pro-side"
          />
        )}
        <div className={`off-canvas ${show ? "showCanvas" : ""}`}>
          <div className="pro-title">
            <h1>Categories</h1>
            <BsLayoutSidebarInsetReverse
              className="reverse"
              onClick={() => setShow(false)}
            />
          </div>
          <hr />
          {categories  ? (
            categories.map((category) => (
              <LinkButton
                key={category._id}
                icon={getCategoryIcon(category.name)}
                name={category.name}
                id={category._id}
              />
            ))
          ) : (
            <em>{error}</em>
          )}
        </div>
        <div className={`pro-cards ${show ? "" : "fullWidth"}`}>
          <div className="pro-card-title">
            <h1>Products</h1>
            <select className="pro-menu">
              <option value="">Relevance</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
            </select>
          </div>
          <div className="pro-card">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductCard
                  key={product._id}
                  id={product._id}
                  image={product.images[0]}
                  price={product.price}
                  title={product.title}
                  rating={product.reviews.rate}
                  quantity={product.stock}
                />
              ))
            ) : (
              <h1>
                <em>{error || "No products available"}</em>
              </h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
