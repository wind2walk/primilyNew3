import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
//import ReactMarkdown from "react-markdown";
import Helmet from "react-helmet";
import emailjs from 'emailjs-com';
import Layout from "../components/Layout";
import "../styles/contact-page.scss";

export class ContactPageTemplate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {name: '', email: '', subject: '', message: '', bussinessname: '', messageSent: false};

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
    console.log(event.target)
    emailjs.sendForm('gmail', 'template_15gYhh5y', event.target, 'user_VBzdOoMF3qU1tyFiWHHqA')
      .then((result) => {
        this.setState({messageSent: true})
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  sendEmail(e) {
    e.preventDefault();
    console.log(e.target)
    emailjs.sendForm('gmail', 'template_15gYhh5y', e.target, 'user_VBzdOoMF3qU1tyFiWHHqA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  render() {
    const { title, messagesentimage } = this.props.page.frontmatter;
    
  return (
    <div className="row grey lighten-3 contact">
      <div className="col s12">
        <div className="container">
        <div className="row contact-box">
          <div className="col s1"></div>
          <div className="col s10">
            <div className="card">
              <div className="row">
                <div className="col s12 m12 s12 grey-text center-align">
                  <h4>{title}</h4>
                </div>
              </div>
              {/* <form className="contact-form" onSubmit={this.sendEmail}>
      <input type="hidden" name="contact_number" />
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    { this.state.messageSent === false ?
              <div className="row">
                <div className="col s12 m12 s12">
                  <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                      <div className="col s1"></div>
                      <div className="input-field col s5">
                        <input id="name" value={this.state.name} placeholder="Name" name="username" onChange={this.handleChange} type="text" className="validate contact-textbox" />
                   
                      </div>
                      <div className="input-field col s5">
                        <input id="email" value={this.state.email} placeholder="Email" name="email" onChange={this.handleChange} type="email" className="validate" />
                        
                      </div>
                    </div>
                    <div className="row">
                    <div className="col s1"></div>
                      <div className="input-field col s10">
                        <textarea id="subject" value={this.state.subject} placeholder="Subject" name="subject" onChange={this.handleChange} className="materialize-textarea"></textarea>
                      
                      </div>
                      <div className="col s1"></div>
                    </div>
                    <div className="row">
                    <div className="col s1"></div>
                      <div className="input-field col s10">
                        <textarea id="bussinessname" value={this.state.bussinessname} placeholder="Bussiness Name" name="bussinessname" onChange={this.handleChange} className="materialize-textarea"></textarea>
                      
                      </div>
                      <div className="col s1"></div>
                    </div>
                    <div className="row">
                    <div className="col s1"></div>
                      <div className="col s10">
                        <textarea id="message" style={{minHeight: '200px'}} value={this.state.message} placeholder="Message" name="message" onChange={this.handleChange} className="materialize-textarea"></textarea>
                   
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
              </div> :
              <div className="row">
                <div className="col s3 align-center"></div>
                <div className="col s6 align-center">
                  <img className="responsive-img" src={messagesentimage} alt='message sent' />
                </div>
                <div className="col s3 align-center"></div>
              </div>
              }
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
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
        messagesentimage
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
