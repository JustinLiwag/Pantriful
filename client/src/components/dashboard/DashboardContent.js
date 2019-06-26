import React, { Component } from "react";
// import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

import Home from './Home'
import Status from './Status'

class DashboardContent extends Component {
    state = {
      openTab: "Home"
    }

    componentDidMount() {
      window.scrollTo(0, 0);
    }

    changeTab = (input, e) => {
      this.setState({
        openTab: input
      })
    }

    toggleMenuClasses = (item) => {
      if (this.state.openTab === item) {
        return "inline px-12 py-4 border-b-4 border-orange-base"
      }
      return "inline px-12 py-4 text-gray-500"
    } 

    render () {
        return (
          <div className="border-t-4 border-orange-base">
            <Navbar />
            <Status />

            <div className="border-b border-gray-300 py-4 mb-4">
              <ul className="container">
                <li className={this.toggleMenuClasses("Home")}><button className="focus:outline-none" name="Home" onClick={(e) => this.changeTab("Home", e)}>Home</button></li>
                <li className={this.toggleMenuClasses("Lists")}><button className="focus:outline-none" name="Lists" onClick={(e) => this.changeTab("Lists", e)}>Lists</button></li>
                <li className={this.toggleMenuClasses("Pantry")}><button className="focus:outline-none" name="Pantry" onClick={(e) => this.changeTab("Pantry", e)}>Pantry</button></li>
                <li className={this.toggleMenuClasses("Apps")}><button className="focus:outline-none" name="Apps" onClick={(e) => this.changeTab("Apps", e)}>Apps</button></li>
              </ul>
            </div>

            {this.state.openTab === "Home" ? <Home changeTab={this.changeTab}/> : null}
            {this.state.openTab === "Lists" ? <p className="container text-center my-12">Lists Component</p> : null}
            {this.state.openTab === "Pantry" ? <p className="container text-center my-12">Pantry Component</p> : null}
            {this.state.openTab === "Apps" ? <p className="container text-center my-12">Apps Component</p> : null}

            <Footer />
        </div>
        );
    }
    
};

export default DashboardContent;
