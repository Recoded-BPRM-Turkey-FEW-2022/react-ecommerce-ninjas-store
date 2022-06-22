import { Typography, Divider, Box, Grid } from "@mui/material";
import React, { useState, useEffect } from "react";
import ProductDetails from "./productPage/ProductDetails";
import CartItem from "./Cart/CartItem";

import DeleteIcon from "@mui/icons-material/Delete";
import Button from '@mui/material/Button';

const Cart = ({ cartItems }) => {

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
}, [cartItems]);

  return (
    <>
      <Grid container direction="column" style={{ width: 500, padding: 20 }}>
        <h2>Your Cart sd</h2>

        <Typography sx={{fontWeight: "bold"}}>{cartItems.length} item</Typography>

        {cartItems.length === 0 ? <p>No items in cart.</p> : null}

        {cartItems.map((item) => (
          <Grid container sx={{ color: "text.primary", width: 500 }} key={item.id}>

            <Grid item xs={4}>
              <Typography>{item.title}</Typography>
            </Grid>

            <Grid item xs={8} sx={{paddingLeft: 24}}>

            <Button variant="text" onClick={() => {

              for(let i = 0; i <= cartItems.length; i++) {
                if(item.id === cartItems[i].id) {
                  cartItems.splice(i, 1);
                  console.log("item deleted");
                  localStorage.setItem("cartItems", JSON.stringify(cartItems));
                  break;
                }
              }
            }}>Remove</Button>
              {/* <DeleteIcon /> */}
            </Grid>

          </Grid>
        ))}

        {cartItems.length === 0 ? null : <Button variant="text" onClick={() => {
          window.localStorage.clear();
        }}>Remove All</Button>}
        
      </Grid>
    </>
  );
};

export default Cart;
