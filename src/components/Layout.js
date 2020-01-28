import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import { withPrefix } from "gatsby"
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import "../styles/features.css";
import "materialize-css/sass/materialize.scss";

const TemplateWrapper = ({ footerData = null, navbarData = null, children }) => (

  <div>
    <Helmet>
      <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
      <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      <script src={withPrefix('js/primily.js')} type="text/javascript" />
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>

      {/* for Slick Carousel */}
        <link rel="stylesheet" type="text/css" charset="UTF-8" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css" />
        <link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css" />

    </Helmet>
    <Navbar data={navbarData} />
    <main>{children}</main>
    <Footer data={footerData} />
  </div>

);

export const query = graphql`
  fragment LayoutFragment on Query {
    footerData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "footer" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            Headding
            tagline
            menuItems {
              label
              linkType
              linkURL
            }
            socialLinks {
              image
              imageAlt
              label
              linkURL
            }
          }
        }
      }
    }
    navbarData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "navbar" } } }) {
      edges {
        node {
          id
          frontmatter {
            logoImage {
              image
              imageAlt
            }
            menuItems {
              label
              linkType
              linkURL
            }
          }
        }
      }
    }
  }
`;

export default TemplateWrapper;
