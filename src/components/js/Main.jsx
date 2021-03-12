import React from 'react';
import "../scss/main.scss"

function Main(props) {
    return (
        <div className="main">
            <h1 className="main__header">Weather on Mars!</h1>

            <section className="main__date">
                <h2>Mars Date: {props.marsDate}</h2>
                <h2>Earth Date: {props.earthDate}</h2>
            </section>
        </div>
    );
}

export default Main;