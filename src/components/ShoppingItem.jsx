import * as React from "react";
import Box from "@mui/material/Box";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import { Typography } from "@mui/material";

const ShoppingItem = ({ cartItems }) => {

  return (
    <div style={{ width: "100%" }}>
      <h1>SHOPPING CART</h1>

      {cartItems.map((item) => (

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
          key={item.id}
        >
          <Box
            sx={{
              height: "100px",
              background: "beige",
              paddingLeft: "80px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <img
              style={{ width: "80px", height: "80px" }}
              src={item.image}
              alt=""
            />

            <h3 style={{ underline: "hover" }}>{item.title}</h3>

            <p>
              <b>{item.price}</b>
            </p>

            <select name="" id="">
              <option value="">1</option>
              <option value="">2</option>
              <option value="">3</option>
              <option value="">4</option>
              <option value="">5</option>
              <option value="">6</option>
              <option value="">7</option>
              <option value="">8</option>
              <option value="">9</option>
              <option value="">10</option>
            </select>

            <IconButton variant="outlined" onClick={() => {

                for(let i = 0; i <= cartItems.length; i++) {
                if(item.id === cartItems[i].id) {
                    cartItems.splice(i, 1);
                    console.log("item deleted");
                    localStorage.setItem("cartItems", JSON.stringify(cartItems));
                    break;
                }
                }
                }}>

              <DeleteOutlineOutlinedIcon />
            </IconButton>
          </Box>
        </Box>

      ))}

      {cartItems.length === 0 ? null : <Button variant="text" onClick={() => {
          window.localStorage.clear();
        }}>Remove All</Button>}

    </div>
  );
};
export default ShoppingItem;
