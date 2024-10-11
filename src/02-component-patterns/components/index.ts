export { ProductButtons } from "./ProductButtons";
export { ProductTitle } from "./ProductTitle";
export { ProductImage } from "./ProductImage";

import { ProductButtons } from "./ProductButtons";
import { ProductTitle } from "./ProductTitle";
import { ProductImage } from "./ProductImage";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardHOCProps } from "../interfaces/interfaces";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Buttons: ProductButtons,
  Image: ProductImage,
});

export default ProductCard;
