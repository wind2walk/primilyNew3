import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'
import '../styles/describe-page.scss';

export class Video extends React.Component {
    render() {

      const { video: video} = this.props.data
        console.log( '**Video**')
        console.log( 'video=> '+ JSON.stringify(video) )
      return (
          <div className="grey lighten-4">
            {/* <div className="row"><div className="col s12"><br></br></div></div>
            <div className="row"><div className="col s12"><br></br></div></div> */}

            <div className="container VIDEO-page">
              <div className="row">
                <div className="col s1"></div>
                <div className="col s10">
                  <div className="video-container">
                    <iframe width="853" height="480" src='/img/{video.src} frameBorder="0" allowFullScreen></iframe>
                  </div>
                </div>
                <div className="col s1"></div>
              </div>
            </div>

    </div>
    )
  }
  }

  Video.propTypes = {
      data: PropTypes.object
    }

  export default () => (
      <StaticQuery
        query={graphql`
          query VideoQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "video-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    video {
                      src
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Video data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
      />
    )



