import React from "react";
import blackCyclist from "./react photos/black cyclist.jpg"
import smilingBlond from "./react photos/smiling blond.jpg"
import womanInHijab from "./react photos/woman in hijab.jpg"
import Card from "./Card"

export default function Totalcards(){
    

    return(
        <>
        <div className="photocards">
     <Card 
      image={blackCyclist}
      title= "Life lessons with Katie Zaferes"
      price="From $136"
      status= "SOLD OUT"
      rating="5.0"
      units= "(6)"
      region="-USA"/>
 
      <Card 
      image={smilingBlond}
      title="Plain background photography"
      price="From $125"
      status= "ONLINE"
      rating="5.0"
      units="(5)"
      region="-France"/>
 
      <Card 
      image={womanInHijab}
      title="Muslim custom wear"
      price="From $50"
      status= "RESTOCK"
      rating="4.8"
      units="(4)"
      region="-KSA"/>
      
        </div>
        
        

     </>
    )
}