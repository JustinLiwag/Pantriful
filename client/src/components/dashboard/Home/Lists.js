import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getCurrentProfile } from "../../../actions/profileActions";
import { getLists, updateList } from "../../../actions/listActions";

class Lists extends Component {
    state = {
        openNote: "",
        currentStatus: ""
    };

    toggleNotes = (e) => {
        this.setState({
            currentStatus: e.target.name
        })
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
    }

    approveOnClick = (e, date) => {
        const payload = {
            email: this.props.profile.profile.user.email,
            deliveryDate: date
        }
        this.props.updateList(payload, this.props.history)
        this.setState({
            currentStatus: "Approved"
        })
    }

    renderLists = (props) => {
        let renderedList = []
        const rawLists = props.lists.lists

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
            while (shoppingListCount < lists[i].list.length) {
                shoppingList.push(
                    <li key={"listItem" + shoppingListCount} className="flex justify-around flex-wrap text-left mx-auto md:w-3/4 py-2 md:py-4 px-4 my-2 text-gray-700 text-lg border-b-2 border-gray-200">
                        <p className="md:w-1/12 w-2/12 text-green-button font-bold">{lists[i].list[shoppingListCount].amount} x</p>
                        <p className="md:w-2/12 w-10/12 text-gray-600 font-bold">{lists[i].list[shoppingListCount].measurementUnit} <span className="md:hidden">of</span></p>
                        <p className="hidden md:block md:w-1/12 w-4/12 text-gray-500">of</p>
                        <p className="md:w-5/12 w-6/12 text-orange-base font-bold tracking-wide">{lists[i].list[shoppingListCount].name}</p>
                        <p className="md:w-3/12 w-6/12 text-right md:text-right text-gray-600 font-bold tracking-wide">$ {lists[i].list[shoppingListCount].lowPrice.toFixed(2)} - $ {lists[i].list[shoppingListCount].upperPrice.toFixed(2)}</p>
                    </li>
                )
                shoppingListCount++
            }

            // Render status pill
            const renderStatus = () => {
                if (lists[i].status === "Approved") {
                    return <span className="bg-green-button py-2 px-4 font-bold rounded-full text-white">Approved</span>
                }
                if (lists[i].status === "Awaiting Approval" && this.state.currentStatus === "Approved") {
                    return <span className="bg-green-button py-2 px-4 font-bold rounded-full text-white">Approved</span>
                }
                if (lists[i].status === "Awaiting Approval") {
                    return <span className="bg-red-400 py-2 px-4 font-bold rounded-full text-white">Awaiting Approval</span>
                }
                if (lists[i].status === "Out for Delivery") {
                    return <span className="bg-yellow-500 py-2 px-4 font-bold rounded-full text-white">Out for Delivery</span>
                }
                return <span className="bg-orange-base py-2 px-4 font-bold rounded-full text-white">Delivered</span>
            }

            const renderTotal = () => {
                let lower = 0;
                let upper = 0;
                for (var totalI = 0; totalI < lists[i].list.length; totalI++) {
                    lower += lists[i].list[totalI].amount * lists[i].list[totalI].lowPrice;
                    upper += lists[i].list[totalI].amount * lists[i].list[totalI].upperPrice;
                }
                const result = `$${lower.toFixed(2)} - $${upper.toFixed(2)}`
                return result
            }

            renderedList.push(
                <div key={i}>
                    {/* Checkbox for toggling details on list item */}
                    <label
                        className="notesCheckbox text-orange-base font-bold text-md self-center cursor-pointer">
                        <input className="hidden " type="checkbox" value={props.lists.lists[i].deliveryDate} name={props.lists.lists[i].status} onClick={this.toggleNotes} />
                        <div key={i}
                            // Remove bottom border of list item
                            className={
                                this.state.openNote === props.lists.lists[i].deliveryDate
                                    ? `md:flex justify-around items-center py-2 md:py-6 cursor-pointer`
                                    : `md:flex justify-around items-center py-2 md:py-6 border-b-2 border-gray-300 hover:bg-gray-100 cursor-pointer`
                            }
                        >
                            <p className="md:w-3/12 py-1 mb-1 md:py-0 text-gray-600 font-bold text-xl md:text-base">{formatedDate}</p>
                            <p className="hidden md:block md:w-5/12 py-1 md:py-0 text-gray-600">{summary} . . .</p>
                            <p className="md:w-4/12 py-1 md:py-0">{renderStatus()}</p>
                            <p className="md:w-3/12 py-1 mt-2 md:py-0 text-orange-base tracking-wide">
                                {this.state.openNote === props.lists.lists[i].deliveryDate
                                ? "Close"
                                : "Details"
                                }
                            </p>
                        </div>
                    </label>
                     
                    {this.state.openNote === props.lists.lists[i].deliveryDate
                    ? <div className="border-b-2 border-gray-300">
                            <div className="md:flex flex-row-reverse md:flex-row md:p-12">
                            <div className="md:w-1/3 mx-4 md:mx-0 text-left">
                                <h2 className="border-b-2 border-gray-300 p-2 md:p-4 text-2xl text-gray-700 font-bold text-center">Delivery Details</h2>
                                <div className="p-2 md:p-4 text-center">
                                    <p className="text-xl text-gray-700 tracking-wide font-bold">Delivery Date:</p>
                                    <p className="text-xl text-orange-base">{formatedDate}</p>
                                    <p className="mt-2 md:mt-4 text-xl text-gray-700 tracking-wide font-bold">Delivery Time:</p>
                                    <p className="text-xl text-orange-base">{this.props.profile.profile.deliveryTime}</p>
                                    <p className="mt-2 md:mt-4 text-xl text-gray-700 tracking-wide font-bold">Status:</p>
                                    <p className="mt-4">{renderStatus()}</p>
                                    {this.state.currentStatus === "Approved"
                                    ? <p className="p-4 text-lg text-orange-base leading-relaxed">This list has been approved! Your shopper has been notified.</p>
                                    : null
                                    }
                                </div>
                                {lists[i].status === "Awaiting Approval" && this.state.currentStatus !== "Approved"
                                ? <div className="mb-8 md:mb-0">
                                    <h2 className="border-b-2 border-gray-300 mt-8 p-2 md:p-4 text-2xl text-gray-700 font-bold text-center">Approve Delivery</h2>
                                    <div className="px-4 md:px-8 mx-auto mt-2 md:mt-4 md:pb-8">
                                        <p className="leading-loose text-gray-700 text-lg text-center">Please approve your grocery list. If you would like to change anything you can text your Pantriful Assistant, <span className="text-orange-base font-bold">Julie</span> at <span className="text-orange-base font-bold">(626) 658-7775</span>.</p>
                                        <p onClick={(e) => this.approveOnClick(e, lists[i].deliveryDate)} className="mt-2 py-2 px-4 bg-green-button hover:bg-green-500 text-white font-bold tracking-wide text-center rounded-full cursor-pointer">Approve your Grocery List</p>
                                    </div>
                                  </div> 
                                : null
                                }
                            </div>
                                <div className="md:w-2/3 md:border-l-2 items-center mb-16 md:mb-0">
                                <p className="p-4 mx-4 md:mx-0 mb-2 text-gray-700 font-bold text-2xl border-b-2 border-gray-300 md:border-none">Grocery List</p>
                                <ul>{shoppingList}</ul>
                                <p className="md:w-2/3 mx-auto pt-4 text-xl font-bold text-gray-600 tracking-wide">Est. Total: <span className="text-green-button">{renderTotal()}</span></p>
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
    { getCurrentProfile, getLists, updateList }
)(Lists);
