import React from 'react'
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material';

const ProductReview = ({ review }) => {
  return <Grid container >
    <Typography variant='subtitle2'>daad {review.title}</Typography>
    {/* rating is not working still */}
  </Grid>
}

export default ProductReview;