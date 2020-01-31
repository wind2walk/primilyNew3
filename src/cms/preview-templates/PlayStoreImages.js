import React from "react";
import PropTypes from "prop-types";

import { PlaystoreImages } from "../../templates/playstoreImages-page";

const PlaystoreImagesPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <PlaystoreImages     
  data={data} 
  />;
};

PlaystoreImagesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default PlaystoreImagesPagePreview;
