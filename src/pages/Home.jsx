import Main from "../components/js/Main"
import Weather from "../components/js/Weather"
import axios from "axios"
import "../components/scss/home.scss"

import React, { Component } from 'react';

class Home extends Component {
    state = {
        marsDate: "",
        earthDate: "",
        tempHigh: "",
        tempLow: "",
        visabilty: "",
        sunrise: "",
        sunset: "",
        pressure: "",
        backgroundImage: "",
        backgroundImageContext: "",
        backgroundImageRover: "",
    };
    getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }
    componentDidMount(){
        let one = axios.get(`https://api.maas2.apollorion.com/`);
        let two = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=BqQXjUPlTIjbsyau8029Byn1tOlW6BqiOQglgQN6`);
        axios.all([one, two])
        .then(axios.spread((...responses) => {
        const responseOne = responses[0].data;
        const responseTwo = responses[1].data;
        let TotalPhotos = responseTwo.latest_photos.length + 1;
        let ChosenPhoto = responseTwo.latest_photos[this.getRandomInt(TotalPhotos)];
        let d = new Date(responseOne.terrestrial_date);
        let day = d.getDate() + 1;
        let month = d.getMonth() + 1;
        this.setState({
            marsDate: responseOne.sol,
            earthDate:  month + "/" + day + "/" + d.getFullYear(),
            tempHigh: responseOne.max_temp,
            tempLow: responseOne.min_temp,
            visabilty: responseOne.atmo_opacity,
            sunrise: responseOne.sunrise,
            sunset: responseOne.sunset,
            pressure: responseOne.pressure,
            backgroundImage: ChosenPhoto.img_src,
            backgroundImageContext: ChosenPhoto.camera.full_name,
            backgroundImageRover: ChosenPhoto.rover.name,
        });
    })
)}
    componentDidUpdate(prevProps){
        if (prevProps.match.params.id !== this.props.match.params.id) {
            let one = axios.get(`https://api.maas2.apollorion.com/`);
            let two = axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/latest_photos?api_key=BqQXjUPlTIjbsyau8029Byn1tOlW6BqiOQglgQN6`);
            axios.all([one, two])
            .then(axios.spread((...responses) => {
            const responseOne = responses[0].data;
            const responseTwo = responses[1].data;
            let TotalPhotos = responseTwo.latest_photos.length + 1;
            let ChosenPhoto = responseTwo.latest_photos[this.getRandomInt(TotalPhotos)];
            let d = new Date(responseOne.terrestrial_date);
            let day = d.getDate() + 1;
            let month = d.getMonth() + 1;
            this.setState({
                marsDate: responseOne.sol,
                earthDate: month + "/" + day + "/" + d.getFullYear(),
                tempHigh: responseOne.max_temp,
                tempLow: responseOne.min_temp,
                visabilty: responseOne.atmo_opacity,
                sunrise: responseOne.sunrise,
                sunset: responseOne.sunset,
                pressure: responseOne.pressure,
                backgroundImage: ChosenPhoto.img_src,
                backgroundImageContext: ChosenPhoto.camera.full_name,
                backgroundImageRover: ChosenPhoto.rover.name,
            });
        })
    )}
}
    render() {
        return (
            <div className="home" style={{backgroundImage: `url(${this.state.backgroundImage})`,  }}>
                <Main backgroundImageContext={this.state.backgroundImageContext} backgroundImageRover={this.state.backgroundImageRover}/>
                <Weather 
                    marsDate={this.state.marsDate}
                    earthDate ={this.state.earthDate}
                    tempHigh={this.state.tempHigh}
                    tempLow={this.state.tempLow}
                    visabilty={this.state.visabilty}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    pressure={this.state.pressure}
                />
            </div>
        );
    }
}

export default Home;