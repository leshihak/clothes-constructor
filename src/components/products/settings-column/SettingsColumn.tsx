import {
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  IconButton,
  Avatar,
  Stack,
} from "@mui/material";
import { KeyboardEvent, MouseEvent } from "react";

import LinenFabric from "../../images/fabric/linen.png";
import VelvetFabric from "../../images/fabric/velvet.png";
import SilkFabric from "../../images/fabric/silk.png";

import FloralOrnament1 from "../../images/floral-ornament/floral-ornament-1.png";
import FloralOrnament2 from "../../images/floral-ornament/floral-ornament-2.png";
import FloralOrnament3 from "../../images/floral-ornament/floral-ornament-3.png";

import GeometricOrnament1 from "../../images/geometric-ornament/geometric-ornament-1.png";
import GeometricOrnament2 from "../../images/geometric-ornament/geometric-ornament-2.png";
import GeometricOrnament3 from "../../images/geometric-ornament/geometric-ornament-3.png";

import { FABRIC_TYPES } from "./constants";
import { useState } from "react";
import SizeDrawer from "../size-drawer/SizeDrawer";
import { ORNAMENTS_ENUM } from "../product-item/constants";

const iconButtonStyles = {
  "&:hover": {
    outline: "1px solid green",
  },
};

interface SettingsColumnProps {
  product: { src: string; alt: string; name: string; id: string };
  fabricType: FABRIC_TYPES;
  ornamentType: ORNAMENTS_ENUM | null;
  onSetFabricType: (fabricType: FABRIC_TYPES) => void;
  onSetOrnamentType: (ornamentType: ORNAMENTS_ENUM | null) => void;
}

const SettingsColumn = ({
  product,
  fabricType,
  ornamentType,
  onSetFabricType,
  onSetOrnamentType,
}: SettingsColumnProps) => {
  const [isSizeDrawerOpen, setIsSizeDrawerOpen] = useState(false);

  const handleOpenSizeDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as KeyboardEvent).key === "Tab" ||
          (event as KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setIsSizeDrawerOpen(open);
    };

  return (
    <>
      <Box position="absolute" bottom={20} right={20}>
        <Card sx={{ minWidth: 275, mb: 2 }}>
          <CardContent>
            <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom>
              {product.name}
            </Typography>

            <Typography color="text.secondary">
              <strong>Fabric type:</strong> {fabricType}
            </Typography>

            <Stack direction="row" spacing={1} my={1}>
              <IconButton
                onClick={() => onSetFabricType(FABRIC_TYPES.Linen)}
                sx={{
                  ...iconButtonStyles,
                  outline:
                    fabricType === FABRIC_TYPES.Linen ? "1px solid green" : "",
                }}
              >
                <Avatar alt="linen fabric" src={LinenFabric} />
              </IconButton>

              <IconButton
                onClick={() => onSetFabricType(FABRIC_TYPES.Silk)}
                sx={{
                  ...iconButtonStyles,
                  outline:
                    fabricType === FABRIC_TYPES.Silk ? "1px solid green" : "",
                }}
              >
                <Avatar alt="silk fabric" src={SilkFabric} />
              </IconButton>

              <IconButton
                onClick={() => onSetFabricType(FABRIC_TYPES.Velvet)}
                sx={{
                  ...iconButtonStyles,
                  outline:
                    fabricType === FABRIC_TYPES.Velvet ? "1px solid green" : "",
                }}
              >
                <Avatar alt="velvet fabric" src={VelvetFabric} />
              </IconButton>
            </Stack>

            <Typography color="text.secondary" fontWeight="bold">
              Flower Ornaments
            </Typography>

            <Stack direction="row" spacing={1} my={1}>
              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_1)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_1
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="floral-ornament-1" src={FloralOrnament1} />
              </IconButton>

              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_2)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_2
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="floral-ornament-2" src={FloralOrnament2} />
              </IconButton>

              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.FLORAL_ORNAMENT_3)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.FLORAL_ORNAMENT_3
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="velvet fabric" src={FloralOrnament3} />
              </IconButton>
            </Stack>

            <Typography color="text.secondary" fontWeight="bold">
              Geometric Ornaments
            </Typography>

            <Stack direction="row" spacing={1} my={1}>
              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_1)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_1
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="geometric-ornament-1" src={GeometricOrnament1} />
              </IconButton>

              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_2)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_2
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="geometric-ornament-2" src={GeometricOrnament2} />
              </IconButton>

              <IconButton
                onClick={() =>
                  onSetOrnamentType(ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_3)
                }
                sx={{
                  ...iconButtonStyles,
                  outline:
                    ornamentType === ORNAMENTS_ENUM.GEOMETRIC_ORNAMENT_3
                      ? "1px solid green"
                      : "",
                }}
              >
                <Avatar alt="geometric-ornament-3" src={GeometricOrnament3} />
              </IconButton>
            </Stack>
          </CardContent>
        </Card>

        <Button
          variant="contained"
          fullWidth
          onClick={handleOpenSizeDrawer(true)}
        >
          Choose size & quantity
        </Button>
      </Box>

      <SizeDrawer
        open={isSizeDrawerOpen}
        onClose={handleOpenSizeDrawer(false)}
      />
    </>
  );
};

export default SettingsColumn;
