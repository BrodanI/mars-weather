import React, { Component } from 'react';
import "../scss/weather.scss"

function Weather(props) {

    return (
        <div className="weather">

            
            <section className="weather__info">
                <div className="weather__info-details">
                    <h3>Sol: </h3>
                    <h4 className="weather__info--light-font">{props.marsDate}</h4>
                </div>
                <div className="weather__info-details">
                    <h3>Earth: </h3>
                    <h4 className="weather__info--light-font">{props.earthDate}</h4>
                </div>
            </section>

            <section className="weather__info">
                <div className="weather__info-details">
                    <h3>High:</h3>
                    <h4 className="weather__info--light-font">{props.tempHigh}°c / {(Math.round(props.tempHigh * 9/5) + (32))}°f</h4>
                </div>
                <div className="weather__info-details">
                    <h3>Low:</h3>
                    <h4 className="weather__info--light-font">{props.tempLow}°c / {(Math.round(props.tempLow * 9/5) + (32))}°f</h4>
                </div>
            </section>

            <section className="weather__info">
                <div className="weather__info-details">
                    <h3>Visabilty:</h3>
                    <h4 className="weather__info--light-font">{props.visabilty}</h4>
                </div>
                <div className="weather__info-details">
                    <h3>Sunrise:</h3>
                    <h4 className="weather__info--light-font">{props.sunrise}am</h4>
                </div>
                <div className="weather__info-details">
                    <h3>Sunset:</h3>
                    <h4 className="weather__info--light-font">{props.sunset}pm</h4>
                </div>
            </section>
            <section className="weather__info">
                <div className="weather__info-details">
                    <h3>Pressure:</h3>
                    <h4 className="weather__info--light-font">{props.pressure}Pa</h4>
                </div>
            </section>



        </div>
    );
}

export default Weather;