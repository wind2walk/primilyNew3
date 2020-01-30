import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import {graphql, StaticQuery} from 'gatsby'
//import '../styles/describe-page.scss';
import '../styles/imagedescription-page.scss';

export class ImageDescription extends React.Component {
    render() {

        const {imagedescription: imagedescription} = this.props.data

        return (
            <div className="description">

                <div className="container IMAGEDESCRIPTION-page">
                    <div className="row">
                        <div className="col s12"><br/></div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                            <div className="col s2 center-align">
                                <br/><br/><img src='../img/icon.png' className="responsive-img" alt=""/>
                            </div>
                            <div className="col s10 ">
                                <h4 className="description-font">{imagedescription.cardHead}</h4>
                                <p>{imagedescription.description}</p>
                            </div>
                        </div>
                    </div>

                    <div className="row">

                        <div className="col s12">
                            <div className="feature-items">

                                {imagedescription.cards.descriptionlist.map((card, index) => (
                                    <div className="row" key={index}>

                                        <div className="col s2 card">
                                            <img src={card.image} className="responsive-img" alt=""/>
                                        </div>
                                        <div className="col s1 description-icon">
                                          <i className="Large material-icons">{card.icon}</i>
                                        </div>
                                        <div className="col s9">
                                            <div className="feature-items">
                                                <h5>{card.head}</h5>
                                                <p>{card.description}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>
                </div>

            </div>
        )
    }
}

ImageDescription.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query imagedescriptionQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "imagedescription-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    imagedescription {
                      mainImage
                      playstoreImage
                      cardHead
                      description
                      cards {
                        descriptionlist {
                          icon
                          head
                          description
                          image
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <ImageDescription data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)



