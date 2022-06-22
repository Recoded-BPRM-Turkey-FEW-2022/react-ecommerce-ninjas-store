import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Divider, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const productDetails = ({ title, description, price, category }) => (
    <Grid container direction="column" style={{ height: "100 %" }}>
        <Typography variant="subtitle1">{category}</Typography>
        <Divider />
        <Box mt={2}>
            <Typography variant="h5">{title}</Typography>
            <Divider />
            <Typography variant="subtitle5">
                description: {description}
            </Typography>
            <Divider />
            <Typography variant="h5">price: {price}$</Typography>
        </Box>
        <Divider style={{ marginBottom: "2" }} />

        <Link to="/ShoppingItem">
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "auto" }}
            >
                Purchase{" "}
            </Button>
        </Link>
    </Grid>
);

export default productDetails;
