import React from "react";
import Grid from "@mui/material/Grid";

const MainImage = ({ src }) => {
    return (
        <Grid container>
            <img src={src} width="100 %" />
        </Grid>
    );
};

export default MainImage;
