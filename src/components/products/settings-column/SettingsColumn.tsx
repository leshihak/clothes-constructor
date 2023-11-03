import {
  Card,
  Typography,
  Box,
  IconButton,
  Avatar,
  Stack,
  useMediaQuery,
  Tooltip,
  TooltipProps,
  tooltipClasses,
  Divider,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import LinenFabric from "../../images/fabric/linen.png";
import VelvetFabric from "../../images/fabric/velvet.png";
import SilkFabric from "../../images/fabric/silk.png";

import FloralOrnament1 from "../../images/floral-ornament/floral-ornament-1.png";
import FloralOrnament2 from "../../images/floral-ornament/floral-ornament-2.png";
import FloralOrnament3 from "../../images/floral-ornament/floral-ornament-3.png";

import GeometricOrnament1 from "../../images/geometric-ornament/geometric-ornament-1.png";
import GeometricOrnament2 from "../../images/geometric-ornament/geometric-ornament-2.png";
import GeometricOrnament3 from "../../images/geometric-ornament/geometric-ornament-3.png";

import SizeTable from "../../images/size-table.png";

import { FABRIC_TYPES } from "./constants";
import { ORNAMENTS_ENUM, SIZE } from "../product-item/constants";
import { blue, deepOrange, deepPurple, orange } from "@mui/material/colors";
import { useState } from "react";

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: "none",
    backgroundColor: theme.palette.common.white,
  },
}));

const iconButtonStyles = {
  "&:hover": {
    outline: "1px solid #1976d2",
  },
};

interface SettingsColumnProps {
  product: { src: string; alt: string; name: string; id: string };
  fabricType: FABRIC_TYPES;
  ornamentType: ORNAMENTS_ENUM | null;
  productSize: SIZE;
  price: number;
  onSetFabricType: (fabricType: FABRIC_TYPES) => void;
  onSetOrnamentType: (ornamentType: ORNAMENTS_ENUM | null) => void;
  onSetProductSize: (productSize: SIZE) => void;
}

