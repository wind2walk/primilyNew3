import React from "react";
import PropTypes from "prop-types";

import { Describe } from "../../templates/describe-page";

const DescribePagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Describe data={data} />;
};

DescribePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default DescribePagePreview;
