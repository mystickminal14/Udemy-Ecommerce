import React from "react";
import ProductCard from "./product-card";
import './product.css'
import cardImage from '../../assets/file.png'
export default function Product() {
  return (
    <>
      <div className="featured">
        <h1>Featured Products</h1>
        <div className="cards">
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
          <ProductCard image={cardImage} price='4900' title='iphone' rating ='4' quantity='4'/>
        </div>
      </div>
    </>
  );
}
