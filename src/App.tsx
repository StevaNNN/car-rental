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
import { GUEST_COOKIE_NAME } from "./util";

const App = (props: any) => {
  const dispatch = useDispatch();
  // const guestData = useSelector((state: guestState) => state.guest);

  const { allCookies } = props;

  useEffect(() => {
    dispatch(getCarData());
    if(allCookies && Object.keys(allCookies).length > 0) {
      dispatch(updateCookie({
        name: allCookies[GUEST_COOKIE_NAME].name,
        model: allCookies[GUEST_COOKIE_NAME].model,
        price: allCookies[GUEST_COOKIE_NAME].price,
        img: allCookies[GUEST_COOKIE_NAME].img,
        airCondition: allCookies[GUEST_COOKIE_NAME].airCondition,
        transmission: allCookies[GUEST_COOKIE_NAME].transmission,
        luggage: allCookies[GUEST_COOKIE_NAME].luggage,
        doors: allCookies[GUEST_COOKIE_NAME].doors,
        passengers: allCookies[GUEST_COOKIE_NAME].passengers,
        pickUpAddress: allCookies[GUEST_COOKIE_NAME].pickUpAddress,
        leaveAddress: allCookies[GUEST_COOKIE_NAME].leaveAddress,
        pickUpDate: allCookies[GUEST_COOKIE_NAME].pickUpDate,
        leaveDate: allCookies[GUEST_COOKIE_NAME].leaveDate,
        trailer: allCookies[GUEST_COOKIE_NAME].trailer,
        gps: allCookies[GUEST_COOKIE_NAME].gps,
        childSeat: allCookies[GUEST_COOKIE_NAME].childSeat,
        extraDriver: allCookies[GUEST_COOKIE_NAME].extraDriver,
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