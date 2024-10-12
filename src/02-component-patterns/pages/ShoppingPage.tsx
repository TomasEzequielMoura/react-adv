import {
  ProductCard,
  ProductImage,
  ProductTitle,
  ProductButtons,
} from "../components";
import coffee from "../coffee-mug.png";
import "../styles/custom-styles.css";

const product = {
  id: "1",
  title: "Coffee Mug - Card",
  img: coffee,
};

const ShoppingPage = () => {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard product={product} style={{ backgroundColor: "#70D1F8" }}>
          <ProductCard.Image className={"custom-image"} />
          <ProductCard.Title title="test" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard className={"bg-dark"} product={product}>
          <ProductImage className={"custom-image"} />
          <ProductTitle className={"text-white"} />
          <ProductButtons className={"custom-buttons"} />
        </ProductCard>
      </div>
    </div>
  );
};

export default ShoppingPage;
