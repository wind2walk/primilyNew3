import React from "react";
import "./styles.scss";
import "materialize-css/sass/materialize.scss";

export const FooterTemplate = ({ data }) => {

  const { logoImage, socialLinks, Headding, tagline } = data;

  return (
    <footer className="page-footer indigo darken-4">
    <div className="container">
      <div className="row">
        <div className="col l6 s12">
        <img src={logoImage.image} alt={logoImage.imageAlt} />
        </div>
        <div className="col l4 offset-l2 s12">
          <h5 className="white-text">{Headding}</h5>
          <p className="grey-text text-lighten-4">{tagline}</p>
        </div>
      </div>
    </div>
    <div className="footer-copyright">
      <div className="container">
      © 2020 Copyright Text
      {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
      </div>
    </div>
  </footer>
  );
};

const Footer = props => {
  if (!props.data) {
    return null;
  }
  const data = props.data.edges[0].node.frontmatter;
  return <FooterTemplate data={data} />;
};

export { Footer };
