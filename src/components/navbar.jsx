


import { useNavigate } from "react-router-dom"


export default function Navbar({ products, setProducts, cartOpen, cartItems, handleAddToCart, handleRemoveFromCart }) {
    const navigate = useNavigate();


    function categoriesFilter(categorie) {
        fetch(`https://fakestoreapi.com/products/category/${categorie}`)
            .then(res => res.json())
            .then(json => setProducts(json));
    }

    function priceFilterAsc() {
        const sorted = [...products].sort((a, b) => {
            return a.price - b.price;
        });
        setProducts(sorted);
    }

    function priceFilterDesc() {
        const sorted = [...products].sort((a, b) => {
            return b.price - a.price;
        });
        setProducts(sorted);
    }

    function nameFitler() {
        const sorted = [...products].sort(
            (a, b) => a.title.localeCompare(b.title)
        );
        setProducts(sorted);
    }

    function ratingFilterAsc() {
        const sorted = [...products].sort((a, b) => {
            return a.rating.rate - b.rating.rate;
        });
        setProducts(sorted);
    }
    function ratingFilterDesc() {
        const sorted = [...products].sort((a, b) => {
            return b.rating.rate - a.rating.rate;
        });
        setProducts(sorted);
    }
    // design will change. Those are just for testing now.
    return (
        <div>
            <button onClick={() => { nameFitler() }} value="jewelery">Sort by Name ()</button>
            <button onClick={() => { priceFilterAsc() }} value="jewelery">Sort by price (asc)</button>
            <button onClick={() => { priceFilterDesc() }} value="jewelery">Sort by price (desc)</button>
            <button onClick={() => { ratingFilterAsc() }} value="jewelery">Sort by rating (asc)</button>
            <button onClick={() => { ratingFilterDesc() }} value="jewelery">Sort by rating (desc)</button>
            <button onClick={() => { categoriesFilter("jewelery") }} value="jewelery">jewelery</button>
            <button onClick={() => { categoriesFilter("electronics") }} value="jewelery">electronics</button>
            <button onClick={() => { categoriesFilter("men's clothing") }} value="jewelery">men's clothing</button>
            <button onClick={() => { categoriesFilter("women's clothing") }} value="jewelery">women's clothing</button>
            <button onClick={() => navigate("/Cart")} >Cart</button>
        </div>
    );
}


