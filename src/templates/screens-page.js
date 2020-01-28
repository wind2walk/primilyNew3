import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import {graphql, StaticQuery} from 'gatsby'
//import '../styles/describe-page.scss';
import '../styles/description-page.scss';
import Box from '@material-ui/core/Box';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

export class Screens extends React.Component {

    constructor(props) {
        super(props);
        this.state = {image: ''};
        const {screens: screens} = this.props.data
        this.state.image = screens.cards.screenslist[0].image
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(card) {
        this.setState(state => ({
            image: card.image
        }));
      }

    render() {

        const {screens: screens} = this.props.data
        // const { image } = this.state;
        return (

            <div className="description">

                <div className="container">
                    <div className="row">
                        <div className="col s12"><br/></div>
                    </div>
                    <div className="row">
                        <div className="col s12">
                        <div className="feature-items center-align">
                            <h4 className="description-font">{screens.cardHead}</h4>
                            <p>{screens.description}</p>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4 center-align">
                            <div className="card">
                                <img src={this.state.image} className="responsive-img" alt=""/>
                            </div>
                            <div className="row">
                                <div className="col s12"></div>
                            </div>
                            
                        </div>
                        <div className="col s2"></div>
                        <div className="col s6">
                            <div className="feature-items">
                                {screens.cards.screenslist.map((card, index) => (
                                    <div className="row" key={index} onClick={() => this.handleClick(card)}>
                                        <div className="col s1 description-icon">
                                            <i className="Large material-icons">{card.icon}</i>
                                        </div>
                                        <div className="col s11">
                                            <div className="feature-items">
                                                <h5>{card.head}</h5>
                                                <p>{card.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {screens.playstoreImages.map((image, index) => (
                            <div className="col s3" key={index}>
                                <a className="row" href={image.url}>
                                    <img src={image.image} alt={image.alt} className="responsive-img" height="67"
                                    width="232" alt=""/>
                                </a>
                            </div>
                        ))} 
                    </div>
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>
                </div>

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
          query screensQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "screens-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    screens {
                      mainImage
                      playstoreImages {
                        image
                        url
                        alt
                      }
                      cardHead
                      description
                      cards {
                        screenslist {
                          icon
                          head
                          description
                          image
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Screens data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)