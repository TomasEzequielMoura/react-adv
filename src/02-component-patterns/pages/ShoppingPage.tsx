import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import coffee from "../coffee-mug.png";
import coffee2 from "../coffee-mug2.png";
import "../styles/custom-styles.css";
import { useState } from "react";
import { onChangeArgs, Product } from "../interfaces/interfaces";

const products: Product[] = [
  {
    id: "1",
    title: "Coffee Mug - Card",
    img: coffee,
  },

  {
    id: "2",
    title: "Coffee Mug - Meme",
    img: coffee2,
  },
];

interface ProductInCart extends Product {
  count: number;
}

const ShoppingPage = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    console.log("onProductCountChange", count, product);
  };

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((product) => (
          <ProductCard
            onChange={(evt) => onProductCountChange(evt)}
            key={product.id}
            className={"bg-dark"}
            product={product}
          >
            <ProductImage className={"custom-image"} />
            <ProductTitle className={"text-white"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}
      </div>

      <div className={"shopping-cart"}>
        {products.map((product) => (
          <ProductCard
            style={{ width: "100px" }}
            key={product.id}
            className={"bg-dark"}
            product={product}
          >
            <ProductImage className={"custom-image"} />
            <ProductButtons className={"custom-buttons"} />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};

export default ShoppingPage;
