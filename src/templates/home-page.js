import React from 'react'
import PropTypes from 'prop-types'

//import {Link, graphql, StaticQuery} from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

//import CarouselComponent from '../components/carousel'
import SlideView from "../components/SlideView";

export class Home extends React.Component {
    render() {

        const {home} = this.props.data

        return (

            <div className="container">

                <SlideView content={home.sliderImages} />

                {/*<CarouselComponent content={home.sliderImages}/>
                <div className="carousel carousel-slider center">
                    {home.sliderImages.map((image, index) => (
                        <div className="carousel-item blue white-text" href="#one!" key={index}>
                            <img src={image.imagesrc} className="responsive-img" alt={image.imagealt}/>
                        </div>
                    ))}
                </div>
                <div className="row">
                    <div className="col s12"><br></br></div>
                </div>
                <div className="row">
                    <div className="col s12"><br></br></div>
                </div>*/}
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

