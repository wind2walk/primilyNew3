import React from "react";
import PropTypes from "prop-types";

import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry }) => {
  // const about = entry.getIn(["data"]).toJS();
  return <ContactPageTemplate     
    page={{
      frontmatter: entry.getIn(["data"]).toJS()
    }} 
  />;
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};

export default ContactPagePreview;
