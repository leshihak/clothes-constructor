import TShirtLongSleevesLinen from "../../images/long-sleeves/t-shirt-long-sleeves-linen.png";

import TShirtShortSleevesLinen from "../../images/short-sleeves/t-shirt-short-sleeves-linen.png";

export const PRODUCT_LIST_FOR_MAN = [
  {
    src: TShirtLongSleevesLinen,
    alt: "Man T-Shirt Long Sleeves",
    name: "Man T-Shirt Long Sleeves",
    type: "t-shirt-long-sleeves",
    id: "1",
  },
  {
    src: TShirtShortSleevesLinen,
    alt: "ManT-Shirt Short Sleeves",
    name: "Man T-Shirt Short Sleeves",
    type: "t-shirt-short-sleeves",
    id: "2",
  },
];

export const PRODUCT_LIST_FOR_WOMAN = [
  {
    src: TShirtShortSleevesLinen,
    alt: "Woman T-Shirt Short Sleeves",
    name: "Woman T-Shirt Short Sleeves",
    type: "t-shirt-short-sleeves",
    id: "11",
  },
  {
    src: TShirtLongSleevesLinen,
    alt: "Woman T-Shirt Long Sleeves",
    name: "Woman T-Shirt Long Sleeves",
    type: "t-shirt-long-sleeves",
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
