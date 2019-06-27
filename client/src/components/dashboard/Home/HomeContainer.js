import React, { Component } from "react";
import Lists from "./Lists"
import Pantry from "./Pantry"
import Apps from "./Apps"

class Home extends Component {
    render () {        
        return (
            <div className="container">

                <Lists changeTab={this.props.changeTab}/>
                <Pantry changeTab={this.props.changeTab}/>
                <Apps changeTab={this.props.changeTab}/>

                {/* Quote */}
                <div className="border-t border-gray-300 mt-12">
                    <div className="px-8 md:px-0 md:w-1/2 my-24 mx-auto text-xl md:text-2xl">
                        <p className="text-gray-500 text-center">“You don’t have to cook fancy or complicated masterpieces - just good food from fresh ingredients.” <br/><br/>- Julia Child</p>
                    </div>
                </div>
                {/* /Quote */}

            </div>
        )
};
}

export default Home;
