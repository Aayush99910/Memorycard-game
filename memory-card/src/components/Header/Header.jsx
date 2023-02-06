import React from "react";
import "./Header.css"

export default function Header() {
    return (
        <div className="header-container">
            <div className="title-container">
                MEMORY CARD GAME
            </div>
            <div className="score-container">
                <div>Score: 0</div>
                <div>Best Score: 0</div>
            </div>
        </div>
    )
}