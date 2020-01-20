import React from "react";
import PropTypes from "prop-types";

import { Description } from "../../templates/description-page";

const DescriptionPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Description data={data} />;
};

DescriptionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default DescriptionPagePreview;
