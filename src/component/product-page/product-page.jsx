import React, { useState } from "react";
import "./product-page.css";
import LinkButton from "./link-button";
import { SiYoutubegaming } from "react-icons/si";
import { FaHeadphones } from "react-icons/fa6";
import { FaLaptop } from "react-icons/fa";
import { MdOutlineSmartphone } from "react-icons/md";
import { IoWatch } from "react-icons/io5";
import { BsLayoutSidebarInsetReverse } from "react-icons/bs";
import ProductCard from "../product/product-card";
import cardImage from '../../assets/file.png';

export default function ProductPage() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="pro-page">
        {!show && <BsLayoutSidebarInsetReverse onClick={() => setShow(true)} className="pro-side" />}
        <div className={`off-canvas ${show ? "showCanvas" : ""}`}>
          <div className="pro-title">
            <h1>Categories</h1>
            <BsLayoutSidebarInsetReverse className='reverse'onClick={() => setShow(false)} />
          </div>
          <hr />
          <LinkButton icon={<SiYoutubegaming />} name="Gaming Console" />
          <LinkButton icon={<FaHeadphones />} name="Headphones" />
          <LinkButton icon={<FaLaptop />} name="Laptops and TV" />
          <LinkButton icon={<MdOutlineSmartphone />} name="Smart Phone" />
          <LinkButton icon={<IoWatch />} name="Smart watch" />
        </div>
        <div className={`pro-cards ${show ? "" : "fullWidth"}`}>
          <div className="pro-card-title">
            <h1>Products</h1>
            <select className="pro-menu">
              <option value="">Relevance</option>
              <option value="1">Audi</option>
              <option value="2">BMW</option>
              <option value="3">Citroen</option>
              <option value="4">Ford</option>
              <option value="5">Honda</option>
              <option value="6">Jaguar</option>
              <option value="7">Land Rover</option>
              <option value="8">Mercedes</option>
              <option value="9">Mini</option>
              <option value="10">Nissan</option>
              <option value="11">Toyota</option>
              <option value="12">Volvo</option>
            </select>
          </div>
          <div className="pro-card">
            <ProductCard image={cardImage} price='4900' title='iphone' rating='4' quantity='4' />
            <ProductCard image={cardImage} price='4900' title='iphone' rating='4' quantity='4' />
            <ProductCard image={cardImage} price='4900' title='iphone' rating='4' quantity='4' />
            <ProductCard image={cardImage} price='4900' title='iphone' rating='4' quantity='4' />
            <ProductCard image={cardImage} price='4900' title='iphone' rating='4' quantity='4' />

          </div>
        </div>
      </div>
    </>
  );
}
