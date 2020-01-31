import React from "react";
import PropTypes from 'prop-types'

//import { Link, graphql, StaticQuery } from 'gatsby'
import {graphql, StaticQuery} from 'gatsby'
import '../styles/describe-page.scss';

export class Describe extends React.Component {
    render() {

        const {describe: describe} = this.props.data
        console.log( '**Describe**')
        console.log( 'describe=> '+ JSON.stringify(describe) )
        return (
            <div className="describe DESCRIBE-page">
                <div className="grey lighten-4">
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>
                    <div className="row">
                        <div className="col s12"><br></br></div>
                    </div>

                    <div className="container">

                        <div className="row">
                            {describe.cards.map((card, index) => (
                                <div className="col s6 l4" key={index}>
                                    <div className="describe-card">
                                        <div children="row">
                                            {card.icon ? <div className="col s2 m1 l2"><i
                                                className="Large material-icons">{card.icon}</i></div> : null}

                                            <div className="col s10 m11 l10 feature-items"><h5
                                                className="center-align">{card.head}</h5></div>
                                            <div className="col s12 m12 l12">
                                                <div className="feature-items">
                                                    <p>{card.body}</p>
                                                </div>
                                            </div>
                                            {card.image ? <div className="col s12"><img src={card.image} className="responsive-img" alt=""/>
                                            </div> : <div></div>}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="row">
                            <div className="col s12"><br></br></div>
                        </div>
                        <div className="row">
                            <div className="col s12"><br></br></div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col s12"><br></br></div>
                </div>
            </div>
        )
    }
}

Describe.propTypes = {
    data: PropTypes.object
}

export default () => (
    <StaticQuery
        query={graphql`
          query DescribeQuery {
            allMarkdownRemark(
              filter: { frontmatter: { templateKey: { eq: "describe-page" } } }
            ) {
              edges {
                node {
                  frontmatter {
                    describe {
                      cards {
                        icon
                        head
                        body
                        image
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data, count) => <Describe data={data.allMarkdownRemark.edges[0].node.frontmatter} count={count}/>}
    />
)



