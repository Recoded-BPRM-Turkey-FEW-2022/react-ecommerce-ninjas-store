import React from "react";
import { useState, useEffect } from "react";
import "./style.css";
import ProductCards from "./components/ProductCards";
import Appbar from "./components/Appbar";
import Navbar from "./components/Navbar";

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);
  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  };

  return (
    <div>
      <Navbar setProducts={setProducts}/>
      {/* <Appbar /> */}
      <ProductCards products={products} />
    </div>
  );
}
