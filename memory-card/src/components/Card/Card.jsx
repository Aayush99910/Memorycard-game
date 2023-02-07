import React from "react";
import "./Card.css"


export default function Card(props) {
    return (
        <div className="card-container" onClick={props.putClickedCards} id={props.id}>
            <div className="image-container">
                <img src={props.data.imageURL} />
            </div>
            <div className="text-container">
                <p>{props.data.text}</p>
            </div>
        </div>
    )
}