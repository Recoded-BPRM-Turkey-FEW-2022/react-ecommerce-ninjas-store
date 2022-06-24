import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Drawer from "@mui/material/Drawer";
import { Badge, ButtonBase } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Cart from "./Cart";
import Divider from "@mui/material/Divider";

import { useNavigate, Link } from "react-router-dom";

export default function ButtonAppBar({
  products,
  setProducts,
  setCurrentCategorie,
  getTotalItems,
  cartOpen,
  setCartOpen,
  cartItems,
  setCartItems,
  onAdd,
}) {
  const [categorie, setcategorie] = React.useState("");
  const [filter, setfilter] = React.useState("");
  const [filteredProducts, setFilteredProducts] = React.useState(products);
  const [name, setName] = React.useState("");

  const navigate = useNavigate();

  const categorieHandleChange = (event) => {
    setcategorie(event.target.value);
    setName("");
    setfilter("");
  };

  const filterHandleChange = (event) => {
    setfilter(event.target.value);
  };
  

  // function categoriesFilter(categorie) {
  //   fetch(`http://localhost:3005/products /category/${categorie}`)
  //     .then((res) => res.json())
  //     .then((json) => (
  //       setProducts(json)
  //     ))
  // }

  function categoriesFilter(categorie) {
    fetch(`http://localhost:3005/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.filter((product) => product.category === categorie));
      });
  }

  function noCatogorie() {
    fetch(`http://localhost:3005/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
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
    const sorted = [...products].sort((a, b) => a.title.localeCompare(b.title));
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

  function searchByName() {
    fetch(`http://localhost:3005/products`)
      .then((res) => res.json())
      .then((data) => {
        setProducts(
          data.filter((product) =>
            product.title.toLowerCase().includes(name.toLowerCase())
          )
        );
      });
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => {
              navigate("/");
              noCatogorie();
              setcategorie("");
              setfilter("");
              setName("");
            }}
            style={{}}
          >
            Store
          </Typography>

          {window.location.href === `http://localhost:3000/` ? (
            <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{ input: { color: "white" } }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              id="search"
              label="Search"
              variant="standard"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                searchByName();
                setcategorie("");
                setfilter("");
              }}
            />
          </Box>)
          : null
          }

          {/* <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              sx={{ input: { color: "white" } }}
              InputLabelProps={{
                style: { color: "#fff" },
              }}
              id="search"
              label="Search"
              variant="standard"
              name="name"
              value={name}
              onChange={(event) => {
                setName(event.target.value);
                searchByName();
                setcategorie("");
                setfilter("");
              }}
            />
          </Box> */}

          {window.location.href === `http://localhost:3000/` ? (
            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
              <InputLabel id="demo-select-small" style={{ color: "white" }}>
                Categories
              </InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                value={categorie}
                label="categorie"
                onChange={categorieHandleChange}
              >
                <MenuItem
                  value={0}
                  onClick={() => {
                    noCatogorie();
                    setCurrentCategorie("Latest Products");
                  }}
                >
                  <em>All</em>
                </MenuItem>
                <Divider />
                <MenuItem
                  value={1}
                  onClick={() => {
                    categoriesFilter("jewelery");
                    setCurrentCategorie("Jewelery");
                  }}
                >
                  Jewelery
                </MenuItem>
                <MenuItem
                  value={2}
                  onClick={() => {
                    categoriesFilter("electronics");
                    setCurrentCategorie("Electronics");
                  }}
                >
                  Electronics
                </MenuItem>
                <MenuItem
                  value={3}
                  onClick={() => {
                    categoriesFilter("men's clothing");
                    setCurrentCategorie("Men's clothing");
                  }}
                >
                  Men's clothing
                </MenuItem>
                <MenuItem
                  value={4}
                  onClick={() => {
                    categoriesFilter("women's clothing");
                    setCurrentCategorie("Women's clothing");
                  }}
                >
                  Women's clothing
                </MenuItem>
              </Select>
            </FormControl>
          ) : null}

          {window.location.href === `http://localhost:3000/` ? (
            <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
              <InputLabel id="filter-select-small" style={{ color: "white" }}>
                Sort by
              </InputLabel>
              <Select
                labelId="filter-select-small"
                id="filter-select-small"
                value={filter}
                label="filter"
                onChange={filterHandleChange}
              >
                <MenuItem
                  value={0}
                  onClick={() => {
                    nameFitler();
                  }}
                >
                  Name
                </MenuItem>
                <Divider />
                <MenuItem
                  value={1}
                  onClick={() => {
                    priceFilterAsc();
                  }}
                >
                  Ascending Price
                </MenuItem>
                <MenuItem
                  value={2}
                  onClick={() => {
                    priceFilterDesc();
                  }}
                >
                  Descending Price
                </MenuItem>
                <Divider />
                <MenuItem
                  value={3}
                  onClick={() => {
                    ratingFilterAsc();
                  }}
                >
                  Ascending Rating
                </MenuItem>
                <MenuItem
                  value={4}
                  onClick={() => {
                    ratingFilterDesc();
                  }}
                >
                  Descending Rating
                </MenuItem>
              </Select>
            </FormControl>
          ) : null}
          {/* <Button color="inherit" onClick={() => navigate("/ShoppingItem")}>Cart</Button> */}
          <ButtonBase
            style={{ float: "right", margin: 10 }}
            onClick={() => setCartOpen(true)}
          >
            <Badge badgeContent={getTotalItems()} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </ButtonBase>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onAdd={onAdd}
            />
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
