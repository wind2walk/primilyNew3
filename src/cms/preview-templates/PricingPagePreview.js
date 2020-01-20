import React from "react";
import PropTypes from "prop-types";

import { Pricing } from "../../templates/pricing-page";

const PricingPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Pricing data={data} />;
};

PricingPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PricingPagePreview;
