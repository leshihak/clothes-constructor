import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

import SettingsColumn from "../settings-column/SettingsColumn";

import { FABRIC_TYPES } from "../settings-column/constants";
import { PRODUCT_LIST } from "../product-index/constants";

import TShirtLongSleevesLinen from "../../images/long-sleeves/t-shirt-long-sleeves-linen.png";
import TShirtLongSleevesSilk from "../../images/long-sleeves/t-shirt-long-sleeves-silk.png";
import TShirtLongSleevesVelvet from "../../images/long-sleeves/t-shirt-long-sleeves-velvet.png";

import TShirtShortSleevesLinen from "../../images/short-sleeves/t-shirt-short-sleeves-linen.png";
import TShirtShortSleevesSilk from "../../images/short-sleeves/t-shirt-short-sleeves-silk.png";
import TShirtShortSleevesVelvet from "../../images/short-sleeves/t-shirt-short-sleeves-velvet.png";

import {
  LONG_ALL_ORNAMENTS,
  ORNAMENTS_ENUM,
  SHORT_ALL_ORNAMENTS,
  SIZE,
} from "./constants";

const ProductItem = () => {
  const { productId } = useParams();

  const selectedProduct = PRODUCT_LIST.find(({ id }) => id === productId);

  const [fabricType, setFabricType] = useState(FABRIC_TYPES.Linen);
  const [productSize, setProductSize] = useState(SIZE.S);
  const [ornamentType, setOrnamentType] = useState<ORNAMENTS_ENUM | null>(null);
  const [selectedImage, setSelectedImage] = useState(() =>
    selectedProduct?.type === "t-shirt-long-sleeves"
      ? TShirtLongSleevesLinen
      : TShirtShortSleevesLinen
  );

  useEffect(() => {
    switch (selectedProduct?.type) {
      case "t-shirt-long-sleeves":
        switch (fabricType) {
          case FABRIC_TYPES.Linen:
            setSelectedImage(TShirtLongSleevesLinen);
            break;
          case FABRIC_TYPES.Silk:
            setSelectedImage(TShirtLongSleevesSilk);
            break;
          case FABRIC_TYPES.Velvet:
            setSelectedImage(TShirtLongSleevesVelvet);
            break;
        }
        break;

      case "t-shirt-short-sleeves":
        switch (fabricType) {
          case FABRIC_TYPES.Linen:
            setSelectedImage(TShirtShortSleevesLinen);
            break;
          case FABRIC_TYPES.Silk:
            setSelectedImage(TShirtShortSleevesSilk);
            break;
          case FABRIC_TYPES.Velvet:
            setSelectedImage(TShirtShortSleevesVelvet);
            break;
        }
        break;
    }
  }, [selectedProduct?.type, fabricType]);

  return (
    <>
      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <img
          src={selectedImage}
          alt={selectedProduct?.alt}
          width="100%"
          height="auto"
          loading="lazy"
          style={{ maxWidth: 500 }}
        />

        {selectedProduct?.type === "t-shirt-long-sleeves" &&
          LONG_ALL_ORNAMENTS[ornamentType!]?.map(
            ({ imageSrc, imageAlt, styles }) => (
              <img
                key={imageAlt}
                src={imageSrc}
                alt={imageAlt}
                style={{
                  maxWidth: 50,
                  position: "absolute",
                  ...styles,
                }}
              />
            )
          )}

        {selectedProduct?.type === "t-shirt-short-sleeves" &&
          SHORT_ALL_ORNAMENTS[ornamentType!]?.map(
            ({ imageSrc, imageAlt, styles }) => (
              <img
                key={imageAlt}
                src={imageSrc}
                alt={imageAlt}
                style={{
                  maxWidth: 50,
                  position: "absolute",
                  ...styles,
                }}
              />
            )
          )}
      </Box>

      <SettingsColumn
        product={selectedProduct!}
        fabricType={fabricType}
        ornamentType={ornamentType}
        productSize={productSize}
        onSetFabricType={setFabricType}
        onSetOrnamentType={setOrnamentType}
        onSetProductSize={setProductSize}
      />
    </>
  );
};

export default ProductItem;
