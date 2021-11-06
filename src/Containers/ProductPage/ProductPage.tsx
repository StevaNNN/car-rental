import React, { useState } from "react";
import { useSelector } from "react-redux";
import { productState } from "./ProductPageSlice/product-slice";
import ProductItem from "../../Components/ProductItem/ProductItem";
import Container from "../../Components/UI/Container/Container";
import Button from "../../Components/UI/Button/Button";
import { useHistory } from "react-router";
import { useCookies } from "react-cookie";
import { GUEST_COOKIE_NAME, validateForm } from "../../utils";

export const ProductPage = () => {
  const history = useHistory();
  const product = useSelector((state: productState) => state.product);
  const [cookies, setCookie] = useCookies([GUEST_COOKIE_NAME]);
  const handleCookie = (value: string) => setCookie(`${GUEST_COOKIE_NAME}`, `${value}`, { path: "/" });
  const onAddItemToCart = () => handleCookie(JSON.stringify(product));

  const goBackHandler = () => {
    history.goBack();
  }

  return (
    <Container
      vBox
      alignItemsStart
    >
      <Button onClick={goBackHandler}>
        Go back to all products
      </Button>
      <Container hBox wrap>
        {validateForm(product) && <ProductItem
          addItemToCart={onAddItemToCart}
          {...product}
          withAddToCartButton
        />}
      </Container>
    </Container>
  );
}