import React, { useState, useEffect } from "react";
import { NavLink, Outlet } from 'react-router-dom';
import login from "../src/react photos/login.png"
import signup from "../src/react photos/add-friend.png"
import shop from "../src/react photos/online-shopping.png"
import about from "../src/react photos/about.png"
import {useSelector, useDispatch} from "react-redux"


export default function Navbar(props) {

  

  return (
    <>
  
     <div className={`${props.mode ? "container-navbar-dark-mode" : ""}`}>
     <nav className="navbar">
       <NavLink to="/"> 
        <div className="icon-text">
         <i className="fab fa-airbnb" style={{ fontSize: 40, color: "red" }}> </i>
          <span className="logo-span" style={{cursor: "pointer"}}>ATIVIE</span>
        </div>
        </NavLink>
        <ul>
          <li> <img src={login} className="login-icon"/> Log in</li>
          <NavLink to='/signup' className="sign-up-link" style={({isActive})=>{return{color: isActive ? "red" : ""}}}>  <li className="link-unstyled"> <img src={signup} className="login-icon"/> Sign-Up</li></NavLink>
          <NavLink to="/shop" className="sign-up-link" style={({isActive})=>{return{color: isActive? "red" : ""}}}>    <li className="link-unstyled"> <img src={shop} className="login-icon"/> Shop  </li></NavLink>
          <NavLink to="about" className="sign-up-link" style={({isActive})=>{return{color: isActive ? "red": ""}}}> <li className="link-unstyled"> <img src={about} className="login-icon"/>  About </li></NavLink>
          <button onClick={props.handleClick} style={{color : props.mode ? "white": "black"}}>Toggle Modes</button>
        </ul>
      </nav>
    </div>
    <Outlet/>
     
    </>
  );
}
