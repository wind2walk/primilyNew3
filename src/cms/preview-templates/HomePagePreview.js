import React from "react";
import PropTypes from "prop-types";

import { Home } from "../../templates/home-page";

const HomePagePreview = ({ entry }) => {
  const home = entry.getIn(["data"]).toJS();
  return <Home data={home} />;
};

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default HomePagePreview;
