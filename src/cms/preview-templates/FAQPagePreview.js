import React from "react";
import PropTypes from "prop-types";

import { FAQPageTemplate } from "../../templates/faq-page";

const FAQPagePreview = ({ entry }) => {
  // const about = entry.getIn(["data"]).toJS();
  return <FAQPageTemplate     
    page={{
      frontmatter: entry.getIn(["data"]).toJS()
    }} 
  />;
};

FAQPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FAQPagePreview;
