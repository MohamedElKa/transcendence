import React from 'react';

import  "./App.css"
import logo from "./pics_of_front_pages/0.png"
import man from "./pics_of_front_pages/1.png"

const Start = () => {
    return (
        <div className="start">
            <h1 className="title">PINGP<img src={logo}></img>NG</h1>
            <h1 className="welcome">Welcome to our Free <span>Ping Pong</span> Game</h1>
            <img src={man} className="man"></img>
            <button> <a href='/login'>START</a></button>
        </div>
    )
}

export default Start