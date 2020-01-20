import React from "react";
import "materialize-css/sass/materialize.scss";
import CarouselComponent from "../components/carousel";

export class HomePageComponentTemplate extends React.Component {
  // const { page } = props;

  constructor(props) {
    super(props);
  }

  render() {
    const { page } = this.props;
  return (
    <div className="container">
     <CarouselComponent content={page.sliderImages} />
     <div className="row"><div className="col s12"><br></br></div></div>
     <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
  }
};

export default HomePageComponentTemplate;

