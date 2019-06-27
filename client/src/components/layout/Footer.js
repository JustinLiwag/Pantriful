import React, { Component } from "react";
import {Link} from "react-router-dom";

class Footer extends Component {
  render() {
    return (
      <footer className="bg-orange-base pt-12 pb-4 text-white">
          <div className="container">
            <div className="md:flex justify-between px-12 md:px-4 md:p-4">
              <div className="mb-4 md:mb-0">
                <h3 className="text-3xl font-extrabold italic text-center md:text-left">Pantriful</h3>
                <p>Your own smart personal grocery shopper</p>
              </div>
              <div className="mb-4 md:mb-0">
                <h4 className="mb-4 font-extrabold">Menu</h4>
                <p><Link to="/">Home</Link></p>
                <p><Link to="/register">Sign Up</Link></p>
                <p><Link to="/login">Login</Link></p>
              </div>
              <div>
                <h4 className="mb-4 font-extrabold">Contact Us</h4>
                <p>hello@pantriful.com</p>
                <p>Pasadena, California</p>
              </div>
            </div>
            <div className="mt-12 p-4 md:pt-8 p-4 md:flex justify-between border-t border-white w-5/6 md:w-full mx-auto text-center">
              <p>© 2019 Pantriful</p>
              <p>Made in Pasadena, CA</p>
            </div>
          </div>
        </footer>
    );
  }
}

export default Footer;
