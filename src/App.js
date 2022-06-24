import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Product from "./components/Product";
import ProductCards from "./components/ProductCards";
import Cart from './components/Cart'
import Drawer from '@mui/material/Drawer';
import { Badge, ButtonBase } from "@mui/material";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingItem from "./components/ShoppingItem";


const data = JSON.parse(localStorage.getItem("cartItems")) || [];


export default function App() {

    const [products, setProducts] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(data);
    const [currentCategorie, setCurrentCategorie] = useState("Latest Products");

    useEffect(() => {
        fetch(`http://localhost:3000/products`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
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
        // console.log("cart items: ", cartItems);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const getTotalItems = () => {
        let badgeContent = cartItems.reduce((acc, item) => acc + item.qty, 0);
        console.log(badgeContent)
        return badgeContent;
    }

    return (
        <Router>
            <div>
                {/* <Navbar products={products} setProducts={setProducts} setCurrentCategorie={setCurrentCategorie} getTotalItems={getTotalItems} cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} setCartItems={setCartItems} onAdd={onAdd} /> */}
                <Routes>
                    <Route
                        exact
                        path="/Products"
                        element={<ProductCards products={products} currentCategorie={currentCategorie} />}
                    ></Route>
                    <Route
                        exact
                        path="/:id"
                        element={<Product onAdd={onAdd} />}
                    />
                    <Route
                        exact
                        path="/ShoppingItem"
                        element={<ShoppingItem cartItems={cartItems} setCartItems={setCartItems} />}
                    ></Route>
                </Routes>
            </div>
        </Router>
    );
}
