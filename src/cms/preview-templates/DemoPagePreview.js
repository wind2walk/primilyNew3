import React from "react";
import PropTypes from "prop-types";

import { Demo } from "../../templates/demo-page";

const DemoPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Demo data={data} />;
};

DemoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default DemoPagePreview;
