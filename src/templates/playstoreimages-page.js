import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import {graphql, StaticQuery} from 'gatsby'
//import '../styles/describe-page.scss';
import '../styles/description-page.scss';
/*
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
*/
export class PlaystoreImages extends React.Component {

    constructor(props) {
        super(props);
      }

    render() {

        const imageSize = {
            height: '600px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
        }
        const rowHover = {
            hover:'blue'
        }

        const {playstoreimages: playstoreimages} = this.props.data
        console.log( '**Playstoreimages**')
        console.log( 'playstoreimages=> '+ JSON.stringify(playstoreimages) )
        return (

            <div className="description">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col s12 center-align">
                          {playstoreimages.map((image, index) => (
                            <a style={{paddingLeft: '7px'}} href={image.url} key={index}>
                                <img src={image.image} alt={image.alt} className="responsive-img" alt=""/>
                            </a>
                          ))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

PlaystoreImages.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query playstoreImagesQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "playstoreimages-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    playstoreimages {
                      image
                      url
                      alt
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <PlaystoreImages data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)
