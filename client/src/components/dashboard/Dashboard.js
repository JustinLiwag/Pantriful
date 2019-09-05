import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getLists } from "../../actions/listActions";
import Spinner from "../common/Spinner";
import DashboardContent from "./DashboardContent";
import Navbar from "../layout/Navbar"
// import OnBoardingContainer from "../on-boarding/create-pantry/onBoardingContainer"
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
          <div className="">
            <Navbar />
            <div className="text-center">
              <img className="w-48 sm:w-64 mx-auto" src="/images/dashboard/welcome.png" alt=""></img>
              <h3 className="text-xl sm:text-2xl md:text-3xl mx-4 mt-4 font-bold text-gray-700">Hello {this.props.auth.user.name}. Welcome to <span className="text-orange-base">Pantriful</span>!</h3>
              <p className="px-8 sm:px-0 sm:max-w-xl mx-auto mt-2 px-4 text-md sm:text-lg text-gray-600 leading-relaxed sm:leading-loose">We’ll help make grocery shopping a breeze by creating customized shopping lists based on your preferences. But first let’s get to know you better so we can tailor the experience that best fits you.</p>
              <Link className="inline-block mt-4 bg-green-400 sm:hover:bg-green-500 py-2 sm:py-3 px-12 sm:px-16 sm:text-lg text-white rounded-full font-bold" to="/create-food-profile">
                Get started!
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
