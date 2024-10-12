import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";

export interface ProductImgProps {
  img?: string;
  className?: string;
}

export const ProductImage = ({ img, className }: ProductImgProps) => {
  const { product } = useContext(ProductContext);
  let imgToShow: string;

  if (img) imgToShow = img;
  else if (product.img) imgToShow = product.img;
  else imgToShow = noImage;

  return (
    <img
      src={imgToShow}
      className={`${styles.productImg} ${className}`}
      alt={"Product Image"}
    />
  );
};
