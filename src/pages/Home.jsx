import Main from "../components/js/Main"
import Weather from "../components/js/Weather"

import React, { Component } from 'react';

class Home extends Component {
    state = {
        marsDate: "01/01/2000",
        earthDate: "01/01/2000",
        tempHigh: "100c",
        tempLow: "10c"
    }

    render() {
        return (
            <div>
                <Main marsDate= {this.state.marsDate} earthDate ={this.state.earthDate}/>
                <Weather marsDate= {this.state.marsDate} earthDate ={this.state.earthDate} tempHigh={this.state.tempHigh} tempLow={this.state.tempLow}/>
            </div>
        );
    }
}

export default Home;