import React from "react";
import PropTypes from "prop-types";

import { DetailsPageTemplate } from "../../templates/details-page";

const DetailsPagePreview = ({ entry }) => {
  // const about = entry.getIn(["data"]).toJS();
  return <DetailsPageTemplate     
    page={{
      frontmatter: entry.getIn(["data"]).toJS()
    }} 
  />;
};

DetailsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default DetailsPagePreview;
