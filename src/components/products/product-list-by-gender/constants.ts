import ManTShirtLongSleevesLinen from "../../images/long-sleeves/man/t-shirt-long-sleeves-linen.png";
import ManTShirtShortSleevesLinen from "../../images/short-sleeves/man/t-shirt-short-sleeves-linen.png";
import Man1 from "../../images/man/1.jpg";
import Man2 from "../../images/man/2.png";

import WomanTShirtShortSleevesLinen from "../../images/short-sleeves/woman/t-shirt-short-sleeves-linen.jpg";
import WomanTShirtLongSleevesLinen from "../../images/long-sleeves/woman/t-shirt-long-sleeves-linen.jpg";
import Woman1 from "../../images/woman/1.jpg";
import Woman3 from "../../images/woman/3.jpg";
import Woman4 from "../../images/woman/4.jpg";
import Woman5 from "../../images/woman/5.jpg";
import Woman6 from "../../images/woman/6.jpg";
import Woman7 from "../../images/woman/7.jpg";
import Woman8 from "../../images/woman/8.jpg";
import Woman9 from "../../images/woman/9.jpg";

export const PRODUCT_LIST_FOR_MAN = [
  {
    src: ManTShirtLongSleevesLinen,
    alt: "Man T-Shirt Long Sleeves",
    name: "Man T-Shirt Long Sleeves",
    type: "t-shirt-long-sleeves",
    id: "1",
  },
  {
    src: ManTShirtShortSleevesLinen,
    alt: "ManT-Shirt Short Sleeves",
    name: "Man T-Shirt Short Sleeves",
    type: "t-shirt-short-sleeves",
    id: "2",
  },
  {
    src: Man1,
    alt: "Man1",
    name: "Man1",
    type: "t-shirt-short-sleeves", // TODO
    id: "3",
  },
  {
    src: Man2,
    alt: "Man2",
    name: "Man2",
    type: "t-shirt-short-sleeves", // TODO
    id: "4",
  },
];

export const PRODUCT_LIST_FOR_WOMAN = [
  {
    src: WomanTShirtLongSleevesLinen,
    alt: "Woman T-Shirt Long Sleeves",
    name: "Woman T-Shirt Long Sleeves",
    type: "t-shirt-long-sleeves",
    id: "11",
  },
  {
    src: WomanTShirtShortSleevesLinen,
    alt: "Woman T-Shirt Short Sleeves",
    name: "Woman T-Shirt Short Sleeves",
    type: "t-shirt-short-sleeves",
    id: "12",
  },
  {
    src: Woman1,
    alt: "Woman1",
    name: "Woman1",
    type: "t-shirt-short-sleeves",
    id: "13",
  },
  {
    src: Woman3,
    alt: "Woman3",
    name: "Woman3",
    type: "t-shirt-short-sleeves",
    id: "15",
  },
  {
    src: Woman4,
    alt: "Woman4",
    name: "Woman4",
    type: "t-shirt-short-sleeves",
    id: "16",
  },
  {
    src: Woman5,
    alt: "Woman5",
    name: "Woman5",
    type: "t-shirt-short-sleeves",
    id: "17",
  },
  {
    src: Woman6,
    alt: "Woman6",
    name: "Woman6",
    type: "t-shirt-short-sleeves",
    id: "18",
  },
  {
    src: Woman7,
    alt: "Woman7",
    name: "Woman7",
    type: "t-shirt-short-sleeves",
    id: "19",
  },
  {
    src: Woman8,
    alt: "Woman8",
    name: "Woman8",
    type: "t-shirt-short-sleeves",
    id: "20",
  },
  {
    src: Woman9,
    alt: "Woman9",
    name: "Woman9",
    type: "t-shirt-short-sleeves",
    id: "21",
  },
];

export enum Gender {
  woman = "woman",
  man = "man",
}

export const PRODUCT_LIST_BY_GENDER = {
  [Gender.woman]: PRODUCT_LIST_FOR_WOMAN,
  [Gender.man]: PRODUCT_LIST_FOR_MAN,
};
