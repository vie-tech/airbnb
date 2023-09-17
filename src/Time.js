import React from "react"

export default function Time(){


    const date = new Date()
    let hours = date.getHours()
    let timeOfDay;

    if(hours < 12){
        timeOfDay = "morning"
    }else if(hours >= 12 && hours < 17){
        timeOfDay="afternoon"
    }else if(hours == 18 || hours == 19 ){
        timeOfDay="evening"

    }else{
        timeOfDay="night"
    }
    


    return(
        <>
        <h1 style={{fontSize: 13, padding:8}}>Good {timeOfDay}</h1>

        </>
    )
}