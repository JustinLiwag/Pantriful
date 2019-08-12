import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../actions/profileActions";
import { getLists } from "../../actions/listActions";
import Spinner from "../common/Spinner";

class Status extends Component {
    statusText = () => {
      if (this.props.lists.lists == null) {
        return <Spinner />
      }
      if (this.props.lists.lists.length > 0) {
        return (
          <div>
            <p className="pt-2 text-gray-700 leading-relaxed text-lg">Your <span className="text-orange-base font-bold">grocery list</span> for this week has been created by your Pantriful Assistant. Go and check it out!</p>
          </div>
        )
      }
      if (this.props.profile.profile.street) {
        return (
          <div>
            <p className="pt-2 text-gray-700 leading-relaxed text-lg">You are all set. We will be having a <span className="text-orange-base font-bold">Pantriful Assistant</span> reach out to you shortly. Go explore your profile!</p>
          </div> 
        )
      }
      if (this.props.profile.profile.shoppingListOne.length > 0 &&
            this.props.profile.profile.shoppingListTwo.length > 0) {
           return (
               <div>
               <p className="pt-2 text-gray-700 leading-relaxed text-lg">You only have one <span className="text-orange-base font-bold">last step</span> to complete. Your delivery information! Be sure to also check out your new profile!</p>
                  <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full " to="/delivery-details">Enter Delivery Details</Link>
               </div> 
           )
       }
       return (
           <div>
              <p className="pt-2 text-gray-700 leading-relaxed text-lg">You haven't set up your <span className="text-orange-base font-bold">shopping lists</span> yet. Go ahead and do that next!</p>
              <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full " to="/create-shopping-list">Create Shopping List</Link>
           </div>
       )
    }

    assistantText = () => {
      if (this.props.lists.lists.length > 0) {
        return (
          <p className="leading-relaxed text-gray-700">Your grocery list for this week is ready for your approval. Let me know if you want to change anything or add any notes for your driver!</p>
        )
      }
      return (
        <p className="leading-relaxed text-gray-700">I will be taking care of your account and making sure things run smoothly. I will be in touch shortly to get you going!</p>
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

            <div className="mt-4 md:mt-0 md:block md:w-1/2">
                {this.props.profile.profile.street
                ? <div className="shadow-lg rounded-lg max-w-sm">
                    <div className="bg-green-button flex items-center rounded-t-lg px-8 py-2 md:py-4 mx-auto mt-4 md:mt-0 mx-auto">
                      <img className="hidden md:block w-1/4 h-full mx-auto" src="./images/dashboard/assistant/profileImg.png" alt=""></img>
                      <div className="w-3/4 md:text-left md:ml-4 mx-auto">
                        <h3 className="text-white text-2xl font-bold md:tracking-wider">Julie Evans</h3>
                        <div className="md:flex text-xs text-white font-bold tracking-wider">
                          <p className="hidden md:block">{this.props.profile.profile.city}, {this.props.profile.profile.state}</p>
                          <p className="hidden md:block md:ml-4">(626) 658-7775</p>
                        </div>
                      <p className="hidden md:block text-green-700 italic">"French food fanatic</p>
                      </div>
                    </div>
                    <div className="py-6 px-8 text-gray-700 md:text-left">
                      <img className="md:hidden w-1/4 h-full mx-auto" src="./images/dashboard/assistant/profileImg.png" alt=""></img>
                      <p className="font-bold text-lg mb-1 text-gray-600">Hi {this.props.profile.profile.user.name}, I am your <span className="text-orange-base">Pantriful Assistant</span>.</p>
                      {this.assistantText()}
                    </div>
                  </div>
                : <div className="shadow-lg rounded-lg max-w-sm">
                  <h3 className="bg-green-button rounded-t-lg py-2 text-xl text-white font-bold">What do I do next? ({this.props.profile.profile.shoppingListOne.length > 0 && this.props.profile.profile.shoppingListTwo.length > 0 ? "2" : "1"}/3)</h3>
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
                      <Link to="/delivery-details">
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
              }
              </div>
            </div>
        )
};
}

const mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
  lists: state.lists
});

export default connect(
  mapStateToProps,
  { getCurrentProfile, getLists }
)(Status);
