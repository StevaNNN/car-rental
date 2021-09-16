import React from "react";
import classes from './Body.module.scss';
import {Switch, Route, Redirect} from "react-router";
import Container from "../../UI/Container/Container";
import HomePage from "../../HomePage/HomePage";
import AboutPage from "../../AboutPage/AboutPage";
import ProductsPage from "../../ProductsPage/ProductsPage";
import CartPage from "../../CartPage/CartPage";
import ProductItem from "../../ProductItem/ProductItem";

const Body = () => {
  return(
    <Container
      className={classes.ViewportBody}
      htmlTag={'main'}
    >
      <Switch>
        <Route path={'/'} exact>
          <Redirect to={'/home'}/>
        </Route>
        <Route path={'/home'}>
          <HomePage />
        </Route>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'/products'} exact>
          <ProductsPage />
        </Route>
        <Route path={'/products/:productId'}>
          <ProductItem />
        </Route>
        <Route path={'/cart'}>
          <CartPage />
        </Route>
      </Switch>
    </Container>
  )
}

export default Body;