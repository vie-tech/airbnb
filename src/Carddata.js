import React from "react"
import "./App.css"
import blackCyclist from "./react photos/black cyclist.jpg"
import smilingBlond from "./react photos/smiling blond.jpg"
import womanInHijab from "./react photos/woman in hijab.jpg"
import teenboy from "../src/react photos/teen boy.jpg"

let date = new Date()

let day = date.getHours()
let sun;


if(day < 12){
    sun = "morning"
}else if(day >= 12){
   sun = 'afternoon'
}


export default [
    {   id: 1,
        image:`${smilingBlond}`,
        title:"Plain background photography",
        price:"From $125",
        openSlots: sun,
        status: "CLOSED",
        region:"-France",
        stats:{
            rating:"4.8",
            review: "(4)",

        },
    },

    { 
        id: 2,
        image:`${blackCyclist}`,
        title:"Life lessons with Katie Zaferes",
        price:"From $136",
        openSlots: 23,
        status: "SOLD OUT",
        region:"-USA",
        stats:{
            rating:"5.0",
            review: "(6)",
        }

    },

    {
        id:3,
        image:`${womanInHijab}`,
        title:"Muslim custom wear",
        price:"From $50",
        status:"SOLD OUT",
        openSlots: 0,
        region:"-KSA",
        stats:{
            rating:"4.8",
            review:"(4)",
        }
 
    },

    {   id: 4,
        image:`${teenboy}`,
        title:"Retro teen clothing",
        price:"From $22",
        status: "SOLD OUT",
        openSlots: 66,
        region:"-Germany",
        stats:{
            rating:"4.2",
            review: "(1)",
        }
    }
]