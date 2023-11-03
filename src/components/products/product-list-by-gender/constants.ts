import ManTShirtLongSleevesLinen from "../../images/long-sleeves/man/t-shirt-long-sleeves-linen.png";
import WomanTShirtLongSleevesLinen from "../../images/long-sleeves/woman/t-shirt-long-sleeves-linen.jpg";

import ManTShirtShortSleevesLinen from "../../images/short-sleeves/man/t-shirt-short-sleeves-linen.png";
import WomanTShirtShortSleevesLinen from "../../images/short-sleeves/woman/t-shirt-short-sleeves-linen.jpg";

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
];

export enum Gender {
  woman = "woman",
  man = "man",
}

export const PRODUCT_LIST_BY_GENDER = {
  [Gender.woman]: PRODUCT_LIST_FOR_WOMAN,
  [Gender.man]: PRODUCT_LIST_FOR_MAN,
};
