import { Button } from '@mui/material';
import React from 'react';
import DeleteIcon from "@mui/icons-material/Delete";
import Grid from "@mui/material/Grid";
import Fab from '@mui/material/Fab';
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CartItemQty = ({ cartItems, setCartItems, item, onAdd }) => {
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <Grid container sx={{
      margin: '8',
      padding: '8'
    }}>
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => onRemove(item)}
      >
        -
      </Button>
      <p>{item.qty}</p>
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => onAdd(item)}
      >
        +
      </Button>
      <DeleteIcon onClick={() => {
        setCartItems(cartItems.filter(cartItems => cartItems.id !== item.id))
      }} />
    </Grid>
  )
}

export default CartItemQty;