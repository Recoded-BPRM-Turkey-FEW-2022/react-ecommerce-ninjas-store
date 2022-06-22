import { Box } from "@mui/system";
import Grid from '@mui/material/Grid';


const CartItem = ({ key, item }) => {
  console.log(item)
  return (<Grid container direction={column}>
    <Box>
      <h3>{item.title}</h3>
      <p>Price: ${item.price}</p>
      {/* <p>Total: ${(item.amount * item.price).toFixed(2)}</p> */}
      <Button
        size="small"
        disableElevation
        variant="contained"
        onClick={() => removeFromCart(item.id)}
      ></Button>
      <img src={item.image} alt={item.title} />
    </Box>
  </Grid>)
}

export default CartItem;