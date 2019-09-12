import React, { Component } from "react";
import Lists from "./Lists"
import Pantry from "./Pantry"
import Apps from "./Apps"

class Home extends Component {
    render () {  
        return (
            <div>

                <Lists changeTab={this.props.changeTab} history={this.props.history}/>
                <Pantry changeTab={this.props.changeTab}/>
                <Apps changeTab={this.props.changeTab}/>

            </div>
        )
};
}

export default Home;
