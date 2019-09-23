import React, { Component } from "react";
import Lists from "./Lists"
import Pantry from "./Pantry"

class Home extends Component {
    render () {  
        return (
            <div>

                <Lists 
                    state={this.props.state}
                    changeTab={this.props.changeTab} 
                    history={this.props.history}
                    toggleListOpen={this.props.toggleListOpen}
                    toggleChangeOpen={this.props.toggleChangeOpen}
                    toggleNotes={this.props.toggleNotes}
                    approveOnClick={this.props.approveOnClick}
                    pauseOnClick={this.props.pauseOnClick}
                />
                <Pantry changeTab={this.props.changeTab}/>
                {/* <Apps changeTab={this.props.changeTab}/> */}

                <p className="text-center text-xs text-gray-300 mb-4">Powered by <a className="opacity-25" href="https://cdn.shopify.com/s/files/1/0098/6782/products/laphroaig-10_26bb40ec-8e0d-44db-9403-defd606cba1a_890x890.progressive.jpg?v=1515016487"><span role="img" aria-label="whiskey">🥃</span></a></p>
            </div>
        )
};
}

export default Home;
