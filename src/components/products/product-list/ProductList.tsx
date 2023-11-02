import { Box, Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      position="relative"
      height="93%"
    >
      <Typography variant="h5">Choose product</Typography>

      <Outlet />
    </Box>
  );
};

export default ProductList;
