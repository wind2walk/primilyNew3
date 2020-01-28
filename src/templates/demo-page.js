import React from "react";
import PropTypes from 'prop-types'
//import { Link, graphql, StaticQuery } from 'gatsby'
import { graphql, StaticQuery } from 'gatsby'

export class Demo extends React.Component {
    render() {

      const { demo } = this.props.data

      return (
        <div>
            {/* <div className="row"><div className="col s12"><br></br></div></div>
            <div className="row"><div className="col s12"><br></br></div></div> */}
            <div className="container">
                <div className="row">
                    <div className="col s12 feature-items center-align">
                        <h5>{demo.demoHead}</h5>
                        <p>{demo.description}</p>
                    </div>
                    {/* <div className="col s3"></div>
                    <div className="col s3"><img src={demo.demoImages.src1} alt="" /></div>
                    <div className="col s0"></div>
                    <div className="col s3"><img src={demo.demoImages.src2} alt="" /></div>
                    <div className="col s3"></div> */}
                </div>
                <br></br>
                {/* <div className="row">
                    <hr />
                    <h5>Contact Us</h5>
                    <form
                        name="contact-form"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field" >
                        <input name="name" placeholder="Your name" type="text" />
                        <input name="email" placeholder="Your email address" type="email" />
                        <textarea name="message" placeholder="Your message" id="" cols="30" rows="40" />
                        <button className="waves-effect waves-light btn">Send</button>
                    </form>
                </div> */}
            </div>
        </div>
    )
}
}

Demo.propTypes = {
  data: PropTypes.object
  }

export default () => (
    <StaticQuery
      query={graphql`
        query DemoQuery {
          allMarkdownRemark(
            filter: { frontmatter: { templateKey: { eq: "demo-page" } } }
          ) {
            edges {
              node {
                frontmatter {
                    demo {
                        demoHead
                        description
                        demoImages {
                          src1
                          src2
                        }
                    }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <Demo data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count} />}
    />
  )

