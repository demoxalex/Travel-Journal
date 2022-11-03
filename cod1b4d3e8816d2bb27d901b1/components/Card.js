import React from "react"

export default function Card(props) {
    return (
        <div className="card">
            <img className="img" src={props.imageUrl} />
            <div className="info">
                <h2><iconify-icon icon="carbon:location-filled" style={{color: "#ff5a5a"}}></iconify-icon> {props.location}<a className="link" href={props.googleMapsUrl}>View on Google Maps</a></h2>
                <h1>{props.title}</h1>
                <h4>{props.startDate} - {props.endDate}</h4>
                <p>{props.description}</p>
            </div>
        </div>
    )
}