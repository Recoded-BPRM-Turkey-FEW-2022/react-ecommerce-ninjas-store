import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink, useRouteMatch } from "react-router-dom";

const ProductCards = ({ products, currentCategorie }) => {
    return (
        <div style={{ width: "100%" }}>
            <h1>{currentCategorie}</h1>

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
                    <NavLink to={`/${item.id}`}>
                        <CardActionArea>
                            <Card
                                sx={{
                                    width: 200,
                                    height: 400,
                                    paddingLeft: 2,
                                    paddingRight: 2,
                                    paddingTop: 2,
                                    paddingBottom: 2,
                                    border: "outlined",
                                }}
                                key={item.id}
                            >
                                <CardMedia
                                    component="img"
                                    height="250"
                                    width="50"
                                    image={item.image}
                                    id={item.id}
                                />

                                <CardContent
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "flex-start",
                                        gap: "3px",
                                    }}
                                >
                                    <Typography
                                        component="div"
                                        fontSize={"13px"}
                                        fontWeight={"bold"}
                                    >
                                        {item.title}
                                    </Typography>
                                    <Typography
                                        component="div"
                                        fontSize={"13px"}
                                        fontWeight={"bold"}
                                        paddingTop={"15px"}
                                    >
                                        Price: {item.price}$
                                    </Typography>
                                    <Typography
                                        component="div"
                                        fontSize={"13px"}
                                        fontWeight={"bold"}
                                    >
                                        Rating: {item.rating.rate}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </CardActionArea>
                    </NavLink>
                ))}
            </Box>
        </div>
    );
};

export default ProductCards;
