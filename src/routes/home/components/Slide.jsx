import React from 'react';
import Slider from 'react-slick'
import PropTypes from 'prop-types';
import './Slide.css'

const PosterSlide = props => {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'posterSlide',
    dotsClass: 'posterSlide__dots'
  }
  
  return (
    <Slider { ...settings }>
      <div>
        <img className="posterSlide__image" src="/source/qingyu.jpg" alt=""/>
      </div>
      <div>
        <img className="posterSlide__image" src="/source/lunbo.jpg" alt=""/>
      </div>
    </Slider>
  );
};

PosterSlide.propTypes = {};

export default PosterSlide;
