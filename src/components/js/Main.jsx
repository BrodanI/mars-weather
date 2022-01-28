import React from 'react';
import "../scss/main.scss"

function Main(props) {
    return (
        <div className="main">
            <h1 className="main__header">Weather on Mars!</h1>

            <section className="main__date">
                <h2>Image From: The {props.backgroundImageContext} </h2>
                <h2>On The: {props.backgroundImageRover} Rover</h2>
            </section>
        </div>
    );
}

export default Main;