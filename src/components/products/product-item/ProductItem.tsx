import { useParams } from "react-router-dom";
import { Box, IconButton, Tooltip } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import CallIcon from "@mui/icons-material/Call";

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
  FABRIC_PRICE,
  LONG_ALL_ORNAMENTS,
  LONG_ORNAMENT_PRICE,
  ORNAMENTS_ENUM,
  SHORT_ALL_ORNAMENTS,
  SHORT_ORNAMENT_PRICE,
  SIZE,
  SIZE_PRICE,
} from "./constants";
import html2canvas from "html2canvas";

const ProductItem = () => {
  const { productId } = useParams();
  const printRef = useRef();

  const selectedProduct = PRODUCT_LIST.find(({ id }) => id === productId);

  const [price, setPrice] = useState(0);
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

  useEffect(() => {
    const array = [];

    array.push(FABRIC_PRICE[fabricType]);
    array.push(SIZE_PRICE[productSize]);

    if (selectedProduct?.type === "t-shirt-long-sleeves") {
      array.push(LONG_ORNAMENT_PRICE[ornamentType!]);
    }

    if (selectedProduct?.type === "t-shirt-short-sleeves") {
      array.push(SHORT_ORNAMENT_PRICE[ornamentType!]);
    }

    const sumWithInitial = array
      .filter((x) => x)
      .reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    setPrice(sumWithInitial);
  }, [fabricType, productSize, ornamentType, selectedProduct?.type]);

  const handleDownloadImage = async () => {
    const element: HTMLElement | undefined = printRef.current;
    const canvas = await html2canvas(element!);

    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "image.jpg";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <>
      <Box width="100%">
        <Tooltip title="Call Our Manager" sx={{ mr: 1 }}>
          <IconButton onClick={() => {}} color="primary">
            <CallIcon />
          </IconButton>
        </Tooltip>

        <Tooltip title="Download Image">
          <IconButton onClick={handleDownloadImage} color="primary">
            <DownloadIcon />
          </IconButton>
        </Tooltip>
      </Box>

      <Box
        p={2}
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
        ref={printRef}
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
        price={price}
        onSetFabricType={setFabricType}
        onSetOrnamentType={setOrnamentType}
        onSetProductSize={setProductSize}
      />
    </>
  );
};

export default ProductItem;
