import React from 'react'
import PropTypes from 'prop-types'

//import {Link, graphql, StaticQuery} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

//import CarouselComponent from '../components/carousel'
import SlideView from "../components/SlideView";

export class Screens extends React.Component {
    render() {
        const {screens} = this.props.data
        console.log(this.props)
        return (
            <div className="container">
                {/*<SlideView content={screens.sliderImages} />*/}
            </div>
        )
    }
}

Screens.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query ScreensQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "screens-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    screens {
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
        render={(data, count) => <Screens data={data.allMarkdownRemark.edges[0].node}/>}
    />
)

