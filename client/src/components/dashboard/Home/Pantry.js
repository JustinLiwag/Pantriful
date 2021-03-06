import React, { Component } from "react";
// Need to uninstall recharts possibly
// import { PieChart, Pie, Cell, Tooltip } from "recharts"
import PieChart from 'react-minimal-pie-chart';
// import { VictoryPie, VictoryTheme } from 'victory';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getCurrentProfile } from "../../../actions/profileActions";

class Pantry extends Component {
    pantryLogic = () => {
        const { shoppingListOne, shoppingListTwo } = this.props.profile.profile
        let shoppingListOneTotal = 0, shoppingListTwoTotal = 0

        // Get average Total for each shoppingList
        const getTotal = (shoppingList, output) => {
            let lPrice = 0, uPrice = 0
            const results = []
            for (let i = 0; i < shoppingList.length; i++) {
                lPrice += shoppingList[i].lowPrice * shoppingList[i].amount
                uPrice += shoppingList[i].upperPrice * shoppingList[i].amount
            }
            results.push(lPrice)
            results.push(uPrice)
            return results
        }

        shoppingListOneTotal = getTotal(shoppingListOne, shoppingListOneTotal)
        shoppingListTwoTotal = getTotal(shoppingListTwo, shoppingListTwoTotal)
        let shoppingListAverageTotal = (((shoppingListOneTotal[0] + shoppingListTwoTotal[0]) / 2) +
            ((shoppingListOneTotal[1] + shoppingListTwoTotal[1]) / 2)) / 2

        const proteinOne = [], altProteinOne = [], vegetablesOne = [], fruitsOne = [], grainsOne = [], dairyOne = []
        const proteinTwo = [], altProteinTwo = [], vegetablesTwo = [], fruitsTwo = [], grainsTwo = [], dairyTwo = []
        const proteinPrice = [], altProteinPrice = [], vegetablesPrice = [], fruitsPrice = [], grainsPrice = [], dairyPrice = []

        // Shopping List One Sort Items by Category
        for (let i = 0; i < shoppingListOne.length; i++) {
            if (shoppingListOne[i].category === "Chicken" ||
                shoppingListOne[i].category === "Beef" ||
                shoppingListOne[i].category === "Pork" ||
                shoppingListOne[i].category === "Lamb" ||
                shoppingListOne[i].category === "Seafood" ||
                shoppingListOne[i].category === "Beef") {
                proteinOne.push(shoppingListOne[i])
            }
            if (shoppingListOne[i].category === "Alternative Protein") {
                altProteinOne.push(shoppingListOne[i])
            }
            if (shoppingListOne[i].category === "Vegetable") {
                vegetablesOne.push(shoppingListOne[i])
            }
            if (shoppingListOne[i].category === "Fruit") {
                fruitsOne.push(shoppingListOne[i])
            }
            if (shoppingListOne[i].category === "Grain") {
                grainsOne.push(shoppingListOne[i])
            }
            if (shoppingListOne[i].category === "Dairy") {
                dairyOne.push(shoppingListOne[i])
            }
        }

        // Shopping List Two Sort Items by Category
        for (let i = 0; i < shoppingListTwo.length; i++) {
            if (shoppingListTwo[i].category === "Chicken" ||
                shoppingListTwo[i].category === "Beef" ||
                shoppingListTwo[i].category === "Pork" ||
                shoppingListTwo[i].category === "Lamb" ||
                shoppingListTwo[i].category === "Seafood" ||
                shoppingListTwo[i].category === "Beef") {
                proteinTwo.push(shoppingListTwo[i])
            }
            if (shoppingListTwo[i].category === "Alternative Protein") {
                altProteinTwo.push(shoppingListTwo[i])
            }
            if (shoppingListTwo[i].category === "Vegetable") {
                vegetablesTwo.push(shoppingListTwo[i])
            }
            if (shoppingListTwo[i].category === "Fruit") {
                fruitsTwo.push(shoppingListTwo[i])
            }
            if (shoppingListTwo[i].category === "Grain") {
                grainsTwo.push(shoppingListTwo[i])
            }
            if (shoppingListTwo[i].category === "Dairy") {
                dairyTwo.push(shoppingListTwo[i])
            }
        }

        // Calculate Price for each category
        const calcPrice = (category, output) => {
            let lPrice = 0
            let uPrice = 0
            let combined = []
            for (let i = 0; i < category.length; i++) {
                lPrice += category[i].lowPrice * category[i].amount
                uPrice += category[i].upperPrice * category[i].amount
            }
            combined.push(lPrice)
            combined.push(uPrice)
            output.push(combined)
        }
        // Calculate lower/upper prices of each category
        calcPrice(proteinOne, proteinPrice)
        calcPrice(proteinTwo, proteinPrice)
        calcPrice(altProteinOne, altProteinPrice)
        calcPrice(altProteinTwo, altProteinPrice)
        calcPrice(vegetablesOne, vegetablesPrice)
        calcPrice(vegetablesTwo, vegetablesPrice)
        calcPrice(fruitsOne, fruitsPrice)
        calcPrice(fruitsTwo, fruitsPrice)
        calcPrice(grainsOne, grainsPrice)
        calcPrice(grainsTwo, grainsPrice)
        calcPrice(dairyOne, dairyPrice)
        calcPrice(dairyTwo, dairyPrice)

        // Category Percentages 
        const calcCategoryPercentage = (categoryPrices, AvgTotal) => {
            let lTotal = categoryPrices[0][0] + categoryPrices[1][0]
            let uTotal = categoryPrices[0][1] + categoryPrices[1][1]
            let total = ((((lTotal + uTotal) / 2) / AvgTotal) / 2) * 100
            return total.toFixed(2)
        }

        const data = [
            { name: "Protein", value: calcCategoryPercentage(proteinPrice, shoppingListAverageTotal) },
            { name: "Alt. Protein", value: calcCategoryPercentage(altProteinPrice, shoppingListAverageTotal) },
            { name: "Vegetables", value: calcCategoryPercentage(vegetablesPrice, shoppingListAverageTotal) },
            { name: "Fruits", value: calcCategoryPercentage(fruitsPrice, shoppingListAverageTotal) },
            { name: "Grains", value: calcCategoryPercentage(grainsPrice, shoppingListAverageTotal) },
            { name: "Dairy", value: calcCategoryPercentage(dairyPrice, shoppingListAverageTotal) },
            { total: shoppingListAverageTotal}
        ]

        return data
    }

