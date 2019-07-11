import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { clearCurrentProfile } from "./actions/profileActions";

import { Provider } from "react-redux";
import store from "./store";

import PrivateRoute from "./components/common/PrivateRoute";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Dashboard from "./components/dashboard/Dashboard";
import CreateFoodProfile from "./components/on-boarding/create-pantry/onBoardingContainer";
import CreateShoppingList from "./components/on-boarding/create-shopping-list/shoppingListContainer";
import DeliveryDetails from "./components/on-boarding/delivery-details/deliveryDetailsContainer";

import "./css/App.css";
import "./css/LandingPage.css";
import "./css/Dashboard.css";
import "./css/On-boarding.css";
import "./css/tailwind.css";

// Check for token
if (localStorage.jwtToken) {
  // Set auth token header auth
  setAuthToken(localStorage.jwtToken);
  // decode token and get user info and exp
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Clear current profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = "/login";
  }
}

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Landing} />
            <div>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch key="Dashboard">
                <PrivateRoute exact path="/dashboard" component={Dashboard}/>
                <PrivateRoute
                  exact
                  path="/create-food-profile"
                  component = {CreateFoodProfile}
                />
                <PrivateRoute
                  exact
                  path="/create-shopping-list"
                  component = {CreateShoppingList}
                />
                <PrivateRoute
                  exact
                  path="/delivery-details"
                  component={DeliveryDetails}
                />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
