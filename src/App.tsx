import React, { useEffect } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import Footer from "./Components/Layout/Footer/Footer";
import Container from "./Components/UI/Container/Container";
import classes from './App.module.scss';
import './Theme/main.scss';
import { useDispatch, useSelector } from "react-redux";
import { getCarData } from "./actions/product-actions";
import { guestState, updateCookie } from "./store/guest-store";
import { withCookies } from "react-cookie";

const App = (props: any) => {
  const dispatch = useDispatch();
  const guestData = useSelector((state: guestState) => state.guest);
  console.log(guestData)
  console.log(props)
  const {
    allCookies
  } = props;
  useEffect(() => {
    dispatch(getCarData());
    if(allCookies && Object.keys(allCookies).length > 0) {
      dispatch(updateCookie({
        name: allCookies["guest-cookie"].name,
        model: allCookies["guest-cookie"].model,
        price: allCookies["guest-cookie"].price
      }));
    }
  }, [allCookies, dispatch]);

  return (
    <Container
      vBox
      className={classes.Viewport}
    >
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default withCookies(App);