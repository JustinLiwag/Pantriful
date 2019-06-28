import React, { Component } from "react";
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

import Status from './Status'
import Home from './Home/HomeContainer'
import Lists from './Lists/ListsContainer'
import Pantry from './Pantry/PantryContainer'
import Apps from './Apps/AppsContainer'

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
        return "inline px-3 md:px-12 py-4 border-b-4 border-orange-base"
      }
      return "inline px-3 md:px-12 py-4 text-gray-500"
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
            {this.state.openTab === "Lists" ? <Lists changeTab={this.changeTab}/> : null}
            {this.state.openTab === "Pantry" ? <Pantry changeTab={this.changeTab}/> : null}
            {this.state.openTab === "Apps" ? <Apps changeTab={this.changeTab}/> : null}

            <Footer />
        </div>
        );
    }
    
};

export default DashboardContent;
