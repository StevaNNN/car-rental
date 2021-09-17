import React from "react";
import axios from "axios";
import Header from "./Components/Layout/Header/Header";
import Body from "./Components/Layout/Body/Body";
import Footer from "./Components/Layout/Footer/Footer";
import Container from "./Components/UI/Container/Container";
import classes from './App.module.scss';
import './Theme/main.scss';

axios.defaults.baseURL = 'https://car-rental-330ee-default-rtdb.europe-west1.firebasedatabase.app';

function App() {
  return (
    <Container vBox className={classes.Viewport}>
      <Header />
      <Body />
      <Footer />
    </Container>
  );
}

export default App;