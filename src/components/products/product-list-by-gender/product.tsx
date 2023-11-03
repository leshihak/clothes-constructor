import { Box, Button, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Gender, PRODUCT_LIST_BY_GENDER } from "./constants";

const ProductListByGender = () => {
  const navigate = useNavigate();
  const { gender } = useParams();

  if (!gender) {
    return <>Error</>;
  }

  return (
    <>
      <Box
        height={40}
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="flex-start"
        sx={{ cursor: "pointer" }}
        onClick={() => navigate(-1)}
      >
        <ArrowBackIosNewIcon fontSize="small" color="primary" />
        <Typography color="primary" fontWeight="bold">
          Back
        </Typography>
      </Box>

      <Typography variant="h5">Choose {gender} product</Typography>

      <Box>
        {PRODUCT_LIST_BY_GENDER[gender as Gender].map(
          ({ src, alt, name, id }) => (
            <Button
              key={id}
              variant="text"
              onClick={() => navigate(`/product-list/${gender}/${id}`)}
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
          )
        )}
      </Box>
    </>
  );
};

export default ProductListByGender;