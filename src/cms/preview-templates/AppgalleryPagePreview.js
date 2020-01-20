import React from "react";
import PropTypes from "prop-types";

import { Appgallery } from "../../templates/appgallery-page";

const AppgalleryPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Appgallery data={data} />;
};

AppgalleryPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default AppgalleryPagePreview;
