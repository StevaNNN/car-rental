import React from "react";
import classes from './Footer.module.scss';
import Container from "../../UI/Container/Container";

const Footer = () => {
  return(
    <Container
      className={classes.ViewportFooter}
      htmlTag={'footer'}
    >
      Footer
    </Container>
  )
}

export default Footer;