import React from "react";
import "./App.css"

export default function Card(props){

    let badgeText;

    if(props.openSlots === 0){
        badgeText = "SOLD OUT"
    }else if(props.openSlots !== 0){
        badgeText = "ONLINE" //for display purposes
    }

    return(
        <>
        <div className="photocards">

        <div className="firstPhoto">
        <img src={props.image}/>
        <span className="tag" style={{color: "black"}}>{badgeText}</span>   {/* HERE */} 
        {props.rating} {props.review} <span className="faint-span">{props.region}</span> <br/>
        <p className="bold-span"> {props.title} <br/></p>
        <span className="bold-span">{props.price}</span> / Person
        </div>
        </div>
        </>
    )
}  

/* ANOTHER MEDIUM FOR RENDERING CONDITIONALS IS BY SAYING 
 {props.openSlots === 0 && <span className="tag">{badgeText}</span>  }
 */