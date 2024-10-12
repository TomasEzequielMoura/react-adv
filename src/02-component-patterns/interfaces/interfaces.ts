import { CSSProperties, ReactElement } from "react";
import { ProductTitleProps } from "../components/ProductTitle";
import { ProductImgProps } from "../components/ProductImage";

export interface ProductCardProps {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  (Props: ProductCardProps): JSX.Element;
  Title: (Props: ProductTitleProps) => JSX.Element;
  Buttons: (Props: { className?: string }) => JSX.Element;
  Image: (Props: ProductImgProps) => JSX.Element;
}
