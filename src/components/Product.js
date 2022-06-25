import React from "react";
import Grid from "@mui/material/Grid";
import ImageGrid from "../components/productPage/ImageGrid";
import MainImage from "../components/productPage/MainImage";
import ProductDetails from "../components/productPage/ProductDetails";
import ProductReview from "../components/productPage/ProductReview";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate, Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { width } from "@mui/system";

const Product = ({ onAdd, products }) => {
  const [productInfo, setProductInfo] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = React.useState(2.5);

  const fetchData = () => {
    fetch(`http://localhost:3005/products`)
      .then((res) => res.json())
      .then((data) => {
        setProductInfo(data[id - 1]);
        setRating(data[id - 1].rating.rate);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid
      container
      justifyContent="start"
      sx={{ paddingTop: 4, paddingLeft: 10 }}
    >
      <Card sx={{ maxWidth: 1000 }}>
        <Grid container>
          <Grid
            item
            xs={12}
            md={6}
            direction="column"
            sx={{ paddingRight: 2, borderRight: 1, borderColor: "grey.500" }}
          >
            <CardMedia
              sx={{
                margin: 1,
                border: 1,
                borderRadius: "10px",
                borderColor: "grey.500",
              }}
              component="img"
              height="550"
              image={productInfo.image}
              alt="Product"
            />
          </Grid>
          <Grid item xs={12} md={6} direction="column">
            <Grid
              container
              direction="row"
              sx={{height: "570px" }}
            >
              <Grid item md={10}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {productInfo.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Description: {productInfo.description}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Price: ${productInfo.price}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    Rating
                  </Typography>
                  <Rating name="read-only" value={rating} readOnly />
                </CardContent>
              </Grid>
              <Grid
                item
                md={12}
                sx={{
                  // paddingTop: 30,
                  alignSelf: "self-end",
                  justifySelf: "self-end",
                }}
              >
                <CardActions>
                  <Button
                    size="small"
                    sx={{ marginRight: 0, marginLeft: "auto" }}
                    onClick={() => {
                      onAdd(productInfo);
                      navigate("/ShoppingItem");
                    }}
                  >
                    Add to cart
                  </Button>
                </CardActions>
              </Grid>
            </Grid>
            {/* <Typography gutterBottom variant="h6" component="div" sx={{paddingLeft: 1}}>
              Reviews:
            </Typography> */}
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
};

export default Product;
