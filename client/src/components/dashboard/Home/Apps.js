import React, { Component } from "react";

class Apps extends Component {
    render() {
        return (
            <div className="mt-12 mb-12">
                <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                    <h3 className="text-gray-700 font-bold tracking-wide">My Apps</h3>
                    <button onClick={(e) => this.props.changeTab("Apps", e)} className="text-orange-base">View All</button>
                </div>
                <div className="shadow-lg">
                    <p className="text-2xl px-4 md:px-0 md:text-4xl py-24 text-center text-gray-300">App Store Coming Soon!</p>
                </div>
            </div>
        )
    };
}


export default Apps;
