import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { PRODUCT_LIST } from "./constants";

const ProductIndex = () => {
  const navigate = useNavigate();

  return (
    <>
      <Typography variant="h5">Choose product</Typography>
      <Box>
        {PRODUCT_LIST.map(({ src, alt, name, id }) => (
          <Button
            key={id}
            variant="text"
            onClick={() => navigate(`/product-list/${id}`)}
          >
            <Box
              p={2}
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
            >
              <img
                src={src}
                alt={alt}
                width="100%"
                height="auto"
                loading="lazy"
                style={{ maxWidth: 500, maxHeight: 400 }}
              />
              <Typography mt={2}>{name}</Typography>
            </Box>
          </Button>
        ))}
      </Box>
    </>
  );
};

export default ProductIndex;
