



export default function Navbar({products, setProducts}) {

    function categoriesFilter(categorie) {
        fetch(`https://fakestoreapi.com/products/category/${categorie}`)
            .then(res=>res.json())
            .then(json=>setProducts(json));
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
// design will change. Those are just for testing now.
  return (
    <div>

        <button onClick={() => {nameFitler()}} value="jewelery">Sort by Name ()</button>
        <button onClick={() => {priceFilterAsc()}} value="jewelery">Sort by price (asc)</button>
        <button onClick={() => {priceFilterDesc()}} value="jewelery">Sort by price (desc)</button>
        <button onClick={() => {categoriesFilter("jewelery")}} value="jewelery">jewelery</button>
        <button onClick={() => {categoriesFilter("electronics")}} value="jewelery">electronics</button>
        <button onClick={() => {categoriesFilter("men's clothing")}} value="jewelery">men's clothing</button>
        <button onClick={() => {categoriesFilter("women's clothing")}} value="jewelery">women's clothing</button>
    </div>
  );
}


