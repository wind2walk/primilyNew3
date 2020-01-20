import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
//import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
//import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const AboutPageTemplate = props => {
  const { page } = props;
  return (
    <div className="container">
      <div className="row">
        <div className="col s12">
          <h3 className="grey-dark">{page.frontmatter.title}</h3>
        </div>
        <div className="col s6">
          <p className="grey-light">{page.frontmatter.aboutDescription}</p>
        </div>
        <div className="col s1">

        </div>
        <div className="col s5">
          <img className="responsive-img" src={page.frontmatter.aboutGallery.image} alt={page.frontmatter.aboutGallery.imageAlt} />
        </div>
      </div>
    </div>
  );
};

const AboutPage = ({ data }) => {
  const { markdownRemark: page, footerData, navbarData } = data;
  const {
    frontmatter: {
      seo: { title: seoTitle, description: seoDescription, browserTitle },
    },
  } = page;

  return (
    <Layout footerData={footerData} navbarData={navbarData}>
      <Helmet>
        <meta name="title" content={seoTitle} />
        <meta name="description" content={seoDescription} />
        <title>{browserTitle}</title>
      </Helmet>
      <AboutPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        aboutDescription
        aboutGallery {
          image
          imageAlt
        }
        seo {
          browserTitle
          title
          description
        }
      }
    }
    ...LayoutFragment
  }
`;
