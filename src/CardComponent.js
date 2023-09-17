import React from "react"
import Carddata from "./Carddata";
import Card from "./Card"
import "./App.css"

export default function TotalCards(props){

    const cardElements = Carddata.map(data => {
        return (
          <Card
            key={data.id}
            image={data.image}
            title={data.title}
            price={data.price}
            openSlots={data.openSlots}
            status={data.status}
            region={data.region}
            rating={data.stats.rating}
            review={data.stats.review}
          />
        );
      });

      return(
          <>
           <div
        className="container-cards"
        style={{
          backgroundColor: props.mode ? "black" : "white",
          color: props.mode ? "white" : "black",
          transition: "0.5s"
        }}
      >
        <div className="photocards">{cardElements}</div>
         
      </div>
          </>
      )
}