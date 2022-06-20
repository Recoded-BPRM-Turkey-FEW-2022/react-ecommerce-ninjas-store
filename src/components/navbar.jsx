



export default function Navbar({setProducts}) {

    function categoriesFilter(categorie) {
        fetch(`https://fakestoreapi.com/products/category/${categorie}`)
            .then(res=>res.json())
            .then(json=>setProducts(json));
    }

  return (
    <div>
        <button onClick={() => {categoriesFilter("jewelery")}} value="jewelery">jewelery</button>
        <button onClick={() => {categoriesFilter("electronics")}} value="jewelery">electronics</button>
        <button onClick={() => {categoriesFilter("men's clothing")}} value="jewelery">men's clothing</button>
        <button onClick={() => {categoriesFilter("women's clothing")}} value="jewelery">women's clothing</button>
    </div>
  );
}


