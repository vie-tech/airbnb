import React from "react"
import Time from "./Time"
import group from "./react photos/newlineofpeople.jpg"
import powderWoman from "../src/react photos/woman posing.jpg"

export default function Hero(props){

    return(
        <>
         <Time/>

         <div className={`${props.mode ? "container-hero-dark-mode" : ""}`}>
         <img src={ props.mode ? powderWoman : group }className={`hero-image ${props.mode ? "powder-woman": "group-image"}`} style={{transition: "0.5s"}} />
      <div className="first-header">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by
          <br /> one-of-a-kind hosts - all without leaving <br /> home.{" "}
        </p>
      </div> 
        </div>
     
        
        </>
    )
}  