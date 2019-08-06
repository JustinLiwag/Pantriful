import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getLists } from "../../actions/listActions";
import Spinner from "../common/Spinner";
import DashboardContent from "./DashboardContent";
import Navbar from "../layout/Navbar"
// import Footer from "../layout/Footer"

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
    this.props.getLists();
  }

  render() {
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <DashboardContent profile={profile} auth={this.props.auth} history={this.props.history}/>;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div className="font-sans mb-24">
            <Navbar />
            <div className="container px-8 md:px-0">
              <img className="mx-auto mt-8" src="/images/dashboard/welcome.png" alt=""></img>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-gray-600">Hello {this.props.auth.user.name}. Welcome to <span className="text-orange-base italic font-extrabold tracking-wide">Pantriful</span>!</h3>
              <p className="mt-1 text-md md:text-lg leading-loose max-w-xl mx-auto text-gray-600">We’ll help make grocery shopping a breeze by creating customized shopping lists based on your preferences. But first let’s get to know you better so we can tailor the experience that best fits you.</p>
              <Link className="mt-4 inline-block bg-green-button font-bold text-white px-12 md:px-24 py-2 md:py-4 rounded-full md:text-xl" to="/create-food-profile">
                Let's get started!
              </Link>
            </div>
          </div>
        );
      }
    }

    return <div>{dashboardContent}</div>;
  }
}

Dashboard.proptypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getLists }
)(Dashboard);
