import { useNavigate, useParams } from "react-router-dom";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import DownloadIcon from "@mui/icons-material/Download";
import CallIcon from "@mui/icons-material/Call";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import SettingsColumn from "../settings-column/SettingsColumn";

import { FABRIC_TYPES } from "../settings-column/constants";

import ManTShirtLongSleevesLinen from "../../images/long-sleeves/man/t-shirt-long-sleeves-linen.png";
import ManTShirtLongSleevesSilk from "../../images/long-sleeves/man/t-shirt-long-sleeves-silk.png";
import ManTShirtLongSleevesVelvet from "../../images/long-sleeves/man/t-shirt-long-sleeves-velvet.png";

import WomanTShirtLongSleevesLinen from "../../images/long-sleeves/woman/t-shirt-long-sleeves-linen.jpg";

import ManTShirtShortSleevesLinen from "../../images/short-sleeves/man/t-shirt-short-sleeves-linen.png";
import ManTShirtShortSleevesSilk from "../../images/short-sleeves/man/t-shirt-short-sleeves-silk.png";
import ManTShirtShortSleevesVelvet from "../../images/short-sleeves/man/t-shirt-short-sleeves-velvet.png";

import WomanTShirtShortSleevesLinen from "../../images/short-sleeves/woman/t-shirt-short-sleeves-linen.jpg";

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
import {
  Gender,
  PRODUCT_LIST_BY_GENDER,
} from "../product-list-by-gender/constants";

const ProductItem = () => {
  const { productId, gender } = useParams();
  const navigate = useNavigate();
  const printRef = useRef();

  const selectedProduct = PRODUCT_LIST_BY_GENDER[gender as Gender].find(
    ({ id }) => id === productId
  );

  const [price, setPrice] = useState(0);
  const [fabricType, setFabricType] = useState(FABRIC_TYPES.Linen);
  const [productSize, setProductSize] = useState(SIZE.S);
  const [ornamentType, setOrnamentType] = useState<ORNAMENTS_ENUM | null>(null);
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    switch (gender) {
      case Gender.man:
        switch (selectedProduct?.type) {
          case "t-shirt-long-sleeves":
            switch (fabricType) {
              case FABRIC_TYPES.Linen:
                setSelectedImage(ManTShirtLongSleevesLinen);
                break;
              case FABRIC_TYPES.Silk:
                setSelectedImage(ManTShirtLongSleevesSilk);
                break;
              case FABRIC_TYPES.Velvet:
                setSelectedImage(ManTShirtLongSleevesVelvet);
                break;
            }
            break;

          case "t-shirt-short-sleeves":
            switch (fabricType) {
              case FABRIC_TYPES.Linen:
                setSelectedImage(ManTShirtShortSleevesLinen);
                break;
              case FABRIC_TYPES.Silk:
                setSelectedImage(ManTShirtShortSleevesSilk);
                break;
              case FABRIC_TYPES.Velvet:
                setSelectedImage(ManTShirtShortSleevesVelvet);
                break;
            }
            break;
        }
        break;
      case Gender.woman:
        switch (selectedProduct?.type) {
          case "t-shirt-long-sleeves":
            switch (fabricType) {
              case FABRIC_TYPES.Linen:
                setSelectedImage(WomanTShirtLongSleevesLinen);
                break;
              case FABRIC_TYPES.Silk:
                setSelectedImage(WomanTShirtLongSleevesLinen);
                break;
              case FABRIC_TYPES.Velvet:
                setSelectedImage(WomanTShirtLongSleevesLinen);
                break;
            }
            break;

          case "t-shirt-short-sleeves":
            switch (fabricType) {
              case FABRIC_TYPES.Linen:
                setSelectedImage(WomanTShirtShortSleevesLinen);
                break;
              case FABRIC_TYPES.Silk:
                setSelectedImage(WomanTShirtShortSleevesLinen);
                break;
              case FABRIC_TYPES.Velvet:
                setSelectedImage(WomanTShirtShortSleevesLinen);
                break;
            }
            break;
        }
        break;
    }
  }, [selectedProduct?.type, gender, fabricType]);

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
      link.download = "image";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <>
      <Box width="100%" display="flex" justifyContent="space-between">
        <Box
          mr={1}
          height={40}
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

        <Box>
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
