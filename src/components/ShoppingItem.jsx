import * as React from "react";
import Box from "@mui/material/Box";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import IconButton from "@mui/material/IconButton";
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
                        src="https://i5.walmartimages.com/asr/39b2749f-cb89-4156-bef6-9902cf1fa5e6_1.a59086a47727231af61afa8e83a1a9d8.jpeg"
                        alt=""
                    />
                    <h3 style={{ underline: "hover" }}>
                        Logitech G-Series Gaming Mouse
                    </h3>
                    <p>
                        <b>R490.99</b>
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
                    <IconButton variant="outlined">
                        <DeleteOutlineOutlinedIcon />
                    </IconButton>
                </Box>
            </Box>
        </div>
    );
};
export default ShoppingItem;
