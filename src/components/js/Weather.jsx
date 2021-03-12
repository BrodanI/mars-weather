import React, { Component } from 'react';
import "../scss/weather.scss"

function Weather (props) {

        return (
            <div className= "weather">
                <section className= "weather__day">
                    <h3 className= "weather__day-mars" >Sol {props.marsDate} </h3>
                    <h3 className= "weather__day-earth">Earth {props.earthDate} </h3>
                </section>

                <section className= "weather__temp">
                    <div className= "weather__temp-details">
                        <h3>High: </h3>
                        <h4>{props.tempHigh} </h4>
                    </div>
                    <div className= "weather__temp-details">
                        <h3>Low: </h3>
                        <h4>{props.tempLow}</h4>
                    </div>
                </section>
            </div>
        );
    }

export default Weather;