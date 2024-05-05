import { Fragment, useState } from "react";
import AvailableProduct from "./AvailableProduct";
import ProductSummary from "./ProductSummary";
import Cart from "../Cart/Cart";
import CardProvider from "../../store/CardProvider";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";

const Products = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CardProvider>
      <Fragment>
        {cartIsShown && <Cart onClose={hideCartHandler} />}
        <Header onShowCart={showCartHandler} />
        <ProductSummary />
        <AvailableProduct />
        <Footer />
      </Fragment>
    </CardProvider>
  );
};

export default Products;
