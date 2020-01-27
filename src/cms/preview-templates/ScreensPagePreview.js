import React from "react";
import PropTypes from "prop-types";

import { Screens } from "../../templates/screens-page";

const ScreensPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Screens data={data} />;
};

ScreensPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ScreensPagePreview;
