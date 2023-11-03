import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const ProductList = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
    >
      <Outlet />
    </Box>
  );
};

export default ProductList;
