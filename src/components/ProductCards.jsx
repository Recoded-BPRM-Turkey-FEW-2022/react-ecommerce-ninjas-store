import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
const ProductCards = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetchProducts();
    }, []);
    const fetchProducts = () => {
        fetch("https://fakestoreapi.com/products")
            .then((res) => res.json())
            .then((json) => setProducts(json));
    };
    return (
        <div>
            <h1>LATEST PRODUCTS</h1>
            {products.map((item) => (
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "center",
                    }}
                >
                    <CardActionArea>
                        <Card
                            sx={{
                                maxWidth: 345,
                                paddingLeft: 10,
                                paddingRight: 10,
                                paddingTop: 15,
                                paddingBottom: 10,
                                background: "beige",
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="300"
                                width="100"
                                image={item.image}
                            />
                            <CardContent>
                                <Typography
                                    gutterBottom
                                    variant="h6"
                                    component="div"
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    gutterBottom
                                    variant="p"
                                    component="div"
                                >
                                    {item.price}
                                </Typography>
                            </CardContent>
                        </Card>
                    </CardActionArea>
                </Box>
            ))}
        </div>
    );
};
export default ProductCards;
