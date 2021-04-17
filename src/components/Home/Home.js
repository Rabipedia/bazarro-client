import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import spinner from '../../icons/Group 33149.png'
import Product from "../Product/Product";


const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(()=>{
    fetch('http://localhost:5000/products')
    .then(res => res.json())
    .then(data => setProducts(data))
  }, [])
 
  return (
    <div className='product-container'>
      {
        products.length === 0 && <img src={spinner} alt =""/>
      }
      {
        products.map(product => <Product key={product._id} product={product}></Product>)
      }
    </div>
  );
};

export default Home;
