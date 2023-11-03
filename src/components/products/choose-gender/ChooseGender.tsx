import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ChooseGender = () => {
  const navigate = useNavigate();

  return (
    <Box>
      <Typography onClick={() => navigate("/product-list/man")}>Man</Typography>
      <Typography onClick={() => navigate("/product-list/woman")}>
        Woman
      </Typography>
    </Box>
  );
};

export default ChooseGender;
