import React, {useState} from "react"
import Hero from "../Hero";
import Time from "../Time";
import Card from "../Card";
import Carddata from "../Carddata";
import SignUp from "./Signup";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import TotalCards from "../CardComponent"
import Navbar from "../Navbar"


export default function Homepage(props){

   

    return (
        <>
       <Hero mode={props.mode} />
       <TotalCards mode={props.mode}/>
        </>
    )
}