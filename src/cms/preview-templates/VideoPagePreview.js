import React from "react";
import PropTypes from "prop-types";

import { Video } from "../../templates/video-page";

const VideoPagePreview = ({ entry }) => {
  const data = entry.getIn(["data"]).toJS();
  return <Video data={data} />;
};

VideoPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default VideoPagePreview;
