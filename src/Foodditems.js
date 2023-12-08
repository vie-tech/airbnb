import React from "react"

export default function Foodcard(props){



    return(
        <>
         <div className="food-card-container">
         
         <img src={props.img} className="food-card" onClick={() => props.handleClick(props.food)} />

        <p>{props.name}</p>
        <li className="ingridients">{props.ingridient1}</li>
        <li className="ingridients">{props.ingridient2}</li>
        <li className="ingridients">{props.ingridient3}</li>
          
        </div>
        </>
    )
} 