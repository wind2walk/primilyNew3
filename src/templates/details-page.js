import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export const DetailsPageTemplate = props => {
  const { page } = props;

  return (
    <div className="container">
      <div className="row">
        <div className="col s12 center-align">
          <h3 className="grey-dark">{page.frontmatter.title}</h3>
        </div>
        <div className="col s3">
        </div>
        <div className="col s9">
          <img className="responsive-img" src={page.frontmatter.detailsGallery.image} alt={page.frontmatter.detailsGallery.imageAlt} />
        </div>

        <div className="col s12">
          <p className="grey-light">{page.frontmatter.detailsDescription}</p>
        </div>
        <div className="col s2">
        </div>
      </div>
    </div>
  );
};

const DetailsPage = ({ data }) => {
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
      <DetailsPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

DetailsPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default DetailsPage;

export const detailsPageQuery = graphql`
  query DetailsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        detailsDescription
        detailsGallery {
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
