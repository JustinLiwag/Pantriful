import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";

class Status extends Component {
    statusText = () => {
      if (this.props.profile.profile.shoppingListOne.length > 0 &&
            this.props.profile.profile.shoppingListTwo.length > 0) {
           return (
               <div>
               <p className="pt-2 text-gray-700 leading-relaxed">You only have one <span className="text-orange-base font-bold">last step</span> to complete. Your delivery information! Be sure to also check out your new profile!</p>
                  <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full " to="/dashboard">Enter Delivery Details</Link>
               </div> 
           )
       }
       return (
           <div>
              <p className="pt-2 text-gray-700 leading-relaxed">You haven't set up your <span className="text-orange-base font-bold">shopping lists</span> yet. Go ahead and do that next!</p>
              <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full " to="/create-shopping-list">Create Shopping List</Link>
           </div>
       )
    }

    render () { 
        return (
            <div className="md:flex md:w-3/4 container items-center mt-4 md:mt-0 mb-8 md:mb-16">

              <div className="md:flex md:max-w-md text-left md:mr-8 mx-auto">
                <img className="w-20 h-20 block md:inline-block mx-auto" src="./images/dashboard/profile.placeholder.png" alt="" />
                <div className="md:ml-4 text-center md:text-left mt-4 md:mt-0">
                  <p className="text-xl font-medium tracking-wide text-gray-700">Hi, {this.props.auth.user.name} {this.props.auth.user.lastName}</p>
                  <p className="text-xl text-orange-base tracking-wide">({this.props.profile.profile.username})</p>
                  {this.statusText()}
                </div>
              </div>

              <div className="hidden md:block w-1/2">
                <div className="shadow-lg rounded-lg max-w-sm">
                  <h3 className="bg-green-button rounded-t-lg py-2 text-xl text-white font-bold">What do I do next? ({this.props.profile.profile.shoppingListOne.length > 0 &&
            this.props.profile.profile.shoppingListTwo.length > 0 ? "2" : "1"}/3)</h3>
                  <ul className="text-left">
                    <li className="ml-4 mt-4">
                      <Link to="/dashboard">
                        <div className="flex items-center px-4">
                          <img className="h-8 w-9" src="./images/dashboard/checkmark.png" alt=""></img>
                          <div className="px-5 opacity-50">
                            <h4 className="text-sm text-orange-base tracking-wide font-bold"> Create Pantry</h4>
                            <p className="text-sm text-gray-700">so we can figure out what you like.</p>  
                          </div>
                        </div>
                      </Link>
                    </li>
                    <li className="ml-4 mt-4">
                      { this.props.profile.profile.shoppingListOne.length === 0 &&
                        this.props.profile.profile.shoppingListTwo.length === 0
                        ? <Link to="/create-shopping-list">
                            <div className="flex items-center px-4">
                              <img className="h-8 w-9" src="./images/dashboard/empty-checkmark.png" alt=""></img>
                              <div className="px-5">
                                <h4 className="text-sm text-orange-base tracking-wide font-bold">Create example shopping lists</h4>
                                <p className="text-sm text-gray-700">to let us know how often you eat things.</p>  
                              </div>
                            </div>
                          </Link>
                        : <Link to="/dashboard">
                            <div className="flex items-center px-4">
                              <img className="h-8 w-9" src="./images/dashboard/checkmark.png" alt=""></img>
                              <div className="px-5 opacity-50">
                                <h4 className="text-sm text-orange-base tracking-wide font-bold">Create example shopping lists</h4>
                                <p className="text-sm text-gray-700">to let us know how often you eat things.</p>  
                              </div>
                            </div>
                          </Link>
                      }
                    </li>
                    <li className="ml-4 py-4">
                      <Link to="/dashboard">
                        <div className="flex items-center px-4">
                          <img className="h-8 w-9" src="./images/dashboard/empty-checkmark.png" alt=""></img>
                          <div className="px-5">
                            <h4 className="text-sm text-orange-base tracking-wide font-bold">Enter in delivery details</h4>
                            <p className="text-sm text-gray-700">so we can figure out where to send your food.</p>  
                          </div>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
        )
};
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { getCurrentProfile }
)(Status);
