import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      position="relative"
      height="calc(100vh - 80px)"
    >
      <Outlet />
    </Box>
  );
};

export default ProductList;
