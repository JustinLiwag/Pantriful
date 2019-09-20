import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { pause } from "../../../actions/foodProfileActions";
import { getCurrentProfile } from "../../../actions/profileActions";
import { getLists, updateList } from "../../../actions/listActions";

class Lists extends Component {
    state = {
        paused: false,
        listOpen: false,
        currentStatus: "",
        changeTabOpen: false
    };

    componentDidMount = () => {
        if (this.props.profile.profile.paused === true) {
            this.setState({
                paused: true
            })
        }
        
    }

    toggleListOpen = () => {
        this.setState({
            listOpen: !this.state.listOpen
        })
    }

    toggleChangeOpen = () => {
        this.setState({
            changeTabOpen: !this.state.changeTabOpen
        })
    }

    toggleNotes = (e) => {
        if (this.currentStatus === "Awaiting Approval") {
            this.setState({
                currentStatus: e.target.name
            })
        }
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

    pauseOnClick = () => {
        const payload = {
            paused: !this.state.paused
        }
        this.props.pause(payload)
        this.setState({
            paused: !this.state.paused,
            listOpen: false
        })
    }

    renderLists = (props) => {
        let renderedList = []
        const rawLists = props.lists.lists

        var lists = rawLists.sort(function (a, b) {
            if (a.deliveryDate > b.deliveryDate) { return -1; }
            if (a.deliveryDate < b.deliveryDate) { return 1; }
            return 0;
        })

        // Get first lists

        // Format date from mongo for newest item
        let date = new Date(props.lists.lists[0].deliveryDate)
        let dayOptions = { weekday: "long" }
        let day = new Intl.DateTimeFormat('en-US', dayOptions).format(date)
        let d = date.getDate()
        let monthOptions = { month: "long" }
        let m = new Intl.DateTimeFormat('en-US', monthOptions).format(date)
        let y = date.getFullYear()
        let formatedDate = day + " " + m + " " + d + ", " + y

        // Show first four items for summary for newest Item
        let summary = []
        let summaryCount = 0
        while (summaryCount < lists[0].list.length) {
            if (summaryCount === 4) {
                break
            }
            summary.push(lists[0].list[summaryCount].name + ", ")
            summaryCount++
        }

        // Render status pill
        const renderStatus = () => {
            if (lists[0].status === "Approved" ) {
                return <span className="bg-green-400 py-2 px-4 font-bold rounded-full text-white">Approved</span>
            }
            if (lists[0].status === "Awaiting Approval" && this.state.currentStatus === "Approved") {
                return <span className="bg-green-400 py-2 px-4 font-bold rounded-full text-white">Approved</span>
            }
            if (lists[0].status === "Awaiting Approval") {
                return <span className="bg-red-400 py-2 px-4 font-bold rounded-full text-white">Awaiting Approval</span>
            }
            if (lists[0].status === "Out for Delivery") {
                return <span className="bg-yellow-500 py-2 px-4 font-bold rounded-full text-white">Out for Delivery</span>
            }
            return <span className="bg-orange-base py-2 px-4 font-bold rounded-full text-white">Delivered</span>
        }

        // Create Shopping list items for newest item
        let shoppingList = []
        let shoppingListCount = 0
        while (shoppingListCount < lists[0].list.length) {
            shoppingList.push(
                <div key={"item" + lists[0].list[shoppingListCount].name} className="border-t border-gray-300 py-2 text-sm">
                    <p className="text-orange-base font-bold">
                        {lists[0].list[shoppingListCount].name}
                    </p>
                    <div className="flex justify-between">
                        <p className="inline-block font-bold">
                            <span className="text-green-400">{lists[0].list[shoppingListCount].amount} 
                                {" "} x {" "}
                            </span> 
                            <span className="text-gray-500">
                                {lists[0].list[shoppingListCount].measurementUnit}
                            </span>
                        </p>
                        <p>
                            $ 
                            <span className="text-green-400 font-bold">
                                {(lists[0].list[shoppingListCount].lowPrice * lists[0].list[shoppingListCount].amount).toFixed(2)}
                            </span> 
                            - $ 
                            <span className="text-green-400 font-bold">
                                {(lists[0].list[shoppingListCount].upperPrice * lists[0].list[shoppingListCount].amount).toFixed(2)}
                            </span>
                        </p>
                    </div>
                </div>
            )
            shoppingListCount++
        }

        const renderTotal = () => {
                let lower = 0;
                let upper = 0;
                for (var i = 0; i < lists[0].list.length; i++) {
                    lower += lists[0].list[i].amount * lists[0].list[i].lowPrice;
                    upper += lists[0].list[i].amount * lists[0].list[i].upperPrice;
                }
                const result = <span>$ {lower.toFixed(2)} - $ {upper.toFixed(2)}</span>
                return result
            }

        renderedList.push(
            <div key={"itm" + 1} className="mt-4 rounded bg-white w-full shadow">
                <p onClick={this.toggleListOpen} className={"font-bold py-2 text-center rounded-t " + (this.state.currentStatus || lists[0].status === "Approved" ? "bg-green-400 text-white" : "bg-red-400 text-red-100" )}>{formatedDate}</p>
                <div onClick={this.toggleListOpen} className={"sm:justify-around sm:items-center sm:mx-8 sm:flex-row-reverse " + (this.state.listOpen === false ? "block sm:flex" : "hidden")}>
                    <div className="block mt-6 text-center">{renderStatus()}</div>
                    <p className="mt-4 text-sm text-gray-600 px-4 text-center">{summary}...</p>
                </div>
                <div className={"mx-4 sm:max-w-md sm:mx-auto " + (this.state.listOpen === true ? "block" : "hidden")}>

                    {/* Shopping List */}
                    <p className="pb-2 mt-4 text-gray-600 font-bold text-center">Shopping List</p>
                    <div>{shoppingList}</div>
                    <p className="border-t border-gray-300 pt-4 text-sm text-gray-600 font-bold text-right">Est. Total: {renderTotal()}</p>
                    
                    {/* Change or Add Box */}
                    <div className="mt-4 bg-white rounded shadow-md">
                        <p onClick={this.toggleChangeOpen} className={"text-red-600 font-bold bg-red-200 py-2 text-center " + (this.state.changeTabOpen === true ? "rounded-t" : "rounded")}>Want to change / add something?</p>
                        <p className={"p-4 text-gray-600 text-center " + (this.state.changeTabOpen === true ? "block" : "hidden")}>Text your pantriful assistant at: <br></br> <a href="sms:6266587775" className="text-orange-base font-bold border-b border-orange-base">(626) 658-7775</a> <br></br>with any changes or additions you would like to make.</p>
                    </div>
                    
                    {/* Delivery Details */}
                    <div className="mt-8 text-center font-bold text-gray-600">
                        <p className="border-b border-gray-300 pb-2">Delivery Details</p>
                        <p className="mt-4">Delivery Day:</p>
                        <p className="text-orange-base">{formatedDate}</p>
                        <p className="mt-2">Delivery Time:</p>
                        <p className="text-orange-base">{this.props.profile.profile.deliveryTime}</p>
                        <p className="mt-2">Status:</p>
                        <div className={"block mt-2 text-center " + (this.state.currentStatus || lists[0].status === "Approved" ? "mb-8" : null) }>{renderStatus()}</div>
                    </div>
                    <div className={"mt-8 mb-4 " + (this.state.currentStatus || lists[0].status === "Approved" ? "hidden" : "block")}>
                        <button onClick={(e) => this.approveOnClick(e, lists[0].deliveryDate)} className="block bg-green-400 py-2 w-full text-white font-bold rounded">Approve Grocery List</button>
                    </div>
                </div>
                
                <div onClick={this.toggleListOpen} className="mt-4 bg-gray-100 sm:hover:bg-gray-200 text-gray-400 sm:hover:text-gray-500">
                    <button className="focus:outline-none block mx-auto py-1 font-bold">{this.state.listOpen === true ? "Close" : "Details"}</button>
                </div>
            </div>
        )

        return renderedList
        
    }

    render() {
        return (
            <div className="mt-8 mx-4 lg:max-w-2xl lg:mx-auto">
                
                {/* Toggle grocery delivery 
                    Hidden when no groceries are available for that user
                */}
                <div className={"flex items-center flex-row-reverse " + (Object.keys(this.props.lists.lists).length === 0 ? "hidden" : "block")}>
                    <div onClick={this.pauseOnClick} className="flex items-center">
                        <p className={this.state.paused === false ? "text-gray-400" : "text-red-400"}>
                            {this.state.paused === true 
                            ? "Delivery paused"
                            : "Pause delivery"
                            }
                        </p>
                        {this.state.paused === false
                        ?
                            <svg className="ml-1" width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="41" height="20" rx="10" fill="white" stroke="#E2E8F0" strokeWidth="2" />
                                <circle cx="11" cy="11" r="7" fill="#E2E8F0" />
                            </svg>
                        :
                            <svg className="ml-1" width="43" height="22" viewBox="0 0 43 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="42" y="21" width="41" height="20" rx="10" transform="rotate(-180 42 21)" fill="white" stroke="#FC8181" strokeWidth="2" />
                                <circle cx="32" cy="11" r="7" transform="rotate(-180 32 11)" fill="#FC8181" />
                            </svg>
                        }
                    </div>
                </div>


                <div className="mt-4 flex items-center justify-between">
                    <p className="font-bold text-gray-700">Next Grocery Delivery</p>
                    <p onClick={(e) => this.props.changeTab("Lists", e)} className="text-sm text-orange-base">View All</p>
                </div>


                {/* Render List Content */}
                {this.props.lists.lists.length === 0 ||  this.props.lists.lists.length === undefined
                ?   
                    <div className="mt-4 w-full px-6 py-8 bg-white shadow-md border border-gray-100">
                        <p className="text-gray-600 text-center">Setup your example shopping lists to get your first customized grocery list!</p>
                        <div className="text-center w-full">
                            <Link to="/create-shopping-list" className="text-center inline-block mt-2 bg-green-400 text-white px-6 py-2 rounded-full font-bold sm:hover:bg-green-500 mx-auto">Setup Shopping List</Link>
                        </div>
                    </div>  
                :  <div>
                        {this.state.paused === true ? <p className="text-red-500 text-center font-bold text-md sm:text-lg mt-3">Your grocery list for this week has been put on pause.</p> : null}               
                        <div className={this.state.paused === true ? "opacity-50 pointer-events-none" : ""}>{this.renderLists(this.props)}</div>
                    </div>
                }
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
    { getCurrentProfile, getLists, updateList, pause }
)(Lists);
