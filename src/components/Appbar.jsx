import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ButtonAppBar({
  products,
  setProducts,
  setCurrentCategorie,
}) {
  const [categorie, setcategorie] = React.useState("");

  const handleChange = (event) => {
    setcategorie(event.target.value);
  };

  function categoriesFilter(categorie) {
    fetch(`https://fakestoreapi.com/products/category/${categorie}`)
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }

  function noCatogorie() {
    fetch(`https://fakestoreapi.com/products`)
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

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Store
          </Typography>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" style={{ color: "white" }}>
              Categorie
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={categorie}
              label="categorie"
              onChange={handleChange}
            >
              <MenuItem
                value={"All"}
                onClick={() => {
                  noCatogorie();
                  setCurrentCategorie("Latest Products");
                }}
              >
                <em>All</em>
              </MenuItem>
              <MenuItem
                value={"jewelery"}
                onClick={() => {
                  categoriesFilter("jewelery");
                  setCurrentCategorie("Jewelery");
                }}
              >
                Jewelery
              </MenuItem>
              <MenuItem
                value={"electronics"}
                onClick={() => {
                  categoriesFilter("electronics");
                  setCurrentCategorie("Electronics");
                }}
              >
                Electronics
              </MenuItem>
              <MenuItem
                value={"men's clothing"}
                onClick={() => {
                  categoriesFilter("men's clothing");
                  setCurrentCategorie("Men's clothing");
                }}
              >
                Men's clothing
              </MenuItem>
              <MenuItem
                value={"women's clothing"}
                onClick={() => {
                  categoriesFilter("women's clothing");
                  setCurrentCategorie("Women's clothing");
                }}
              >
                Women's clothing
              </MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
            <InputLabel id="demo-select-small" style={{ color: "white" }}>
              Filter by
            </InputLabel>
            <Select
              labelId="demo-select-small"
              id="demo-select-small"
              value={categorie}
              label="categorie"
              onChange={handleChange}
            >
              <MenuItem
                value={"name"}
                onClick={() => {
                  nameFitler();
                }}
              >
                Name
              </MenuItem>
              <MenuItem
                value={"Ascending Price"}
                onClick={() => {
                  priceFilterAsc();
                }}
              >
                Ascending Price
              </MenuItem>
              <MenuItem
                value={"Descending Price"}
                onClick={() => {
                  priceFilterDesc();
                }}
              >
                Descending Price
              </MenuItem>
              <MenuItem
                value={"Ascending Rating"}
                onClick={() => {
                  ratingFilterAsc();
                }}
              >
                Ascending Rating
              </MenuItem>
              <MenuItem
                value={"Descending Rating"}
                onClick={() => {
                  ratingFilterDesc();
                }}
              >
                Descending Rating
              </MenuItem>
            </Select>
          </FormControl>

          <Button color="inherit">Cart</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
