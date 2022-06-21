import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductCards from "./components/ProductCards";
import Cart from './components/Cart'
import Drawer from '@mui/material/Drawer';

export default function App() {
    const [products, setProducts] = useState([]);
    const [cartOpen, setCartOpen] = useState(true);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products`)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            });
    }, []);
    // useEffect(() => {
    //     if (!!cartItems) {
    //         localStorage.setItem(
    //             'cartitem',
    //             JSON.stringify(cartItems)
    //         );
    //     }
    // }, [cartItems]);

    // useEffect(() => {
    //     console.log(cartItems)
    //     localStorage.setItem('items', JSON.stringify(cartItems));
    // }, [cartItems])


    // useEffect(() => {
    //     const cartItems = JSON.parse(localStorage.getItem('cartItems'));
    //     if (cartItems) {
    //         setItems(cartItems);
    //     }
    // }, []);

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

    return (
        <Router>
            {/* <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                />
            </Drawer> */}
            <div>
                <Navbar products={products} setProducts={setProducts} cartOpen={cartOpen} />
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<ProductCards products={products} />}
                    ></Route>
                    <Route exact path="/:id" element={<Product onAdd={onAdd} />} />
                    <Route exact path="/Cart" element={<Cart cartItems={cartItems} />} />
                </Routes>
            </div>
        </Router >
    );
}
