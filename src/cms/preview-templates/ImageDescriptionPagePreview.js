import React from "react";
import PropTypes from "prop-types";

import { ImageDescription } from "../../templates/imagedescription-page";

const ImageDescriptionPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <ImageDescription data={data} />;
};

ImageDescriptionPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ImageDescriptionPagePreview;
