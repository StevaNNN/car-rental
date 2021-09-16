import React from "react";
import {NavLink} from "react-router-dom";
import classes from './Header.module.scss';
import Container from "../../UI/Container/Container";

const Header = () => {
  return(
    <Container
      className={classes.ViewportHeader}
      htmlTag={'header'}
    >
      <Container
        htmlTag={'nav'}
        justifyContentBetween
        hBox
      >
        <Container>
          <NavLink
            to={'/home'}
            activeClassName={classes.LinkActive}
            className={classes.Link}
          >
            <img src="https://placeimg.com/32/32/tech" alt="logo"/>
          </NavLink>
        </Container>
        <Container>
          <NavLink
            to={'/home'}
            activeClassName={classes.LinkActive}
            className={classes.Link}
          >
            Home
          </NavLink>
          <NavLink
            to={'/about'}
            activeClassName={classes.LinkActive}
            className={classes.Link}
          >
            About
          </NavLink>
          <NavLink
            to={'/products'}
            activeClassName={classes.LinkActive}
            className={classes.Link}
          >
            Products
          </NavLink>
        </Container>
        <Container>
          <NavLink
            to={'/cart'}
            activeClassName={classes.LinkActive}
            className={classes.Link}
          >
            Cart
          </NavLink>
        </Container>
      </Container>
    </Container>
  )
}

export default Header;