import React from "react";
import { useSelector } from "react-redux";
import { productItemState } from "./ProductItemPageSlice/product-item-slice";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Container from "../../Components/UI/Container/Container";
import Button from "../../Components/UI/Button/Button";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import { GUEST_COOKIE_NAME } from "../../utils";

export const ProductItemPage = () => {
  const selectedCarData = useSelector((state: productItemState) => state.productItem);
  const history = useHistory();
  const [cookies, setCookie] = useCookies([GUEST_COOKIE_NAME]);
  const handleCookie = (value: string) => setCookie(`${GUEST_COOKIE_NAME}`, `${value}`, { path: "/" });

  const onAddItemToCart = () => {
    handleCookie(JSON.stringify(selectedCarData))
  };

  return (
    <Container
      vBox
      alignItemsStart
    >
      <Button onClick={() => history.goBack()}>
        Go back to all products
      </Button>
      <Container hBox wrap>
        <ProductItem
          addItemToCart={onAddItemToCart}
          {...selectedCarData}
          withAddToCartButton
        />
      </Container>
    </Container>
  );
}