import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import {graphql, StaticQuery} from 'gatsby'
//import '../styles/describe-page.scss';
import '../styles/description-page.scss';

export class Description extends React.Component {

    constructor(props) {
        super(props);
        this.state = {image: ''};
        const {description: description} = this.props.data
        this.state.image = description.mainImage
        this.handleClick = this.handleClick.bind(this);
      }

    handleClick(card) {
        this.setState(state => ({
            image: card.image
        }));
      }

    render() {

        const {description: description} = this.props.data
        // const { image } = this.state;
        return (
            <div className="description">

                <div className="container">
                    <div className="row">
                        <div className="col s12"><br/></div>
                    </div>
                    <div className="row">
                        <div className="col s12"><br/></div>
                    </div>
                    <div className="row">
                        <div className="col s4 center-align">
                            <div className="card">
                                <img src={this.state.image} className="responsive-img" alt=""/>
                            </div>
                            <div className="row">
                                <div className="col s12"></div>
                            </div>
                            <img src={description.playstoreImage} className="responsive-img" height="67"
                                 width="232" alt=""/>
                        </div>
                        <div className="col s2"></div>
                        <div className="col s6">
                            <div className="feature-items">
                                <h4 className="description-font">{description.cardHead}</h4>
                                <p>{description.description}</p>
                                <div className="row"></div>
                                <div className="row"></div>
                                {description.cards.descriptionlist.map((card, index) => (
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
                        <div className="col s12"><br></br></div>
                    </div>
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>
                </div>

            </div>
        )
    }
}

Description.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query descriptionQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "description-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    description {
                      mainImage
                      playstoreImage
                      cardHead
                      description
                      cards {
                        descriptionlist {
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
        render={(data, count) => <Description data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)



