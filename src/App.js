import React, { useEffect } from "react";
import "./App.css";
import SignUp from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Overall";
import Navbar from "./Navbar";
import Error from "./pages/Error";
import About from "./pages/About";
import Shop from "../src/pages/Shop";
import { useSelector, useDispatch } from "react-redux";
import { changeToDark } from "./reducer";
import SingleProduct from "./pages/singleProduct";
import Dashboard from "../src/pages/dashboard";
 
export default function App() {
  const { mode } = useSelector((state) => state.mode);

  const dispatch = useDispatch();

  
  //This is to save the mode in local storage
  useEffect(() => {
    localStorage.setItem("mode", mode); 
  }, [mode]);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Navbar
              mode={mode}
              handleClick={() => {
                dispatch(changeToDark());
              }}
            />   
          }
        >
          <Route index element={<Homepage mode={mode} />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="about" element={<About mode={mode} />} />
          <Route path="shop" element={<Shop mode={mode} />} />
          <Route path="shop/:shopId" element={<SingleProduct />} /> {/*  This is to nest singleProducts in the shop comp*/}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error />} />
          
        </Route>
      </Routes>
    </>
  );
}
