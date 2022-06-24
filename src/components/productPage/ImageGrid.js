import React from "react";
import Grid from "@mui/material/Grid";
import CircularProgress from "@mui/material/CircularProgress";

const ImageGrid = ({ images, isLoading }) => {
    return isLoading ? ( //Checkif if is loading
        <></>
    ) : (
        <Grid container direction="column">
            <img
                src={images}
                height={80}
                style={{ border: "solid 1px #eee", cursor: "pointer" }}
            />
        </Grid>
    );
};

export default ImageGrid;
