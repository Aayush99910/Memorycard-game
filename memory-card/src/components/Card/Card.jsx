import React from "react";
import "./Card.css"


export default function Card(props) {
    console.log(props.data.imageURL)
    return (
        <div className="card-container">
            <div className="image-container">
                <img src={props.data.imageURL} />
            </div>
            <div>
                <p>{props.data.text}</p>
            </div>
        </div>
    )
}