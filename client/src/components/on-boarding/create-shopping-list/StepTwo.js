import React, { Component } from "react";
// import {Link} from "react-router-dom"
import Navbar from "../utilities/Navbar"
import Footer from "../utilities/Footer"

class StepTwo extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <div className="mb-48">
        <Navbar />
        <div className="container px-8 md:px-0">
        <svg className="mx-auto mt-24" width="256" height="168" viewBox="0 0 256 168" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="18.2336" height="18.1818" fill="#81E6D9"/>
            <rect y="24.7275" width="18.2336" height="18.1818" fill="#FBB6CE"/>
            <rect y="49.4541" width="18.2336" height="18.1818" fill="#A3BFFA"/>
            <rect x="23.339" y="4.36328" width="66.3704" height="9.45456" fill="#81E6D9"/>
            <rect x="23.339" y="29.0908" width="66.3704" height="9.45456" fill="#FBB6CE"/>
            <rect x="23.339" y="53.8184" width="66.3704" height="9.45456" fill="#A3BFFA"/>
            <rect y="100.364" width="18.2336" height="18.1818" fill="#FBD38D"/>
            <rect y="125.091" width="18.2336" height="18.1818" fill="#9AE6B4"/>
            <rect y="149.818" width="18.2336" height="18.1818" fill="#B794F4"/>
            <rect x="23.339" y="104.728" width="66.3704" height="9.45456" fill="#FBD38D"/>
            <rect x="23.339" y="129.455" width="66.3704" height="9.45456" fill="#9AE6B4"/>
            <rect x="23.339" y="154.182" width="66.3704" height="9.45456" fill="#B794F4"/>
            <path d="M237.402 82.1822C239.214 82.1822 240.684 80.7169 240.684 78.9095C240.684 77.102 239.214 75.6367 237.402 75.6367C235.589 75.6367 234.12 77.102 234.12 78.9095C234.12 80.7169 235.589 82.1822 237.402 82.1822Z" fill="#EE9986"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M189.22 41.4546C185.015 41.4546 181.607 44.8535 181.607 49.0463V108.045C181.607 112.238 185.015 115.636 189.22 115.636H248.387C252.591 115.636 256 112.238 256 108.045V49.0463C256 44.8535 252.591 41.4546 248.387 41.4546H189.22ZM196.507 92.6444C193.924 92.6444 191.83 94.7323 191.83 97.3079V99.9108C191.83 102.486 193.924 104.574 196.507 104.574H213.039C215.622 104.574 217.716 102.486 217.716 99.9108V97.3079C217.716 94.7323 215.622 92.6444 213.039 92.6444H196.507ZM192.048 57.3972C192.048 54.8216 194.142 52.7337 196.725 52.7337H240.882C243.465 52.7337 245.559 54.8216 245.559 57.3972V60.0001C245.559 62.5756 243.465 64.6635 240.882 64.6635H196.725C194.142 64.6635 192.048 62.5756 192.048 60.0001V57.3972ZM196.725 72.6891C194.142 72.6891 192.048 74.777 192.048 77.3526V79.9554C192.048 82.531 194.142 84.6189 196.725 84.6189H240.882C243.465 84.6189 245.559 82.531 245.559 79.9554V77.3526C245.559 74.777 243.465 72.6891 240.882 72.6891H196.725Z" fill="#EE9986"/>
            <path d="M98.3802 133.955C171.791 158.356 150.317 77.1861 118.855 95.6111C87.3936 114.036 142.326 152.878 171.791 90.6313" stroke="#FEB2B2" stroke-width="2" stroke-dasharray="3 3"/>
            <path d="M95.8833 33.8622C192.266 33.8622 167.296 54.2793 143.825 54.2793C120.353 54.2793 102.375 61.7487 172.79 73.2021" stroke="#90CDF4" stroke-width="2" stroke-dasharray="3 3"/>
        </svg>


        
          <h3 className="mt-8 text-2xl md:text-3xl font-bold text-gray-700">You will be creating two example grocery lists.</h3>
          <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">When creating your example shopping lists it is recommended that you create something that closely resembles what you typically get from the grocery. </p>
        </div>
        <Footer continue={this.continue} back={this.back}/>
      </div>
    );
  }
}

export default StepTwo;
