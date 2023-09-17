import React from "react"
import {Link} from "react-router-dom"


export default function Error(){


    return(
        <>
       
        <div className="error-message">
        <h1>Error 404</h1>

        <h3>Page Not Found</h3>

        
        <Link to="/"><button className="error-home-button">Back To HomePage</button></Link>
        </div>
       
        
        </>
    )
}