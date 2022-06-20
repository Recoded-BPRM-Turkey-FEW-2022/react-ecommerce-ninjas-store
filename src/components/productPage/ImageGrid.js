import React from 'react';
import Grid from '@mui/material/Grid';


const ImageGrid = ({ images }) => {
  return <Grid container direction='column'>
    <img src={images} height={80} style={{ border: 'solid 1px #eee', cursor: 'pointer' }} />
  </Grid >
}

export default ImageGrid;