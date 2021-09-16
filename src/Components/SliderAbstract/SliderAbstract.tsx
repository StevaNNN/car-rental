import React from 'react';
import Slider from "react-slick";
import classes from './SliderAbstract.module.scss';
import Container from "../UI/Container/Container";

const SliderAbstract = (props: any) => {

  let sliderSettings = {
    infinite: false,
    slidesToShow: 1,
    speed: 250,
    slidesToScroll: 1
  }

  return (
    <Container className={classes.SliderWrap}>
      <Slider{...sliderSettings}>
        <img src="https://placeimg.com/640/480/any" alt="alt" />
        <img src="https://placeimg.com/640/480/any" alt="alt" />
        <img src="https://placeimg.com/640/480/any" alt="alt" />
      </Slider>
    </Container>
  );
}
export default SliderAbstract