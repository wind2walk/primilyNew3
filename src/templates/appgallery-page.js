import React from "react";
import PropTypes from 'prop-types'

//import { graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/describe-page.scss';

export class Appgallery extends React.Component {
    render() {

      const { appGalley: appGalley } = this.props.data
      console.log(this.props.data)
      return (
    <div className="describe">


  <div className="container-fluid grey lighten-4">
      <div className="container Appgallery-page">
        <div className="row">
          <div className="col s12"><h3 className="center-align grey-text h-style">{appGalley.appGalleryHead}</h3></div>
        </div>
        <div className="row">
          <div className="col s12">
            <div className="carousel carousel-slider center">
            {appGalley.sliderImages.map((slides, index) => (

              <div className="carousel-item" href="#one!" key={index}><div className="row">
                  <div className="col s4"></div>
                  <div className="col s4">
                    <img src={slides.slideImg} alt="" />
                  </div>
              </div>
              </div>
            ))}
            </div>
          </div>
          <div className="row"><div className="col s12"><br></br></div></div>
          <div className="row"><div className="col s12"><br></br></div></div>
        </div>
      </div>
      </div>
      <div className="row"><div className="col s12"><br></br></div></div>
    </div>
    )
  }
  }

  Appgallery.propTypes = {
      data: PropTypes.object
    }

  export default () => (
      <StaticQuery
        query={graphql`
          query AppgalleryQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "appgallery-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    appGalley {
                      appGalleryHead
                      sliderImages {
                        slideImg
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Appgallery data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
      />
    )



