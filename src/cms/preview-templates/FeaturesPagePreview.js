import React from "react";
import PropTypes from "prop-types";

import { Features } from "../../templates/features-component";

const FeaturesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Features data={data} />;
};

FeaturesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default FeaturesPagePreview;
