import { Typography, Divider, Box, Grid } from '@mui/material';
import React, { useState } from 'react';
import ProductDetails from './productPage/ProductDetails'
import CartItem from './Cart/CartItem';


const Cart = ({ cartItems }) => {
  console.log(cartItems.length)
  return (
    <><Grid container direction='column' style={{ width: 500, padding: 20 }}>
      <h2>Your Cart sd</h2>

      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map((item) => (
        <h2>{item.title}</h2>
      ))
      }
    </Grid></>

  )
}

export default Cart;