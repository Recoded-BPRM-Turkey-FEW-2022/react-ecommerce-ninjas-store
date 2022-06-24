import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NavLink, useRouteMatch } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { lightBlue } from "@mui/material/colors";
import CircularProgress from "@mui/material/CircularProgress";
import { Container } from "@mui/system";

const ProductCards = ({ products, currentCategorie, isLoading }) => {
    const [value, setValue] = React.useState(2);

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
                {products.map((item) => {
                    let title = item.title;
                    {
                        title.length >= 10
                            ? (title = title.slice(0, 30))
                            : title;
                    }
                    return (
                        <>
                            <NavLink to={`/products/${item.id}`}>
                                <CardActionArea>
                                    {isLoading ? (
                                        <Box
                                            sx={{
                                                display: "flex",
                                                justifyContent: "center",
                                                alignItems: "center",

                                                marginRight: "100px",
                                                marginLeft: "100px",
                                                marginTop: "100px",
                                            }}
                                        >
                                            <CircularProgress />
                                        </Box>
                                    ) : (
                                        <Card
                                            sx={{
                                                width: 200,
                                                height: 360,
                                                paddingLeft: 1,
                                                paddingRight: 1,
                                                paddingTop: 2,
                                                paddingBottom: 2,
                                                border: 1,
                                                borderColor: "lightBlue",
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
                                                    fontSize={"12px"}
                                                    fontWeight={"bold"}
                                                    margin={0}
                                                >
                                                    {title}
                                                </Typography>
                                                <Typography
                                                    component="div"
                                                    fontSize={"13px"}
                                                    fontWeight={"bold"}
                                                >
                                                    Price: {item.price}$
                                                </Typography>

                                                <Typography component="legend"></Typography>
                                                <Rating
                                                    name="read-only"
                                                    value={item.rating.rate}
                                                    readOnly
                                                />
                                            </CardContent>
                                        </Card>
                                    )}
                                </CardActionArea>
                            </NavLink>
                        </>
                    );
                })}
            </Box>
        </div>
    );
};

export default ProductCards;
