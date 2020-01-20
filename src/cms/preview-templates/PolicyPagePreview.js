import React from "react";
import PropTypes from "prop-types";

import { PolicyPageTemplate } from "../../templates/policy-page";

const PolicyPagePreview = ({ entry }) => {
  // const about = entry.getIn(["data"]).toJS();
  return <PolicyPageTemplate     
    page={{
      frontmatter: entry.getIn(["data"]).toJS()
    }} 
  />;
};

PolicyPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PolicyPagePreview;