    render() {
        // const profile = this.props.profile.profile
        const pantry = this.pantryLogic()
        // let data = [
        //     { title: 'Protein', value: Number(pantry[0].value), color: COLORS[0] },
        //     { title: 'Alt. Protein', value: Number(pantry[1].value), color: COLORS[1] },
        //     { title: 'Vegetables', value: Number(pantry[2].value), color: COLORS[2] },
        //     { title: 'Fruits', value: Number(pantry[3].value), color: COLORS[3] },
        //     { title: 'Grains', value: Number(pantry[4].value), color: COLORS[4] },
        //     { title: 'Dairy', value: Number(pantry[5].value), color: COLORS[5] }
        // ];
        // Protein: #3182CE, Alt. Protein: #744210, Veg: #E53E3E, Fruit: #38A169, Grains: #81E6D9, Dairy: #D69E2E
        const COLORS = ['#3182CE', '#744210', '#E53E3E', '#38A169', "#81E6D9", "#D69E2E"];

        return (
            <div className="mt-8 mx-4 mb-32 lg:max-w-2xl lg:mx-auto xl:max-w-3xl">

                <div className="mt-4 flex items-center justify-between">
                    <p className="font-bold text-gray-700">Your Pantry</p>
                    <p onClick={(e) => this.props.changeTab("Pantry", e)} className="text-sm text-orange-base cursor-pointer">View my Pantry</p>
                </div>

                {this.props.profile.profile.shoppingListOne.length === 0 
                ?
                    <div className="mt-4 w-full px-6 py-8 bg-white shadow-md border border-gray-100">
                        <p className="max-w-sm mx-auto text-gray-600 text-center">After you set up your example shopping lists we will be able to process your pantry.</p>
                        <div className="mt-4 text-center w-full">
                            <Link to="/create-shopping-list" className="text-center inline-block mt-2 bg-green-400 text-white px-6 py-2 rounded-full font-bold sm:hover:bg-green-500 mx-auto">Setup Shopping List</Link>
                        </div>
                    </div> 
                :
                    <div className="mt-4 w-full px-4 py-8 bg-white shadow-md border border-gray-100">
                        <PieChart 
                            className="h-48 w-48 mx-auto"
                            data={[
                                { title: 'Protein', value: Number(pantry[0].value), color: COLORS[0] },
                                { title: 'Alt. Protein', value: Number(pantry[1].value), color: COLORS[1] },
                                { title: 'Vegetables', value: Number(pantry[2].value), color: COLORS[2] },
                                { title: 'Fruits', value: Number(pantry[3].value), color: COLORS[3] },
                                { title: 'Grains', value: Number(pantry[4].value), color: COLORS[4] },
                                { title: 'Dairy', value: Number(pantry[5].value), color: COLORS[5] }
                            ]}
                       />

                       {/* Diet Breakdown */}
                        <div className="mt-8 shadow-md rounded">
                            <p className="py-2 text-center text-white font-bold bg-green-400 rounded-t">Diet Breakdown</p>
                            <div className="flex justify-around items-center flex-wrap px-4 py-2 sm:max-w-md sm:mx-auto sm:py-4">
                                <div className="mt-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-blue-600 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Protein:  
                                    </span>
                                    <span className="text-green-500 font-bold"> {pantry[0].value}%</span>
                                </div>
                                <div className="mt-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-yellow-900 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Alt. Protein: 
                                    </span>
                                    <span className="text-green-500 font-bold"> {pantry[1].value}%</span>
                                </div>
                                <div className="mt-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-red-600 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Vegetables:
                                    </span>
                                    <span className="text-green-500 font-bold"> {pantry[2].value}%</span>
                                </div>
                                <div className="mt-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-green-600 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Fruits:
                                    </span> 
                                    <span className="text-green-500 font-bold"> {pantry[3].value}%</span>
                                </div>
                                <div className="mt-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-teal-300 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Grains:
                                    </span>  
                                    <span className="text-green-500 font-bold"> {pantry[4].value}%</span>
                                </div>
                                <div className="my-2 text-center w-full sm:w-1/2 sm:text-left">
                                    <div className="inline-block mr-2 h-4 w-4 bg-yellow-600 rounded-full"></div>
                                    <span className="text-gray-700">
                                        Dairy:
                                    </span>  
                                    <span className="text-green-500 font-bold"> {pantry[5].value}%</span>
                                </div>
                            </div>
                        </div>

                        {/* Pantriful Score */}
                        <div className="mt-4 shadow-md rounded">
                            <p className="py-2 text-center text-white font-bold bg-orange-base rounded-t">Pantriful Score</p>
                            <p className="mt-4 font-bold text-gray-600 text-center">Your Pantriful Score is:</p>
                            <p className="text-center text-5xl font-bold text-green-400">78<span className="text-sm text-gray-500">/100</span></p>
                            <p className="px-4 text-center text-gray-500 pb-4">This score is based on your health profile as compared to our other users. Looks pretty good!</p>
                        </div>

                        {/* Recommendations */}
                        <div className="mt-4 shadow-md rounded">
                            <p className="py-2 text-center text-white font-bold bg-orange-400 rounded-t">Recommendations</p>
                            <p className="p-4 text-gray-500 text-center">As you use Pantriful more we will provide customized recommendations for you.</p>
                        </div>
                    </div>
                }
                

            </div>
        //     <div>
        //         <div className="flex justify-between border-b-2 border-gray-300 py-4 mt-12 mb-4 ">
        //             <h3 className="text-gray-700 font-bold tracking-wide">My Pantry</h3>
        //             <button onClick={(e) => this.props.changeTab("Pantry", e)} className="text-orange-base">More details</button>
        //         </div>
        //         {profile.shoppingListOne.length === 0 && profile.shoppingListTwo.length === 0
        //         ? <div className="lg:p-8 lg:shadow-lg justify-between mb-4 pb-8">
        //             <div className="my-24">
        //                 <p className="mx-auto max-w-xl text-gray-600 px-4 md:px-0 text-xl md:text-2xl ">This is your <span className="text-orange-base font-bold">Pantry</span>. Once your create some example shoppings lists for us we will be able to start creating a customized experience for you.</p>
        //                 <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full" to="/create-shopping-list">Create Shopping List</Link>
        //             </div>
        //           </div>
        //         : <div>

        //             {/* Pantry Content */}
        //             <div className="lg:p-8 lg:flex lg:shadow-lg justify-between mb-4 pb-8 ">
        //                 {/* Left Pantry */}
        //                 <div className="lg:w-2/6 lg:mx-4">

        //                     {/* Mobile Pic Chart */}
        //                     <div className="mx-auto xs:hidden">
        //                         {/* PIE CHART */}
        //                         <PieChart className="mx-auto w-1/2 lg:w-full" width={280} height={280} onMouseEnter={this.onPieEnter}>
        //                             <Pie
        //                                 data={data}
        //                                 dataKey='value'
        //                                 cx="50%"
        //                                 cy="50%"
        //                                 innerRadius={40}
        //                                 outerRadius={70}
        //                                 fill="#8884d8"
        //                                 paddingAngle={2}
        //                                 label
        //                             >
        //                                 {
        //                                     data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
        //                                 }
        //                             </Pie>
        //                             <Tooltip />
        //                         </PieChart>
        //                     </div>

        //                     {/* Regular Pie Chart */}
        //                     <div className="hidden xs:block mx-auto">
        //                         {/* PIE CHART */}
        //                         <PieChart className="mx-auto w-1/2 lg:w-full" width={300} height={300} onMouseEnter={this.onPieEnter}>
        //                             <Pie
        //                                 data={data}
        //                                 dataKey='value'
        //                                 cx="50%"
        //                                 cy="50%"
        //                                 innerRadius={50}
        //                                 outerRadius={90}
        //                                 fill="#8884d8"
        //                                 paddingAngle={2}
        //                                 label
        //                             >
        //                                 {
        //                                     data.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)
        //                                 }
        //                             </Pie>
        //                             <Tooltip />
        //                         </PieChart>
        //                     </div>

        //                     <div className="shadow-lg rounded-lg mx-2">
        //                         <h3 className="bg-green-button py-2 font-bold text-white text-xl rounded-t-lg">Diet Breakdown</h3>
        //                         <ul className="flex justify-around py-2 lg:py-4 px-4 mx-auto flex-wrap text-center lg:text-left">
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-blue-600 rounded-full"></div>Protein <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[0].value}%</span></li>
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-yellow-900 rounded-full"></div>Alt. Protein <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[1].value}%</span></li>
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-red-600 rounded-full"></div>Vegetables <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[2].value}%</span></li>
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-green-600 rounded-full"></div>Fruits <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[3].value}%</span></li>
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-teal-300 rounded-full"></div>Grains <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[4].value}%</span></li>
        //                             <li className="py-2 w-1/2"><div className="inline-block mr-2 h-4 w-4 bg-yellow-600 rounded-full"></div>Dairy <span className="text-green-500 font-bold"><br className="lg:hidden" />{pantry[5].value}%</span></li>
        //                         </ul>
        //                     </div>
        //                 </div>

        //                 {/* Right Pantry */}
        //                 <div className="lg:flex flex-wrap lg:w-4/6 mx-2 lg:mx-4">

        //                     {/* Pantry Tools row 1 */}
        //                     <div className="lg:flex w-full mb-4">

        //                         {/* Pantriful Score */}
        //                         <div className="lg:w-1/2">
        //                             <div className="rounded-lg min-h-full mt-4 lg:mt-0 lg:mr-4 shadow-lg">
        //                                 <h3 className="bg-orange-400 text-white font-bold py-2 text-xl rounded-t-lg">Pantriful Score</h3>
        //                                 <div className="px-4 py-1">
        //                                     <p>
        //                                         <span className="text-6xl text-green-button leading-snug">78</span>/
        //                                     <span className="font-bold text-gray-600">100</span>
        //                                     </p>
        //                                     <p className="leading-relaxed text-gray-600 ">This score is based on your health profile as compared to our other users. <br />Looks pretty good!</p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* /Pantriful Score */}

        //                         {/* Est Avg Spending */}
        //                         <div className="lg:w-1/2">
        //                             <div className="rounded-lg min-h-full mt-4 lg:mt-0 lg:mr-4 shadow-lg">
        //                                 <h3 className="bg-green-400 text-white font-bold py-2 text-xl rounded-t-lg">Est. Average Spending</h3>
        //                                 <div className="px-2 py-2 mx-auto">
        //                                     <ul className="flex justify-around py-4 px-4 mx-auto flex-wrap text-center lg:text-left">
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Protein: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[0].value) * .01)).toFixed(2)}</span></li>
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Alt. Protein: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[1].value) * .01)).toFixed(2)}</span></li>
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Vegetables: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[2].value) * .01)).toFixed(2)}</span></li>
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Fruits: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[3].value) * .01)).toFixed(2)}</span></li>
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Grains: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[4].value) * .01)).toFixed(2)}</span></li>
        //                                         <li className="py-2 w-1/2 text-gray-600 font-bold">Dairy: <span className="text-green-500 font-bold"><br className="md:hidden" />${(pantry[6].total * ((pantry[5].value) * .01)).toFixed(2)}</span></li>
        //                                     </ul>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* /Goal Progress */}

        //                     </div>
        //                     {/* /Pantry Tools row 1 */}

        //                     {/* Pantry Tools row 2 */}
        //                     <div className="lg:flex w-full mt-4">

        //                         {/* Pantriful Score */}
        //                         <div className="lg:w-1/2">
        //                             <div className="rounded-lg min-h-full lg:mr-4 shadow-lg">
        //                                 <h3 className="bg-purple-400 text-white font-bold py-2 text-xl rounded-t-lg">Improve my Pantry</h3>
        //                                 <div className="px-4 py-6 flex">
        //                                     <div className="relative rounded-lg shadow-lg hover:shadow-xl hover:bg-red-500 w-1/2 bg-red-400 mx-2 h-32">
        //                                         <button onClick={(e) => this.props.changeTab("Pantry", e)} className="w-full focus:outline-none">
        //                                             <img className="absolute right-0 mr-4 mt-2" src="/images/dashboard/change.png" alt=""></img>
        //                                             <p className="text-white font-bold text-xl text-left mt-20 mx-4">Change</p>
        //                                         </button>
        //                                     </div>
        //                                     <div className="relative rounded-lg shadow-lg hover:shadow-xl hover:bg-teal-500 w-1/2 bg-teal-400 mx-2 h-32">
        //                                         <button onClick={(e) => this.props.changeTab("Pantry", e)} className="w-full focus:outline-none">
        //                                             <img className="absolute right-0 mr-4 mt-2" src="/images/dashboard/improve.png" alt=""></img>
        //                                             <p className="text-white font-bold text-xl text-left mt-20 mx-4">Improve</p>
        //                                         </button>
        //                                     </div>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* /Pantriful Score */}

        //                         {/* Goal Progress */}
        //                         <div className="lg:w-1/2 ">
        //                             <div className="rounded-lg min-h-full mt-4 lg:mt-0 lg:mr-4 shadow-lg">
        //                                 <h3 className="bg-red-400 text-white font-bold py-2 text-xl rounded-t-lg">Recommendations</h3>
        //                                 <div className="px-4 py-2">
        //                                     <p className="leading-relaxed text-gray-500 leading-relaxed px-6 py-8">As you use Pantriful more we will provide customized recommendations from our team. </p>
        //                                 </div>
        //                             </div>
        //                         </div>
        //                         {/* /Goal Progress */}

        //                     </div>
        //                     {/* /Pantry Tools row 2 */}

        //                 </div>
        //                 {/* /Right Pantry */}

        //             </div>
        //             {/* /Pantry Content */}

        //         </div>
        //         }
        //     </div>
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
)(Pantry);
