import React from "react";
import "materialize-css/sass/materialize.scss";

export const DescribePageTemplate = ({describe}) => {
  // console.log(describe)
  return (
    <div>
      <div className="grey lighten-4">
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>

        <div className="container">

          <div className="row">
              {describe.describe.cards.map((card, index) => (
                <div className="col s4" key={index}>
                  <div children="row"> 
                <div className="col s1"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5 className="center-align">{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
                {card.image ? <div className="col s12"><img src={card.image} className="responsive-img"/></div> : <div></div>}
                </div>
                </div>
              ))}
              
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>

          <div className="row">
            <div className="col s1"></div>
            <div className="col s10">

              <div className="video-container">
                <iframe width="853" height="480" src={describe.describe.video.src} frameBorder="0" allowFullScreen></iframe>
              </div>
            </div>
            <div className="col s1">
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>



      <div className="container">
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row">
          <div className="col s4 center-align">
            <img src={describe.description.mainImage} className="responsive-img" alt="" />
            <div className="row"><div className="col s12"></div></div>
            <img src={describe.description.playstoreImage} className="responsive-img" height="67"
              width="232" />
          </div>
          <div className="col s2"></div>
          <div className="col s6">
            <div className="feature-items">
              <h4 className="description-font">{describe.description.cardHead}</h4>
              <p>{describe.description.description}</p>
              <div className="row"></div>
              <div className="row"></div>
              {describe.description.cards.descriptionlist.map((card, index) => (
              <div className="row" key={index}>
                <div className="col s1"><i className="Large material-icons">{card.icon}</i></div>
                <div className="col s11">
                  <div className="feature-items">
                    <h5>{card.head}</h5>
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="row"><div className="col s12"><br></br></div></div>
        <div className="row"><div className="col s12"><br></br></div></div>
      </div>


  <div className="container-fluid grey lighten-4">
      <div className="container">
        <div className="row">
          <div className="col s12"><h3 className="center-align grey-text h-style">{describe.appGalley.appGalleryHead}</h3></div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="carousel carousel-slider center">
            {describe.appGalley.sliderImages.map((slides, index) => (
              
              <div className="carousel-item" href="#one!" key={index}><div className="row">
                  <div className="col s4"></div>
                  <div className="col s4">
                    <img src={slides.slideImg} />
                  </div>
              </div>
              </div>
            ))}
            </div>
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>
        </div>
      </div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
};

export default DescribePageTemplate;

