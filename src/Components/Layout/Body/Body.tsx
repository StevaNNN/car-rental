import React from "react";
import classes from './Body.module.scss';
import {Switch, Route, Redirect} from "react-router";
import Container from "../../UI/Container/Container";
import HomePage from "../../HomePage/HomePage";
import AboutPage from "../../AboutPage/AboutPage";
import ProductsPage from "../../ProductsPage/ProductsPage";
import CartPage from "../../CartPage/CartPage";
import AdminPage from "../../AdminPage/AdminPage";
import {ProductItemPage} from "../../ProductItemPage/ProductItemPage";

const Body = () => {
  return(
    <Container
      className={classes.ViewportBody}
      htmlTag={'main'}
    >
      <Switch>
        <Route path={'/home'}>
          <HomePage />
        </Route>
        <Route path={'/about'}>
          <AboutPage />
        </Route>
        <Route path={'/admin'}>
          <AdminPage />
        </Route>
        <Route path={'/products'} exact>
          <ProductsPage />
        </Route>
        <Route path={'/products/:productId'}>
          <ProductItemPage />
        </Route>
        <Route path={'/cart'}>
          <CartPage />
        </Route>
        <Redirect to={'/home'}/>
      </Switch>
    </Container>
  )
}

export default Body;