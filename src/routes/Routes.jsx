import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Home from './../component/home/home';
import ProductPages from './../component/home/product-page';
import Order from './../component/home/my-order';
import Cart from './../component/home/cart';
import Login from '../Authentication/login';

export default function RoutesNav() {
  return (
    <>
        <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/product' element={<ProductPages/>}/>
      <Route path='/order' element={<Order/>}/>
      <Route path='/cart' element={<Cart/>}/>

    </Routes>
    </>
  )
}
