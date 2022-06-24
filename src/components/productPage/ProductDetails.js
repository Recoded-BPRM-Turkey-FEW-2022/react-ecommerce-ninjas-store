import React from "react";
import Grid from "@mui/material/Grid";
import { Typography, Divider, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const productDetails = ({ title, description, price, category, image, onAdd, productInfo }) => {

    return (

    <Grid container direction="column" sx={{paddingLeft: 5}} style={{ height: "100%" }}>
        <Grid item>
        <Typography variant="subtitle1">{category}</Typography>
        <Divider />
        <Box mt={2}>
            {/* <Typography variant="h5">{title}</Typography> */}
            <Typography variant="h5">The dksfniefnkdss sdfewfew</Typography>
            <Divider />
            <Typography variant="subtitle5">
                {/* description: {description} */}
                description: "sdfefefefwknvkdnfdsefefe"
            </Typography>
            <Divider />
            {/* <Typography variant="h5">price: {price}$</Typography> */}
            <Typography variant="h5">price: 1999$</Typography>
        </Box>
        <Divider style={{ marginBottom: "2" }} />

        <Link to="/ShoppingItem">
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: "auto" }}
                onClick={() => {onAdd(productInfo)}}
            >
                Add to Cart{" "}
            </Button>
        </Link>
        </Grid>
    </Grid>
);}

export default productDetails;
