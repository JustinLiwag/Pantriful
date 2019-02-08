import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import Spinner from "../common/Spinner";
import DashboardContent from "./DashboardContent";

class Dashboard extends Component {
  componentDidMount() {
    this.props.getCurrentProfile();
  }

  render() {
    // const { user } = this.props.auth;
    const { profile, loading } = this.props.profile;

    let dashboardContent;

    if (profile === null || loading) {
      dashboardContent = <Spinner />;
    } else {
      // Check if logged in user has profile data
      if (Object.keys(profile).length > 0) {
        dashboardContent = <DashboardContent profile={profile} />;
      } else {
        // User is logged in but has no profile
        dashboardContent = (
          <div className="on-boarding-container">
            <h2 className="dashboard-welcome-title">
              Welcome to Pantriful!
            </h2>
            <p className="dashboard-welcome-description">
              Before getting into the great features we have to offer we need to help you create a customized pantry. <br></br><br></br>

              This pantry will help us figure out what your diet looks like and give you a great snapshot where you are today.
            </p>
            <Link to="/create-food-profile" className="button about-button">
              Get Started!
            </Link>
          </div>
        );
      }
    }

    return <div className="container">{dashboardContent}</div>;
  }
}

Dashboard.proptypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Dashboard);
