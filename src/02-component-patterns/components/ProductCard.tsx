import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
}: ProductCardProps) => {
  const { counter, increaseBy } = useProduct({ onChange, product });
  return (
    <Provider value={{ counter, increaseBy, product }}>
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children}
      </div>
    </Provider>
  );
};

export default ProductCard;
