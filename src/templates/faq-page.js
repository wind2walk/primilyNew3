import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
//import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
//import HTMLContent from "../components/Content";
import "../styles/about-page.scss";

export class FAQPageTemplate extends React.Component {

  constructor(props) {
      super(props);
      let count = 0;
      this.state = {iconToggle: true, items: []};
      for(let i of this.props.page.frontmatter.faq.questionsAndAns) {
          count++;
          this.state.items.push({i: count, iconToggle: true, item: i});
      }
  }

  handleClick = (e, index) => {
      const { items } = this.state;
      items.filter( item => {
          if(item.iconToggle === false) {
              item.iconToggle = true;
          }
      })
      items[items.indexOf(e)].iconToggle = !e.iconToggle
      this.setState({items})
    }

    render() {
      const { iconToggle, items } = this.state;
      // console.log(items)
      return (
          <div className="container">
              <div className="card">
                  <div className="card-content">
                      <span className="card-title center-align feature-items"><h5>Frequently Asked Questions</h5></span>
                      <ul className="collapsible">
                          {items.map((qanda, index) => (
                              <li key={index}>
                                  <div className="collapsible-header grey-dark" onClick={(index) => this.handleClick(qanda, 'i')}><i className="material-icons"> {qanda.iconToggle ? 'add' : 'remove'}</i>{qanda.item.question}</div>
                                  <div className="collapsible-body grey-light"><span>{qanda.item.answer}</span></div>
                              </li>
                          ))}
                      </ul>
                  </div>
              </div>
          </div>
      );
  };
}

const FAQPage = ({ data }) => {
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
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
        <title>{browserTitle}</title>
      </Helmet>
      <FAQPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

FAQPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default FAQPage;

export const FAQPageQuery = graphql`
  query FAQPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        faq {
          faqHead
          questionsAndAns {
            question
            answer
          }
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
