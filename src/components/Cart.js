import { Typography, Divider, Box, Grid, Button } from '@mui/material';
import React, { useState } from 'react';
import CartItem from '../components/Cart/CartItem';
import Paper from '@mui/material/Paper';
import ButtonBase from '@mui/material/ButtonBase';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import { NavLink, useRouteMatch } from "react-router-dom";

const Cart = ({ cartItems }) => {
  const calculateTotal = () => {
    let total = cartItems.reduce((acc, item) => acc + item.price, 0);
    console.log(total)

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
                  <Grid item>
                    <Typography sx={{ cursor: 'pointer' }} variant="body2">
                      Remove
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1">
                    fsdf
                  </Typography>
                </Grid>
              </Grid>
              {/* <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                Price: {item.price}$
              </Typography>
            </CardContent> */}
            </Grid>
          </Paper>
        ))}
      </Grid>
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