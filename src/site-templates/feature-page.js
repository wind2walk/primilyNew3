import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import "materialize-css/sass/materialize.scss";

export const FeaturePageTemplate = ({feature}) => {
  
  return (
    <div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row">
      <div className="col s1"></div>
        <div className="col s10">
        <div className="row">
          {feature.featureBody.map((feature, index) => (
            <div className="col s3" key={index}>
              <div className="center-align feature-items">
                <div className="row">
                  <div className="col s4"></div>
                  <div className="col s3">
                    <i className="Large material-iconss">{feature.icon}</i>
                  </div>
                </div>
                <h5 className="">{feature.head}</h5>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        </div>
        <div className="col s1"></div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
  );
};

export default FeaturePageTemplate;

// class FeaturePage extends React.Component {
//   render() {
//     const { data } = this.props;
//     console.log(this.props)
//     const { frontmatter: feature } = data.FeaturePageData.edges[0].node;

//     return (
//       <FeaturePageTemplate feature={feature} />
//     );
//   }
// }

// FeaturePage.propTypes = {
//   data: PropTypes.shape({
//     allMarkdownRemark: PropTypes.shape({
//       edges: PropTypes.array,
//     }),
//   }),
// };

// export default FeaturePage;

// export const featurePageQuery = graphql`
//   query FeaturePageQuery {
//     featurePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "feature-page" } } }) {
//       edges {
//         node {
//           frontmatter {
//             feature {
//               featureBody {
//                 icon
//                 head
//                 description
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;


