import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../../actions/profileActions";
import { getLists } from "../../../actions/listActions";

class Lists extends Component {
    state = {
        openNote: "",
    };

    toggleNotes = (e) => {
        const item = e.target.value;
        if (this.state.openNote !== item) {
            this.setState({
                openNote: item
            })
        } else {
            this.setState({
                openNote: ""
            })
        }
        this.forceUpdate();
        console.log("UPDATED")
    }

    renderLists = (props) => {
        let renderedList = []
        const rawLists = props.lists.lists
        console.log(rawLists)

        // Sort List by date
        var lists = rawLists.sort(function (a, b) {
            if (a.deliveryDate > b.deliveryDate) { return -1; }
            if (a.deliveryDate < b.deliveryDate) { return 1; }
            return 0;
        })

        // Loop over each list and create a row
        for (let i = 0; i < lists.length; i++) {
            // Break out of loop when 4 is hit
            if (i === 4) {
                break
            }
            // Format date from mongo
            let date = new Date(props.lists.lists[i].deliveryDate)
            let dayOptions = { weekday: "long" }
            let day = new Intl.DateTimeFormat('en-US', dayOptions).format(date)
            let d = date.getDate()
            let monthOptions = { month: "long" }
            let m = new Intl.DateTimeFormat('en-US', monthOptions).format(date)
            let y = date.getFullYear()
            let formatedDate = day + " " + m + " " + d + ", " + y

            // Show first four items for summary
            let summary = []
            let summaryCount = 0
            while (summaryCount < lists[i].list.length) {
                if (summaryCount === 4) {
                    break
                }
                summary.push(lists[i].list[summaryCount].name + ", ")
                summaryCount++
            }

            // Create Shopping list items
            let shoppingList = []
            let shoppingListCount = 0
            console.log(lists[i].list[shoppingListCount])
            while (shoppingListCount < lists[i].list.length) {
                shoppingList.push(
                    <li className="flex justify-around text-left mx-auto md:w-3/4 py-4 px-4 my-2 shadow-md text-gray-700 text-lg border-l-4 border-orange-base">
                        <p className="w-1/12">{lists[i].list[shoppingListCount].amount}x</p>
                        <p className="w-2/12">{lists[i].list[shoppingListCount].measurementUnit}</p>
                        <p className="w-1/12">of</p>
                        <p className="w-5/12">{lists[i].list[shoppingListCount].name}</p>
                        <p className="w-3/12 text-right">${lists[i].list[shoppingListCount].lowPrice}- ${lists[i].list[shoppingListCount].upperPrice}</p>
                    </li>
                )
                shoppingListCount++
            }

            // Render status pill
            const renderStatus = () => {
                if (lists[i].status === "Awaiting Approval") {
                    return <span className="bg-red-400 py-2 px-4 font-bold rounded-full text-white">Awaiting Approval</span>
                }
                if (lists[i].status === "Out for Delivery") {
                    return <span className="bg-yellow-500 py-2 px-4 font-bold rounded-full text-white">Out for Delivery</span>
                }
                return <span className="bg-green-button py-2 px-4 font-bold rounded-full text-white">Delivered</span>
            }

            renderedList.push(
                <div>
                    {/* Checkbox for toggling details on list item */}
                    <label
                        className="notesCheckbox text-orange-base font-bold text-md self-center cursor-pointer">
                        <input className="hidden " type="checkbox" value={props.lists.lists[i].deliveryDate} onClick={this.toggleNotes} />
                        <div key={i}
                            // Remove bottom border of list item
                            className={
                                this.state.openNote === props.lists.lists[i].deliveryDate
                                    ? `md:flex justify-around items-center py-6 cursor-pointer`
                                    : `md:flex justify-around items-center py-6 border-b-2 border-gray-300 hover:bg-gray-100 cursor-pointer`
                            }
                        >
                            <p className="md:w-3/12 py-1 md:py-0 text-gray-600 font-bold">{formatedDate}</p>
                            <p className="md:w-5/12 py-1 md:py-0 text-gray-600">{summary} . . .</p>
                            <p className="md:w-4/12 py-1 md:py-0">{renderStatus()}</p>
                            <p className="md:w-3/12 py-1 md:py-0 text-orange-base tracking-wide">Details</p>
                        </div>
                    </label>
                     
                    {this.state.openNote === props.lists.lists[i].deliveryDate
                    ? <div className="border-b-2 border-gray-300">
                        <div className="md:flex items-center p-12">
                            <div className="md:w-1/3">
                                <p className="text-gray-600 font-bold">{formatedDate}</p>
                                <p className="mt-4">{renderStatus()}</p>
                            </div>
                            <div className="md:w-2/3 md:border-l-2">
                                <p className="md:w-2/3 border-b-2 mx-auto pb-4 mb-4 text-gray-600 font-bold">Grocery List</p>
                                <ul>{shoppingList}</ul>
                                <p className="md:w-2/3 mx-auto mt-4 pt-4 border-t-2 text-right text-xl font-bold text-gray-700">Total: </p>
                            </div>
                        </div>
                      </div>
                    : null
                    }
                </div>
            )
        }

        return renderedList
        
    }

    render() {
        return (
            <div>
                <div className="flex justify-between border-b-2 border-gray-300 py-4 mb-4">
                    <h3 className="text-gray-700 font-bold tracking-wide">Upcoming Grocery Lists</h3>
                    <button onClick={(e) => this.props.changeTab("Lists", e)} className="text-orange-base">View All</button>
                </div>
                <div className="min-h-64 h-auto min-h-full bg-white shadow-lg mb-4">
                    <div className="rounded-t-lg flex justify-around bg-orange-base py-6 md:py-4 text-center text-white font-bold text-xl">
                            <h3 className="w-3/12 hidden md:block">Est. Delivery Date</h3>
                            <h3 className="w-5/12 hidden md:block">Summary</h3>
                            <h3 className="w-4/12 hidden md:block">Status</h3>
                            <div className="w-3/12"></div>
                    </div>
                    <div>
                        {this.props.profile.profile.shoppingListOne.length > 0 &&
                            this.props.profile.profile.shoppingListTwo.length > 0
                            ? <div>
                                {this.props.lists.lists.length > 0
                                    ? <div>
                                        {this.renderLists(this.props)}
                                      </div>
                                    : <div className="py-12 mx-auto">
                                        <img className="mx-auto mb-2" src="/images/dashboard/loading.gif" alt="loading"></img>
                                        <p className="mx-auto max-w-xl text-gray-600 px-4 md:px-0 text-xl md:text-2xl">Your <span className="text-orange-base font-bold">first customized grocery</span> list is being created! We are pairing you with a member from our team who will assist you shortly.</p>
                                      </div>
                                }
                              </div>
                            : <div>
                                <p className="mx-auto max-w-xl text-gray-600 px-4 md:px-0 text-xl md:text-2xl">Welcome to <span className="text-orange-base font-bold">Pantriful!</span> Go ahead and create your example shopping lists and we can get you started.</p>
                                <Link className="inline-block bg-green-button py-2 px-8 text-white mt-4 font-bold rounded-full" to="/create-shopping-list">Create Shopping List</Link>
                            </div>
                        }
                    </div>
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
)(Lists);
