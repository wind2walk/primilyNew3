import React from "react";
import PropTypes from "prop-types";

import { AboutPageTemplate } from "../../templates/about-page";

const AboutPagePreview = ({ entry }) => {
  // const about = entry.getIn(["data"]).toJS();
  return <AboutPageTemplate     
    page={{
      frontmatter: entry.getIn(["data"]).toJS()
    }} 
  />;
};

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AboutPagePreview;
