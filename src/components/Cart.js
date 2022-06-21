import { Typography, Divider, Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ProductDetails from './productPage/ProductDetails'
import CartItem from './Cart/CartItem';


const Cart = ({ cartItems }) => {
  console.log(cartItems)
  return (
    <div>cart</div>
    // <Grid container direction='column' style={{ width: 500, padding: 20 }}>
    //   <h2>Your Cart</h2>
    //   {/* {cartItems.length === 0 ? <p>No items in cart.</p> : null} */}
    //   {cartItems.map((item) => (
    //     <CartItem
    //       key={item.id}
    //       item={item}
    //       addToCart={addToCart}
    //       removeFromCart={removeFromCart}
    //     />
    //   ))}
    // </Grid>

  )
}

export default Cart;