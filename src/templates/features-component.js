import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/features-component.scss';
import styled from 'styled-components';

export class Features extends React.Component {
    render() {

      const { features } = this.props.data
      console.log( '**Features**')
      console.log( 'features=> '+ JSON.stringify(features) )

      return (
    <div className="features FEATURES-COMPONENTS">
      <div className="row"><div className="col s12"></div></div>
      <div className="container">
      {/* <div className="col s1"></div> */}
        {/* <div className="col s12"> */}
        <div className="row">
          {features.featuresBody.map((features, index) => (
            <div className="col s12 m6 l4" key={index}>
              <div className="center-align features-items features-card hoverable">
                <div className="row">
                  <div className="col s4"></div>
                  <div className="col s3">
                    <i className="Large material-icons">{features.icon}</i>
                  </div>
                </div>
                <h5 className="">{features.head}</h5>
                <p className>{features.description}</p>
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

Features.propTypes = {
    data: PropTypes.object
  }

export default () => (
    <StaticQuery
      query={graphql`
        query FeaturesQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "features-component" } } }
          ) {
            edges {
              node {
                frontmatter {
                  features {
                    featuresBody {
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
      render={(data, count) => <Features data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
    />
  )

