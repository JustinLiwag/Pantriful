import React, { Component } from "react";
import { PieChart, Pie, Sector, Cell, Tooltip} from "recharts"

const data = [
            {name: 'Protein', value: 15.57}, 
            {name: 'Alt. Protein', value: 6.12},
            {name: 'Vegetables', value: 28.46}, 
            {name: 'Fruits', value: 21.11},
            {name: 'Grains', value: 17.93},
            {name: 'Dairy', value: 10.81}
        ];
const COLORS = ['#3182CE', '#744210', '#E53E3E', '#38A169', "#81E6D9", "#D69E2E"];
const RADIAN = Math.PI / 180; 

class Home extends Component {
    render () {
        return (
            <div className="container">

                {/* Grocery Lists */}
                <div className="">
                    <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                        <h3 className="text-gray-700 font-bold tracking-wide">Upcoming Grocery Lists</h3>
                        <button onClick={(e) => this.props.changeTab("Lists", e)} className="text-orange-base">View All</button>
                    </div>
                    <div className="min-h-64 h-auto min-h-full bg-white shadow-lg mb-4">
                        <div className="rounded-t-lg flex justify-around bg-orange-base py-4 text-center text-white font-bold text-xl">
                            <h3 className="w-3/12">Est. Delivery Date</h3>
                            <h3 className="w-5/12">Summary</h3>
                            <h3 className="w-4/12">Status</h3>
                            <div className="w-3/12"></div>
                        </div>
                        {/* Individual Lists */}
                        <div className="flex justify-around py-4 border-b-2 border-gray-300 hover:bg-gray-100">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300 hover:bg-gray-100">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300 hover:bg-gray-100">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        <div className="flex justify-around py-4 border-b-2 border-gray-300 hover:bg-gray-100">
                            <p className="w-3/12">June 26, 2019</p>
                            <p className="w-5/12">Chicken Breast, Ground Turkey, Bell Peppers...</p>
                            <p className="w-4/12">Awaiting Approval</p>
                            <p className="w-3/12 text-orange-base tracking-wide">Details</p>
                        </div>
                        {/* /Individual Lists */}
                    </div>
                </div>
                {/* /Grocery Lists */}

                {/* Pantry */}
                <div className="">
                    <div className="flex justify-between border-b-2 border-gray-300 py-4 mt-12 mb-4 ">
                        <h3 className="text-gray-700 font-bold tracking-wide">My Pantry</h3>
                        <button onClick={(e) => this.props.changeTab("Pantry", e)} className="text-orange-base">More details</button>
                    </div>

                    {/* Pantry Content */}
                    <div className="p-8 flex shadow-lg justify-between mb-4">
                        {/* Left Pantry */}
                        <div className="w-2/6 mx-4">
                            <div className="mx-auto">
                                {/* PIE CHART */}
                                <PieChart className="mx-auto w-full" width={380} height={300} onMouseEnter={this.onPieEnter}>
                                    <Pie
                                    data={data} 
                                    cx="50%" 
                                    cy="50%" 
                                    innerRadius={70}
                                    outerRadius={120} 
                                    fill="#8884d8"
                                    paddingAngle={1}
                                    label
                                    >
                                        {
                                        data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                    }
                                    </Pie>
                                    <Tooltip />
                                </PieChart>
                            </div>

                            <div className="shadow-lg rounded-lg">
                                <h3 className="bg-green-button py-2 font-bold text-white text-xl rounded-t-lg">Diet Breakdown</h3>
                                <ul className="flex justify-around py-4">
                                    <li className="text-left">
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-blue-600 rounded-full"></div>Protein <span className="text-green-500 font-bold">15.57%</span></li>
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-yellow-900 rounded-full"></div>Alt. Protein <span className="text-green-500 font-bold">6.12%</span></li>
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-red-600 rounded-full"></div>Vegetables <span className="text-green-500 font-bold">28.46%</span></li>
                                    </li>
                                    <li className="text-left">
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-green-600 rounded-full"></div>Fruits <span className="text-green-500 font-bold">21.11%</span></li>
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-teal-300 rounded-full"></div>Grains <span className="text-green-500 font-bold">17.93%</span></li>
                                        <li className="py-2"><div className="inline-block mr-2 h-4 w-4 bg-yellow-600 rounded-full"></div>Dairy <span className="text-green-500 font-bold">10.81%</span></li>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Right Pantry */}
                        <div className="flex flex-wrap w-4/6 mx-4">

                            {/* Pantry Tools row 1 */}
                            <div className="flex w-full mb-4">
                                
                                {/* Pantriful Score */}
                                <div className="w-1/2">
                                    <div className="rounded-lg min-h-full bg-orange-400 mr-4 p-4 text-white font-bold">
                                        <h3>Pantriful Score</h3>
                                    </div>
                                </div>
                                {/* /Pantriful Score */}
                                
                                {/* Goal Progress */}
                                <div className="w-1/2">
                                    <div className="rounded-lg min-h-full bg-green-400 ml-4 p-4 text-white font-bold">
                                        Improve My Pantry
                                    </div>
                                </div>
                                {/* /Goal Progress */}
                                
                            </div>
                            {/* /Pantry Tools row 1 */}

                            {/* Pantry Tools row 2 */}
                            <div className="flex w-full mt-4">
                                
                                {/* Pantriful Score */}
                                <div className="w-1/2">
                                    <div className="rounded-lg min-h-full bg-purple-400 mr-4 p-4 text-white font-bold">
                                        <h3>Goal Progress</h3>
                                    </div>
                                </div>
                                {/* /Pantriful Score */}
                                
                                {/* Goal Progress */}
                                <div className="w-1/2">
                                    <div className="rounded-lg min-h-full bg-yellow-500 ml-4 p-4 text-white font-bold">
                                        <h3>Diet Trends</h3>
                                    </div>
                                </div>
                                {/* /Goal Progress */}
                                
                            </div>
                            {/* /Pantry Tools row 2 */}

                        </div>
                        {/* /Right Pantry */}

                    </div>
                    {/* /Pantry Content */}

                </div>
                {/* /Pantry */}

                {/* My Apps */}
                <div className="mt-12 mb-12">
                    <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                        <h3 className="text-gray-700 font-bold tracking-wide">My Apps</h3>
                        <button onClick={(e) => this.props.changeTab("Apps", e)} className="text-orange-base">View All</button>
                    </div>
                    <div className="shadow-lg">
                        <p className="text-4xl py-24 text-center text-gray-300">App Store Coming Soon!</p>
                    </div>
                </div>
                {/* /My Apps */}

                {/* Quote */}
                <div className="border-t border-gray-300 mt-12">
                    <div className="w-1/2 my-24 mx-auto text-2xl">
                        <p className="text-gray-500 text-center">“You don’t have to cook fancy or complicated masterpieces - just good food from fresh ingredients.” <br/><br/>- Julia Child</p>
                    </div>
                </div>
                {/* /Quote */}

            </div>
        )
};
}

export default Home;
