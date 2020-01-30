import React from 'react'
import PropTypes from 'prop-types'

//import {Link, graphql, StaticQuery} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

//import CarouselComponent from '../components/carousel'
import SlideView from "../components/SlideView";
import PlaystoreImages from '../templates/playstoreimages-page';

export class Home extends React.Component {
    render() {
        const {home} = this.props.data
        console.log( '**Home**')
        console.log( 'home=> '+ JSON.stringify(home) )
        return (
            <div className="container HOME-page">
                <SlideView content={home.sliderImages} />
                <div className="row"><div className="col s12"></div></div>
                {/*<PlaystoreImages />*/}

            </div>
        )
    }
}

Home.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query HomeQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "home-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    home {
                      sliderImages {
                        imageSrc
                        imagealt
                        imageText
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Home data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)

