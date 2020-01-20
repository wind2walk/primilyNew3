import React from "react";
import PropTypes from "prop-types";
import Carousel from 'react-bootstrap/Carousel';
import Helmet from "react-helmet";
import "materialize-css/sass/materialize.scss";
import {withPrefix} from "gatsby";

export const CarouselComponent = ({content, className}) => (

  // </div>
  <div>
  <div className="carousel carousel-slider center">
  {content.map((image, index) => (
  <div className="carousel-item blue white-text" href="#one!" key={index}>
    <img src={image.imagesrc} className="responsive-img" alt={image.imagealt}/>
  </div>
  ))}
  {/* <div className="carousel-item amber white-text" href="#two!">
    <h2>Second Panel</h2>
    <p className="white-text">This is your second panel</p>
  </div>
  <div className="carousel-item green white-text" href="#three!">
    <h2>Third Panel</h2>
    <p className="white-text">This is your third panel</p>
  </div>
  <div className="carousel-item red white-text" href="#four!">
    <h2>Fourth Panel</h2>
    <p className="white-text">This is your fourth panel</p>
  </div> */}
</div>
  </div>
);

// HTMLContent.propTypes = {
//   content: PropTypes.node,
//   className: PropTypes.string,
// };

export default CarouselComponent;
