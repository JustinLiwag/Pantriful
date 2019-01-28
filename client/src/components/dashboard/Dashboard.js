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
    const { user } = this.props.auth;
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
          <div>
            <h2>
              Welcome {user.name} {user.lastName}
            </h2>
            <p className="dashboard-welcome-p">
              Let’s make your food profile. Your food profile will help us
              generate custom shopping lists for you as well as give you a great
              snapshot of what your diet looks like.
            </p>
            <Link to="/create-food-profile" className="button about-button">
              Get Started!
            </Link>
            <Link
              to="/create-food-profile-test"
              className="button about-button"
            >
              Test Food Profile
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="container">
        <h1>Dashboard</h1>
        {dashboardContent}
      </div>
    );
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
