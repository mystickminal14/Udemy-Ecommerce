import React from "react";
import iphone from "../../assets/file.png";
import Navbar from "./../navbar/navbar";
import Hero from "./../hero/hero";
import Product from "../product/product-list";
export default function Home() {
  return (
    <div>
      <Navbar />
<div style={{marginTop:'60px'}}>
  
<Hero
        title="Buy IPhone 14 Pro"
        image={iphone}
        details="Experience the power of the latest iPhone 14 with our most Pro camera"
      />
      <Product />
      <Hero
        title="Build the ultmate setup"
        image={iphone}
        details="We cab add Studio Display and colour-matched Magic accessories to you bag after configure your Mac mini"
      />
</div>
    </div>
  );
}
