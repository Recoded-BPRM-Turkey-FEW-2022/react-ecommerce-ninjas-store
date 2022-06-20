import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from './components/Product';
import ProductCards from "./components/ProductCards";

export default function App() {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                return setProducts(data);
            }
            )
    }, [])

    return (
        <Router>
            <div>
                <Routes>
                    <Route
                        exact path="/"
                        element={<ProductCards products={products} />}
                    ></Route>
                    <Route exact path="/:id" element={<Product />} />
                </Routes>
            </div>
        </Router>


    );
}
