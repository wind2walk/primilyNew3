import React from "react";
import "materialize-css/sass/materialize.scss";

export const DemoPageTemplate = ({demo}) => {
    // console.log(demo)
    return (
        <div>
            <div className="row"><div className="col s12"><br></br></div></div>
            <div className="row"><div className="col s12"><br></br></div></div>
            <div className="container">
                {/* <div className="row">
                    <div className="col s12 feature-items center-align">
                        <h5>{demo.demoHead}</h5>
                        <p>{demo.description}</p>
                    </div>
                    <div className="col s3"></div>
                    <div className="col s3"><img src={demo.demoImages.src1} alt="" /></div>
                    <div className="col s0"></div>
                    <div className="col s3"><img src={demo.demoImages.src2} alt="" /></div>
                    <div className="col s3"></div>
                </div> */}
                <br></br>
                {/* <div className="row">
                    <hr />
                    <h5>Contact Us</h5>
                    <form
                        name="contact-form"
                        method="post"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field" >
                        <input name="name" placeholder="Your name" type="text" />
                        <input name="email" placeholder="Your email address" type="email" />
                        <textarea name="message" placeholder="Your message" id="" cols="30" rows="40" />
                        <button className="waves-effect waves-light btn">Send</button>
                    </form>
                </div> */}
            </div>
        </div>
    );
};

export default DemoPageTemplate;

