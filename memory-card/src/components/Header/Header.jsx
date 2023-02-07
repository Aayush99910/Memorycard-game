import React from "react";
import "./Header.css";

import OneLogo from "../../assets/One Piece Logo.png"

export default function Header(props) {
    return (
        <div className="header-container">
            <div className="logo-container">
                <img src={OneLogo}/>
            </div>
            <div className="title-container">
                MEMORY GAME
            </div>
            <div className="score-container">
                <div>Score: {props.score}</div>
                <div>Best Score: 0</div>
            </div>
        </div>
    )
}