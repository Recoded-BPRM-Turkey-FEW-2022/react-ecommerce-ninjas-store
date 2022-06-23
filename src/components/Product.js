import React from "react";
import Grid from "@mui/material/Grid";
import ImageGrid from "../components/productPage/ImageGrid";
import MainImage from "../components/productPage/MainImage";
import ProductDetails from "../components/productPage/ProductDetails";
import ProductReview from "../components/productPage/ProductReview";
import { Divider } from "@mui/material";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";

const Product = ({ onAdd }) => {
    const [productInfo, setProductInfo] = React.useState([]);

    let { id } = useParams();

    const fetchData = async () => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setProductInfo(data);
            });
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <Grid
            container
            spacing={1}
            style={{ maxWidth: 1100, margin: "30 auto" }}
        >
            <Grid item sm={1} height="500">
                <ImageGrid images={productInfo.image} />
            </Grid>
            <Grid sm={5} height="500">
                {/* <MainImage src={selectedImage} /> */}
                <img src={productInfo.image} width="%100" height="100%" />
            </Grid>
            <Grid sm={3} height="500">
                <ProductDetails
                    title={productInfo.title}
                    description={productInfo.description}
                    price={productInfo.price}
                    categoryy={productInfo.category}
                    image={productInfo.image}
                    onAdd={onAdd}
                    productInfo={productInfo}
                />
            </Grid>
            <Grid sm={3} height="500"></Grid>
            <Grid sm={4}>Review:</Grid>
            <Grid sm={8}>
                <ProductReview review={productInfo} />
            </Grid>
        </Grid>
    );
};
export default Product;
