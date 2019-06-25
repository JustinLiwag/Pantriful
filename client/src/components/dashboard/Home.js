import React, { Component } from "react";

class Home extends Component {
    render () {
        return (
            <div className="container">
                {/* Grocery Lists */}
                <div className="">
                    <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                        <h3 className="text-gray-700 font-bold tracking-wide">Upcoming Grocery Lists</h3>
                        <p className="text-orange-base">View All</p>
                    </div>
                    <div className="h-64 h-auto min-h-full bg-white shadow-lg mb-4">
                        <div className="rounded-t-lg flex justify-around bg-orange-base py-4 text-center text-white font-bold text-xl">
                            <h3 className="w-3/12">Est. Delivery Date</h3>
                            <h3 className="w-5/12">Summary</h3>
                            <h3 className="w-4/12">Status</h3>
                            <div className="w-3/12"></div>
                        </div>
                        {/* Individual Lists */}
                        <div className="flex justify-around py-4 border-b-2 border-gray-300">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                    </div>
                </div>

                {/* Pantry */}
                <div>
                    <div className="flex justify-between border-b-2 border-gray-300 py-4 mt-12 mb-4">
                        <h3 className="text-gray-700 font-bold tracking-wide">My Pantry</h3>
                        <p className="text-orange-base">More details</p>
                    </div>
                    <div>
                        
                    </div>
                </div>
                <div></div>
                <div></div>
            </div>
        )
};
}

export default Home;
