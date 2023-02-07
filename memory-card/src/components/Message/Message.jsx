import React from "react";
import "./Message.css";

export default function Message(props) {
    return (
        <div className="message-container">
            {props.message}
            {
                props.gameOver ? 
                <button className="reset-button" onClick={props.changeGameOver}>Restart game</button> :
                <div></div>
            }
        </div>
    )
}