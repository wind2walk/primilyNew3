import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/feature-page.scss';
import styled from 'styled-components';

export class Feature extends React.Component {
    render() {

      const { feature } = this.props.data
      console.log( '**Feature**')
      console.log( 'feature=> '+ JSON.stringify(feature) )

      return (
    <div className="feature FEATURE-page">
      <div className="row"><div className="col s12"></div></div>
      <div className="container">
      {/* <div className="col s1"></div> */}
        {/* <div className="col s12"> */}
        <div className="row">
          {feature.featureBody.map((feature, index) => (
            <div className="col s12 m6 l4" key={index}>
              <div className="center-align feature-items feature-card hoverable">
                <div className="row">
                  <div className="col s4"></div>
                  <div className="col s3">
                    <i className="Large material-icons">{feature.icon}</i>
                  </div>
                </div>
                <h5 className="">{feature.head}</h5>
                <p className>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        {/* </div> */}
        {/* <div className="col s1"></div> */}
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
)
}
}

Feature.propTypes = {
    data: PropTypes.object
  }

export default () => (
    <StaticQuery
      query={graphql`
        query FeatureQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "feature-page" } } }
          ) {
            edges {
              node {
                frontmatter {
                  feature {
                    featureBody {
                      description
                      head
                      icon
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Feature data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
    />
  )

