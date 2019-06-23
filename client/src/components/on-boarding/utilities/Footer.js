import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class Footer extends Component {
  render() {
    const {first, last, modal} = this.props
    return (
      <div className="fixed bottom-0 w-full py-4 shadow-inner bg-white">
        <div className="flex justify-around ">
            {first 
            ? <Link to="/" className="px-6 sm:px-12 py-2 rounded-full bg-white border border-gray-border text-gray-600">Back</Link>
            : <button className="px-6 sm:px-12 py-2 rounded-full bg-white border border-gray-border text-gray-600" onClick={this.props.back}>Back</button>}
            {modal 
            ? <div className="rounded-full bg-orange-base"><img onClick={this.props.open} className="block md:hidden p-3" src="/images/on-boarding/modalButton.png" alt=""></img></div>
            : ""}
            {last
            ? <button className="px-6 sm:px-12 py-2 rounded-full bg-green-button text-white font-bold" onClick={this.props.submit}>Sumbit</button> 
            : <button className="px-6 sm:px-12 py-2 rounded-full bg-green-button text-white font-bold" onClick={this.props.continue}>Continue</button>}
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
