import React, { Component } from "react";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";

class Lists extends Component {    
    render() {
        return (
            <div className="container mb-24">
                <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                    <h3 className="text-gray-700 font-bold tracking-wide">All Grocery Lists</h3>
                </div>
                <div className="min-h-64 h-auto min-h-full bg-white shadow-lg mb-4">
                    <div className="rounded-t-lg flex justify-around bg-orange-base py-6 md:py-4 text-center text-white font-bold text-xl">
                        <h3 className="w-3/12 hidden md:block">Est. Delivery Date</h3>
                        <h3 className="w-5/12 hidden md:block">Summary</h3>
                        <h3 className="w-4/12 hidden md:block">Status</h3>
                        <div className="w-3/12"></div>
                    </div>
                    <div className="py-12 mx-auto">
                        {this.props.profile.profile.shoppingListOne.length > 0 &&
                            this.props.profile.profile.shoppingListTwo.length > 0
                            ? <div>
                                <img className="mx-auto mb-2" src="/images/dashboard/loading.gif" alt="loading"></img>
                                <p className="mx-auto max-w-xl text-gray-600 px-4 md:px-0 text-xl md:text-2xl">Your <span className="text-orange-base font-bold">first customized grocery</span> list is being created! We are pairing you with a member from our team who will assist you shortly.</p>
                            </div>
                            : <p className="mx-auto max-w-xl text-gray-600 px-4 md:px-0 text-xl md:text-2xl">Welcome to <span className="text-orange-base font-bold">Pantriful!</span> Go ahead and create your example shopping lists and we can get you started.</p>}
                    </div>
                    {/* Individual Lists */}
                    {/*<div className="flex justify-around py-4 border-b-2 border-gray-300 hover:bg-gray-100">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                    </div>*/}
                    {/* /Individual Lists */}
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
)(Lists);
