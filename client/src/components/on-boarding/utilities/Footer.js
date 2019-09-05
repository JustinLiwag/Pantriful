import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const {first, last, modal, none} = this.props
    return (
      <div className="fixed bottom-0 w-full py-4 border-t-2 border-gray-200 bg-white">
        {modal 
            ? <div>
                <div className="absolute shadow-xl shopping-cart-button rounded-full bg-orange-base"><img onClick={this.props.open} className="block md:hidden p-3" src="/images/on-boarding/modalButton.png" alt=""></img></div>
                <div className="block md:hidden absolute shopping-cart-button-quantity text-white px-2 py-1 rounded-full bg-red-500 font-bold text-xs">{this.props.length}</div>
              </div>
            : ""}

        <div className="flex justify-around ">
          {first 
          ? (none ? null : <Link to="/" className="px-8 sm:px-12 py-2 rounded-full bg-white border-2 border-gray-400 text-gray-500 hover:border-gray-500 hover:text-gray-600">Back</Link>)
          : <button className="px-8 sm:px-12 py-2 rounded-full bg-white border-2 border-gray-400 text-gray-500 hover:border-gray-500 hover:text-gray-600" onClick={this.props.back}>Back</button>}

          {last
          ? <button className="px-8 sm:px-12 py-2 rounded-full bg-green-400 text-white font-bold hover:bg-green-500" onClick={this.props.submit}>Submit</button> 
          : <button className="px-8 sm:px-12 py-2 rounded-full bg-green-400 text-white font-bold hover:bg-green-500" onClick={this.props.continue}>Continue</button>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  {}
)(Footer);
