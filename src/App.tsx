import React, { useEffect } from "react";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import Footer from "./Components/Layout/Footer/Footer";
import Container from "./Components/UI/Container/Container";
import classes from './App.module.scss';
import './Theme/main.scss';
import { useDispatch } from "react-redux";
import { getCarData } from "./actions/product-actions";
import { updateCookie } from "./store/guest-store";
import { withCookies } from "react-cookie";

const App = (props: any) => {
  const dispatch = useDispatch();
  // const guestData = useSelector((state: guestState) => state.guest);

  const {
    allCookies
  } = props;
  useEffect(() => {
    dispatch(getCarData());
    if(allCookies && Object.keys(allCookies).length > 0) {
      dispatch(updateCookie({
        name: allCookies["guest-cookie"].name,
        model: allCookies["guest-cookie"].model,
        price: allCookies["guest-cookie"].price,
        img: allCookies["guest-cookie"].img,
        airCondition: allCookies["guest-cookie"].airCondition,
        transmission: allCookies["guest-cookie"].transmission,
        luggage: allCookies["guest-cookie"].luggage,
        doors: allCookies["guest-cookie"].doors,
        passengers: allCookies["guest-cookie"].passengers,
        trailer: allCookies["guest-cookie"].trailer,
        gps: allCookies["guest-cookie"].gps,
        childSeat: allCookies["guest-cookie"].childSeat,
        extraDriver: allCookies["guest-cookie"].extraDriver,
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