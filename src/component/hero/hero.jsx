import React from 'react'
import './hero.css'
export default function Hero({title,details,image}) {
  return (
    <>
      <section className="hero">
        <div className="left-hero">
            <h1>{title}</h1>
            <p>{details}</p>
            <button>BUY NOW</button>
        </div>
        <div className="image">
            <img src={image} alt="image of iphone" />
        </div>
      </section>
    </>
  )
}
