import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductCards from "./components/ProductCards";
import Cart from "./components/Cart";
import Drawer from "@mui/material/Drawer";
import ShoppingItem from "./components/ShoppingItem";
const data = JSON.parse(localStorage.getItem("cartItems")) || [];
export default function App() {
    const [products, setProducts] = useState([]);
    const [cartOpen, setCartOpen] = useState(true);
    const [cartItems, setCartItems] = useState(data);
    const [currentCategorie, setCurrentCategorie] = useState("Latest Products");

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);

    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
    };

    useEffect(() => {
        console.log(cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    return (
        <Router>
            <Drawer
                anchor="right"
                open={cartOpen}
                onClose={() => setCartOpen(false)}
            >
                <Cart cartItems={cartItems} />
            </Drawer>
            <div>
                {/* <Appbar products={products} setProducts={setProducts} setCurrentCategorie={setCurrentCategorie} /> */}
                <Navbar products={products} setProducts={setProducts} setCurrentCategorie={setCurrentCategorie} />
                <Routes>
                    <Route
                        exact
                        path="/Products"
                        element={<ProductCards products={products} currentCategorie={currentCategorie}/>}
                    ></Route>
                    <Route
                        exact
                        path="/:id"
                        element={<Product onAdd={onAdd} />}
                    />
                    <Route
                        exact
                        path="/ShoppingItem"
                        element={<ShoppingItem />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}
