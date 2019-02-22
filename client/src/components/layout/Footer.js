import React, { Component } from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <div>
        <section class="quote container">
              <p>“You don’t have to cook fancy or complicated masterpieces - just good food from fresh ingredients.”<br /><br />-
                  Julia Child</p>
        </section>
        <section className="footer ">
              <div className="container">
                  <Link className="footer-img" to="/"><img src="images/pantriful-logo.png" alt=""/></Link>
                  <p className="footer-note">Made with love in Pasadena, Ca</p>
                  <img className="footer-logo" src="images/footer-logo.png" alt=""/>
              </div>
              <div className="footer-menu">
                  <h3>Menu</h3>
                  <p><Link to="/">Home</Link></p>
                  <p><Link to="/register">Sign Up</Link></p>
                  <p><Link to="/login">Login</Link></p>
              </div>
              <div className="footer-contact">
                  <h3>Contact Us</h3>
                  <p>hello@pantriful.com</p>
                  <p>Pasadena, California</p>
              </div>
        </section>
      </div>
    );
  }
}

export default Footer;
