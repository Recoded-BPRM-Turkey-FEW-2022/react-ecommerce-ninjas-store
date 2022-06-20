import React from "react";
import { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const ProductCards = ({ products }) => {
  return (
    <div style={{ width: "100%" }}>
      <h1>LATEST PRODUCTS</h1>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {products.map((item) => (
          <Card
            sx={{
              width: 200,
              height: 300,
              paddingLeft: 2,
              paddingRight: 2,
              paddingTop: 2,
              paddingBottom: 2,
              background: "beige",
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="130"
                width="50"
                image={item.image}
              />
            </CardActionArea>

            <CardContent>
              <Typography gutterBottom variant="p" component="div">
                {item.title}
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                Price: {item.price}$
              </Typography>
              <Typography gutterBottom variant="p" component="div">
                rating: {item.rating.rate}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </div>
  );
};

export default ProductCards;
