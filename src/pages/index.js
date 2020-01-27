import React from "react";
import PropTypes from "prop-types";
import {graphql} from "gatsby";
import Helmet from "react-helmet";
//import isAfter from "date-fns/is_after";
import Feature from '../templates/feature-page';
import Describe from '../templates/describe-page';
import Video from '../templates/video-page';

import Pricing from '../templates/pricing-page';
import Demo from '../templates/demo-page';
import Home from '../templates/home-page';
import Layout from "../components/Layout";
import Description from '../templates/description-page';
import Screens from '../templates/screens-page';
//import BlogRoll from '../templates/blog-page';
//import ImageDescription from "../templates/imagedescription-page";
//import Appgallery from '../templates/appgallery-page';

export const HomePageTemplate = ({home}) => {
    return (
        <>
            <div className="row"></div>
            <div className="row">
                <div className="col s12 m12 l12">
                    <div id="home" className="section scrollspy">
                        <Home/>
                    </div>
                    <div id="features" className="section scrollspy">
                        <Feature/>
                    </div>
                    <div id="describe" className="section scrollspy">
                        <Describe/>
                    </div>
                    <div id="video" className="section scrollspy">
                        <Video/>
                    </div>

                    <div id="description" className="section scrollspy">
                        <Description/>
                    </div>
                    <div id="screens" className="section scrollspy">
                        <Screens/>
                    </div>

                    {/* Add new screen Component here */}

                    {/*  <div id="imagedescription" className="section scrollspy">
                        <ImageDescription/>
                    </div>
                    <div id="appgallery" className="section scrollspy">
                        <Appgallery />
                    </div>
                    */}

                    <div id="pricing" className="section scrollspy">
                        <Pricing/>
                    </div>
                    <div id="demo" className="section scrollspy">
                        <Demo/>
                    </div>
                </div>
            </div>
        </>
    );
};

class HomePage extends React.Component {
    render() {
        const {data} = this.props;
        const {
            data: {footerData, navbarData},
        } = this.props;
        const {frontmatter: home} = data.homePageData.edges[0].node;
        // const { frontmatter: feature } = data.featureData.edges[0].node;
        // const { frontmatter: describe } = data.describeData.edges[0].node;
        // const { frontmatter: pricing } = data.pricingData.edges[0].node;
        // const { frontmatter: demo } = data.demoData.edges[0].node;
        const {
            seo: {title: seoTitle, description: seoDescription, browserTitle},
        } = home;
        // console.log(data.homePageData.edges[0].node)
        // let upcomingMeetup = null;
        // Find the next meetup that is closest to today
        // data.allMarkdownRemark.edges.every(item => {
        //   const { frontmatter: meetup } = item.node;
        //   if (isAfter(meetup.rawDate, new Date())) {
        //     upcomingMeetup = meetup;
        //     return true;
        //   } else {
        //     return false;
        //   }
        // });
        return (
            <Layout footerData={footerData} navbarData={navbarData}>
                <Helmet>
                    <meta name="title" content={seoTitle}/>
                    <meta name="description" content={seoDescription}/>
                    <title>{browserTitle}</title>
                </Helmet>
                <HomePageTemplate/>
            </Layout>
        );
    }
}

HomePage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            edges: PropTypes.array,
        }),
    }),
};

export default HomePage;

export const pageQuery = graphql`
  query HomePageQuery {
    ...LayoutFragment
    homePageData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "home-page" } } }) {
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
            seo {
              browserTitle
              title
              description
            }
          }
        }
      }
    }
    pricingData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "pricing-page" } } }) {
      edges {
        node {
          frontmatter {
            pricing {
              pricingHead
              description1
              description2
              ticImage
              priceBox1 {
                head
                head2
                description
                featureList {
                  list
                }
                price
              }
              priceBox2 {
                head
                head2
                description
                featureList {
                  list
                }
                price
              }
            }
          }
        }
      }
    }
    demoData: allMarkdownRemark(filter: { frontmatter: { templateKey: { eq: "demo-page" } } }) {
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
`;
