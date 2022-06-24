import { Button } from '@mui/material';
import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Box from "@mui/material/Box";
const CartItemQty = ({ cartItems, setCartItems, item, onAdd }) => {
  function disableBtn(e) {
    console.log(e.target)
    e.target.disabled = true;
  }
  const onRemove = (product, e) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      if (exist.qty < 1) {
        console.log(e.target)
        e.target.disabled = true;
      } else if (exist.qty >= 1) {
        setCartItems(
          cartItems.map((x) =>
            x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
          )
        );
      }
    }
  };

  return (
    <Grid container direction="row" sx={{
      margin: '8',
      display: "flex",
      justifyContent: 'space-between'
    }}>
      <Grid item xs={6} md={8} container
        sx={{
          margin: 0,
          padding: 0,
          display: "flex",
          // justifyContent: "center",
          alignItems: 'center'
        }}>
        <Button
          style={{
            // top: 25,
            minWidth: 40,
            backgroundColor: "lightblue",
            height: 40,
            color: "black"
          }}
          onClick={(e) => onRemove(item, e)}
        >
          -
        </Button>
        <Box sx={{
          margin: 2,
        }}>
          {item.qty}
        </Box>
        <Button
          style={{
            minWidth: 40,
            backgroundColor: "lightblue",
            height: 40,
            color: "black"
          }}
          onClick={() => onAdd(item)}
        >
          +
        </Button>
      </Grid>
      <Grid item xs={6} md={4} container sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: 'center'
      }}>
        <DeleteIcon onClick={() => {
          setCartItems(cartItems.filter(cartItems => cartItems.id !== item.id))
        }} />
      </Grid>
    </Grid >
  )
}

export default CartItemQty;