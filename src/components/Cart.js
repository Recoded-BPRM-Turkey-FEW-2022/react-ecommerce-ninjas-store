import { Typography, Divider, Box, Grid, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';
import CartItem from '../components/Cart/CartItem';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { NavLink, useRouteMatch } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import CartItemQty from '../components/Cart/CartItemQty';

const Cart = ({ cartItems, setCartItems, onAdd }) => {

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const calculateTotal = () => {
    let total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);

    return total;
  }
  calculateTotal()
  return (
    <>
      <Grid container style={{ width: 500, padding: 20 }}>
        <h2>Your Cart </h2>
        <Grid container sx={{
          margin: 'auto',
          maxWidth: 500,
          flexGrow: 1,
          backgroundColor: (theme) =>
            theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        }}>
          <Typography variant='subtitle1'>
            {cartItems.length === 0 ? <p>No items in cart.</p> : null}
          </Typography>

        </Grid>

        {cartItems.map((item, index) => (
          <Paper
            sx={{
              p: 2,
              margin: '8 auto',
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}
            key={index}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <img src={item.image} style={{ width: 150, height: 150 }} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <h3>{item.title}</h3>
                    <Typography variant="subtitle" >
                      Price: ${item.price}
                    </Typography>
                  </Grid>
                  <CartItemQty onAdd={onAdd} cartItems={cartItems} setCartItems={setCartItems} item={item} />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography variant="subtitle1">
                fsdf
              </Typography> */}
            </Grid>
          </Paper>
        ))
        }
      </Grid >
      <Grid container sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}>
        <Typography variant="h5" >
          Total: ${calculateTotal().toFixed(2)}
        </Typography>
        {cartItems.length === 0 ? null : <Button variant="text" onClick={() => {
          setCartItems([]);
        }}>Remove All</Button>}
      </Grid>
      {/* <Grid container sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}> */}
      <Button variant="contained" href="#contained-buttons" color="success" sx={{ borderRadius: '0' }}>
        Proceed to Payment
      </Button>
      {/* </Grid> */}
    </>
  )
}

export default Cart;
