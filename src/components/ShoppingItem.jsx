import * as React from "react";
import Box from "@mui/material/Box";

const ShoppingItem = () => {
    return (
        <div style={{ width: "100%" }}>
            <h1>SHOPPING CART</h1>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <img src="" alt="" />
                    <h6 sx={{ underline: "hover" }}>
                        Logitech G-Series Gaming Mouse
                    </h6>
                    <p>R490.99</p>
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
                </Box>
            </Box>
        </div>
    );
};
export default ShoppingItem;
