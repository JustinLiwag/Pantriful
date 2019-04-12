import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "../layout/Navbar"
import Footer from "../layout/Footer"

class DashboardContent extends Component {
    statusUpdateContainer = () => {
        if (this.props.profile.shoppingListOne.length > 0 &&
            this.props.profile.shoppingListTwo.length > 0) {
           return (
               <div className="status-update-text">
                   <p>Hi, {this.props.auth.user.name} {this.props.auth.user.lastName}</p>
                   <p>({this.props.profile.username})</p>
                   <p>You only have one last step to complete. Your delivery information! Be sure to also check out your new profile!</p>
                   <Link to="/dashboard">Enter Delivery Details</Link>
               </div> 
           )
       }
       return (
           <div className="status-update-text">
               <p>Hi, {this.props.auth.user.name} {this.props.auth.user.lastName}</p>
               <p>({this.props.profile.username})</p>
               <p>You haven't set up your shopping lists yet. Go ahead and do that next!</p>
               <Link to="/create-shopping-list">Create Shopping List</Link>
           </div>
       )
    } 
    
    completeOnboardingStep = () => {
        if (
          this.props.profile.shoppingListOne.length > 0 &&
          this.props.profile.shoppingListTwo.length > 0
        ) {
          return "getting-started-completed";
        }
        return null
    }
    render () {
        return (
          <div>
            <Navbar />
            <div className="dashboard-status">
              <div className="status-update-container">
                <img src="./images/dashboard/profile.placeholder.png" alt="" />
                {this.statusUpdateContainer()}
              </div>
              <div className="getting-started">
                <div>
                  <h3>Getting Started</h3>
                  <div className="getting-started-completed">
                    <Link to="/dashboard">
                      <h4>1. Create Pantry</h4>
                      <p>so we can figure out what you like.</p>
                    </Link>
                  </div>
                  <div className={this.completeOnboardingStep()}>
                    <Link to="/create-shopping-list">
                      <h4>2. Create example shopping lists</h4>
                      <p>to let us know how often you eat things.</p>
                    </Link>
                  </div>
                  <div>
                    <Link to="/dashboard">
                      <h4>3. Enter in delivery details</h4>
                      <p>
                        so we can figure out where to send your food.
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <ul className="dashboard-tab-menu">
                  <li className="active-tab-menu">
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Lists</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Pantry</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Tools</Link>
                  </li>
                  <li>
                    <Link to="/dashboard">Settings</Link>
                  </li>
                </ul>

                <div className="active-menu-item">
                  <div className="active-menu-container">
                    <div className="dashboard-list">
                      <div>
                        <h3>
                          Upcoming Grocery List for March 15, 2019
                        </h3>
                        <h3>View all Lists</h3>
                      </div>
                      <div>
                        <p>Coming Soon...</p>
                      </div>
                    </div>

                    <div className="dashboard-pantry">
                      <div>
                        <h3>My Pantry</h3>
                        <h3>View My Pantry</h3>
                      </div>
                      <div>
                        <p>Coming Soon...</p>
                      </div>
                    </div>

                    <div className="dashboard-tools">
                      <div>
                        <h3>Tools</h3>
                      </div>
                      <div>
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>

                    <div className="dashboard-resources">
                      <div>
                        <h3>Resources</h3>
                      </div>
                      <div>
                        <div />
                        <div />
                        <div />
                        <div />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Footer />
            </div>
          </div>
        );
    }
    
};

export default DashboardContent;