const SettingsColumn = ({
  product,
  fabricType,
  ornamentType,
  productSize,
  price,
  onSetFabricType,
  onSetOrnamentType,
  onSetProductSize,
}: SettingsColumnProps) => {
  const matches = useMediaQuery("(min-width:600px)");

  const [isShowSizeTable, setIsShowSizeTable] = useState(false);

  return (
    <Box position={matches ? "absolute" : "unset"} right={40} bottom={40}>
      <Card sx={{ minWidth: 275, mb: 2, p: 2 }}>
        <Typography sx={{ fontSize: 18 }} color="text.primary">
          {product.name}
        </Typography>

        <Typography color="text.secondary">{price} грн.</Typography>
      </Card>

      <Card sx={{ minWidth: 275, p: 2 }}>
        {isShowSizeTable ? (
          <Box display="flex" flexDirection="column" alignItems="center">
            <Box
              display="flex"
              alignItems="center"
              justifyContent="flex-start"
              width="100%"
              sx={{ cursor: "pointer" }}
              onClick={() => setIsShowSizeTable(!isShowSizeTable)}
            >
              <ArrowBackIosNewIcon fontSize="small" />
              <Typography color="text.secondary" fontWeight="bold">
                Back
              </Typography>
            </Box>
            <Divider sx={{ my: 1 }} />
            <img alt="size-table" src={SizeTable} style={{ maxWidth: 235 }} />
          </Box>
        ) : (
          <>
            <Typography color="text.secondary" my={1}>
              <strong>Fabric type:</strong> {fabricType}
            </Typography>

            <Stack direction="row" spacing={1}>
              <CustomTooltip
                title={
                  <img
                    alt="linen fabric"
                    src={LinenFabric}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() => onSetFabricType(FABRIC_TYPES.Linen)}
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      fabricType === FABRIC_TYPES.Linen
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="linen fabric" src={LinenFabric} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="silk fabric"
                    src={SilkFabric}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() => onSetFabricType(FABRIC_TYPES.Silk)}
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      fabricType === FABRIC_TYPES.Silk
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="silk fabric" src={SilkFabric} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="velvet fabric"
                    src={VelvetFabric}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() => onSetFabricType(FABRIC_TYPES.Velvet)}
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      fabricType === FABRIC_TYPES.Velvet
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="velvet fabric" src={VelvetFabric} />
                </IconButton>
              </CustomTooltip>
            </Stack>

            <Typography color="text.secondary" fontWeight="bold" my={1}>
              Flower Ornaments
            </Typography>

            <Stack direction="row" spacing={1}>
              <CustomTooltip
                title={
                  <img
                    alt="floral-ornament-1"
                    src={FloralOrnament1}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_1)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_1
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="floral-ornament-1" src={FloralOrnament1} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="floral-ornament-2"
                    src={FloralOrnament2}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_2)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_2
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="floral-ornament-2" src={FloralOrnament2} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="floral-ornament-3"
                    src={FloralOrnament3}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_3)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_3
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="floral-ornament-3" src={FloralOrnament3} />
                </IconButton>
              </CustomTooltip>
            </Stack>

            <Typography color="text.secondary" fontWeight="bold" my={1}>
              Geometric Ornaments
            </Typography>

            <Stack direction="row" spacing={1}>
              <CustomTooltip
                title={
                  <img
                    alt="geometric-ornament-1"
                    src={GeometricOrnament1}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_1)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_1
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="geometric-ornament-1" src={GeometricOrnament1} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="geometric-ornament-2"
                    src={GeometricOrnament2}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_2)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_2
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="geometric-ornament-2" src={GeometricOrnament2} />
                </IconButton>
              </CustomTooltip>

              <CustomTooltip
                title={
                  <img
                    alt="geometric-ornament-3"
                    src={GeometricOrnament3}
                    style={{ width: 350 }}
                  />
                }
                arrow
              >
                <IconButton
                  onClick={() =>
                    onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_3)
                  }
                  sx={{
                    ...iconButtonStyles,
                    outline:
                      ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_3
                        ? "1px solid #1976d2"
                        : "",
                  }}
                >
                  <Avatar alt="geometric-ornament-3" src={GeometricOrnament3} />
                </IconButton>
              </CustomTooltip>
            </Stack>

            <Typography color="text.secondary" fontWeight="bold" my={1}>
              Size
            </Typography>

            <Stack direction="row" spacing={1}>
              <IconButton
                onClick={() => onSetProductSize(SIZE.S)}
                sx={{
                  ...iconButtonStyles,
                  outline: productSize === SIZE.S ? "1px solid #1976d2" : "",
                }}
              >
                <Avatar sx={{ bgcolor: orange[500] }}>{SIZE.S}</Avatar>
              </IconButton>

              <IconButton
                onClick={() => onSetProductSize(SIZE.M)}
                sx={{
                  ...iconButtonStyles,
                  outline: productSize === SIZE.M ? "1px solid #1976d2" : "",
                }}
              >
                <Avatar sx={{ bgcolor: deepOrange[500] }}>{SIZE.M}</Avatar>
              </IconButton>

              <IconButton
                onClick={() => onSetProductSize(SIZE.L)}
                sx={{
                  ...iconButtonStyles,
                  outline: productSize === SIZE.L ? "1px solid #1976d2" : "",
                }}
              >
                <Avatar sx={{ bgcolor: deepPurple[500] }}>{SIZE.L}</Avatar>
              </IconButton>

              <IconButton
                onClick={() => onSetProductSize(SIZE.CUSTOM)}
                sx={{
                  ...iconButtonStyles,
                  outline:
                    productSize === SIZE.CUSTOM ? "1px solid #1976d2" : "",
                }}
              >
                <Avatar sx={{ bgcolor: blue[500], fontSize: 9 }}>
                  {SIZE.CUSTOM}
                </Avatar>
              </IconButton>
            </Stack>

            <Typography
              color="text.secondary"
              fontWeight="bold"
              my={1}
              display="flex"
              alignItems="center"
              sx={{ cursor: "pointer" }}
              onClick={() => setIsShowSizeTable(!isShowSizeTable)}
            >
              Size Table <ArrowForwardIosIcon fontSize="small" sx={{ ml: 1 }} />
            </Typography>
          </>
        )}
      </Card>

      <Button fullWidth variant="contained" sx={{ mt: 2 }}>
        Order Product
      </Button>
    </Box>
  );
};

export default SettingsColumn;
