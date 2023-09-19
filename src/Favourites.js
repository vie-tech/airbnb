import React from "react"
import {NavLink} from 'react-router-dom'
import ShopProduct from "../src/pages/singleProduct"

export default function Favourites(props){

    let mealCount = props.meal;

   


    <ShopProduct product={mealCount}/>

    return(
        <>
        <div className="favourites-container">
        <img src={props.img} className="favourites-img" onClick={()=>{props.handleClick2()}}/> 
       <NavLink to={`/shop/${props.idForShop}`} className='fav-link'> <p>{props.name}</p> </NavLink>
       

       
        
        </div>
        
        </>
    )
}