import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
//import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";

import Layout from "../components/Layout";
//import HTMLContent from "../components/Content";
import "../styles/contact-page.scss";

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', email: '', subject: '', message: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.id]: e.target.value })
  }

  formValidate() {
    const { name, email, message } = this.state;
    return name !== '' && email !== '' && message !== ''
  }

  handleSubmit(event) {
    event.preventDefault();

  }
  render() {
    const { title } = this.props.page.frontmatter;
    // console.log(this.props)
  return (
    <div className="row grey lighten-3 contact">
      <div className="col s12">
        <div className="container">
        <div class="row contact-box">
          <div class="col s1"></div>
          <div class="col s10">
            <div class="card">
              <div class="row">
                <div class="col s12 m12 s12 grey-text center-align">
                  <h4>{title}</h4>
                </div>
              </div>
              <div class="row">
                <div class="col s12 m12 s12">
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col s1"></div>
                      <div className="input-field col s5">
                        <input id="name" value={this.state.name} placeholder="Name" onChange={this.handleChange} type="text" className="validate contact-textbox" />
                        {/* <label htmlFor="name">Name</label> */}
                      </div>
                      <div className="input-field col s5">
                        <input id="email" value={this.state.email} placeholder="Email" onChange={this.handleChange} type="email" className="validate" />
                        {/* <label htmlFor="email">Email</label> */}
                      </div>
                      {/* <div className="col s1"></div> */}
                    </div>
                    {/* <div className="row">
                      
                    </div> */}
                    <div className="row">
                    <div className="col s1"></div>
                      <div className="input-field col s10">
                        <textarea id="subject" value={this.state.subject} placeholder="Subject" onChange={this.handleChange} className="materialize-textarea"></textarea>
                        {/* <label htmlFor="subject">subject</label> */}
                      </div>
                      <div className="col s1"></div>
                    </div>
                    <div className="row">
                    <div className="col s1"></div>
                      <div className="col s10">
                        <textarea id="message" value={this.state.message} placeholder="Message" onChange={this.handleChange} className="materialize-textarea"></textarea>
                        {/* <label htmlFor="message">Message</label> */}
                      </div>
                      <div className="col s1"></div>
                    </div>
                    <div className="row">
                      <div className="col s12 center-align">
                        <button className="waves-effect waves-light btn indigo darken-4" type="submit" disabled={!this.formValidate()}>Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    // <div>
    //   <div className="row"><div className="col s12"></div></div>
    //   <div className="row"><div className="col s12"></div></div>
    // <div className="container">
    //   <div className="card">
    //     <div className="row">
    //       <div className="col s12">
    //         <h4>{title}</h4>
    //         <p> At Primily we love to help each user. Our dedicated customer service is located at Silicon Valley in California, U.S.A.  </p>
    //         <br/>
    //         <p>If you have any question or issues, please fill the form below and we will respond to you. </p>
    //       </div>
    //     </div>
    //   <div className="row">
    //     <form className="col s12" onSubmit={this.handleSubmit}>
    //       <div className="row">
    //         <div className="input-field col s12">
    //           <input id="name" value={this.state.name} onChange={this.handleChange} type="text" className="validate" />
    //           <label htmlFor="name">Name</label>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="input-field col s12">
    //           <input id="email" value={this.state.email} onChange={this.handleChange} type="email" className="validate" />
    //           <label htmlFor="email">Email</label>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="input-field col s12">
    //           <textarea id="message" value={this.state.message} onChange={this.handleChange} className="materialize-textarea"></textarea>
    //           <label htmlFor="message">Message</label>
    //         </div>
    //       </div>
    //       <div className="row">
    //         <div className="col s12">
    //           <button className="waves-effect waves-light btn" type="submit" disabled={!this.formValidate()}>submit</button>
    //         </div>
    //       </div>
    //     </form>
    //   </div>
    //   </div>
    // </div>
    // <div className="row"><div className="col s12"></div></div>
    // <div className="row"><div className="col s12"></div></div>
    // </div>
    )
  }
}

const ContactPage = ({ data }) => {
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
      <ContactPageTemplate page={{ ...page, bodyIsMarkdown: false }} />
    </Layout>
  );
};

ContactPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default ContactPage;

export const contactPageQuery = graphql`
  query contactPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        contactDescription
        contactGallery {
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
