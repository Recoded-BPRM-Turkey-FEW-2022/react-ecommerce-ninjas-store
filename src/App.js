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

const data = JSON.parse(localStorage.getItem('cartItems')) || []
export default function App() {
    const [products, setProducts] = useState([]);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState(data);

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
        console.log(cartItems)
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems])

    const getTotalItems = () => {
        let badgeContent = cartItems.reduce((acc, item) => acc + item.qty, 0);
        console.log(badgeContent)
        return badgeContent;
    }

    return (
        <Router>
            <ButtonBase style={{ float: 'right', margin: 10 }} onClick={() => setCartOpen(true)}>
                <Badge badgeContent={getTotalItems()} color="error">
                    <AddShoppingCartIcon />
                </Badge>
            </ButtonBase>
            <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
                <Cart
                    cartItems={cartItems}
                />
            </Drawer>
            <div>
                {/* <Navbar products={products} setProducts={setProducts} cartOpen={cartOpen} /> */}
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<ProductCards products={products} />}
                    ></Route>
                    <Route exact path="/:id" element={<Product onAdd={onAdd} />} />
                    {/* <Route exact path="/Cart" element={<Cart items={items} />} /> */}
                </Routes>
            </div>
        </Router >
    );
}
