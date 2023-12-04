import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";

const ChooseGender = () => {
  const navigate = useNavigate();

  return (
    <Box display="flex" alignItems="center" gap={3} height="calc(100vh - 80px)">
      <Button
        onClick={() => navigate("/product-list/man")}
        variant="contained"
        startIcon={<MaleIcon fontSize="large" />}
        sx={{ width: 150, height: 50 }}
      >
        Man
      </Button>

      <Button
        onClick={() => navigate("/product-list/woman")}
        variant="contained"
        startIcon={<FemaleIcon fontSize="large" />}
        sx={{ width: 150, height: 50 }}
      >
        Female
      </Button>
    </Box>
  );
};

export default ChooseGender;
