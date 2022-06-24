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

const Product = ({ onAdd }) => {
  const [productInfo, setProductInfo] = React.useState([]);
  const [isLoading, setLoading] = useState(true);
  let { id } = useParams();
  const navigate = useNavigate();

  const fetchData = () => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setProductInfo(data);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Grid container justifyContent="start" sx={{ paddingTop: 4, paddingLeft: 10}}>
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
              height="350"
              //   image={productInfo.image}
              image="https://images.deliveryhero.io/image/fd-tr/LH/y8q4-hero.jpg"
              alt="green iguana"
            />
          </Grid>
          <Grid item xs={12} md={6} direction="column">
            <Grid container direction="row">
              <Grid item md={10}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {/* Title: {productInfo.title} */}
                    Title
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {/* Description: {productInfo.description} */}
                    Description: Lizards are a widespread group of squamate
                    reptiles, with over 6,000 species, ranging across all
                    continents except Antarctica
                  </Typography>
                  <Typography gutterBottom variant="h6" component="div">
                    {/* Price: {productInfo.price} */}
                    Price: $999999
                  </Typography>
                  {/* <Rating name="read-only" value={productInfo.rating.rate} readOnly /> */}
                  <Rating name="read-only" value={3} readOnly />
                </CardContent>
              </Grid>
              <Grid
                item
                md={12}
                sx={{
                  paddingTop: 18,
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
          </Grid>
        </Grid>
      </Card>
    </Grid>
    //     <Grid
    //         container
    //         spacing={2}
    //         style={{ maxWidth: 1100, margin: "30 auto" }}
    //     >
    //         {/* <Grid item sm={1} height="500">
    //             <ImageGrid isLoading={isLoading} images={productInfo.image} />
    //         </Grid> */}
    //         <Paper item sx={{width: "100%"}}>
    //         <Grid item
    //             display={"flex"}
    //             justifyContent={"center"}
    //             alignItems={"center"}
    //             height="500"
    //             sm={5}
    //             xs={12}
    //             md={5}
    //         >
    //             {/* <MainImage src={selectedImage} /> */}
    //             {isLoading ? (
    //                 <Box
    //                     sx={{
    //                         display: "flex",
    //                         justifyContent: "center",
    //                         alignItems: "center",

    //                         marginRight: "100px",
    //                         marginLeft: "100px",
    //                         marginTop: "100px",
    //                     }}
    //                 >
    //                     <CircularProgress />
    //                 </Box>
    //             ) : (
    //                 <img src={productInfo.image} width="%100" height="100%" />
    //             )}
    //            <CardMedia
    //                 component="img"
    //                 height="100%"
    //                 width="100%"
    //                 image="https://images.deliveryhero.io/image/fd-tr/LH/y8q4-hero.jpg"
    //                 alt="green iguana"
    //   />
    //         </Grid>
    //         </Paper>
    //         <Divider />

    //         <Paper item sx={{width: "100%"}}>

    //         <Grid item
    //             sm={5}
    //             xs={12}
    //             md={5}
    //             justifyContent="center"
    //             alignItems="center"

    //             height="500">

    //             <ProductDetails
    //                 title={productInfo.title}
    //                 description={productInfo.description}
    //                 price={productInfo.price}
    //                 categoryy={productInfo.category}
    //                 image={productInfo.image}
    //                 onAdd={onAdd}
    //                 productInfo={productInfo}
    //             />
    //         </Grid>
    //         </Paper>

    //         {/* <Grid sm={3} height="500"></Grid> */}

    //         {/* <Grid sm={8}>
    //             <ProductReview review={productInfo} />
    //         </Grid> */}

    //     </Grid>
  );
};
export default Product;
