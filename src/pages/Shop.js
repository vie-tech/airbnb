import React, { useState, useEffect, createContext } from "react";
import axios from "axios";
import Foodcard from "../Foodditems";
import unavailable from "../react photos/connection.png";
import Favourites from "../Favourites";
import { FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { addFavourite, initializeFavourite, clearFavourites, removeItem } from "../reducer";
import ShopProduct from "../pages/singleProduct"


export default function Shop(props) {
  const [meal, setMeal] = useState([]);
  const [inputFood, setInputFood] = useState("");
  const favourite = useSelector(state => state.mode.favourite);
  const favCount = useSelector(state => state.mode.favCount);
  const dispatch = useDispatch();

  

  const foodList = meal && meal.map((item) => {
    return (
      <Foodcard
        key={item.idMeal}
        img={item.strMealThumb} 
        name={item.strMeal}
        ingridient1={item.strIngredient1}
        ingridient2={item.strIngredient2}
        ingridient3={item.strIngredient3}
        handleClick={() => dispatch(addFavourite(item))}

        
      />
    );
  });


 const favouriteList = favourite.map((item) => {
    return (
      <Favourites
        key={item.idMeal}
        img={item.strMealThumb}
        name={item.strMeal}
        handleClick2={()=>{dispatch(removeItem(item))}}
        idForShop={item.idMeal}
       
        
        
      />
    );
  });

  const startSearch = (food) => {
    axios
      .get(`https://themealdb.com/api/json/v1/1/search.php?s=${food}`)
      .then((res) => {
        setMeal(res.data.meals);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    
   
    startSearch(inputFood);
  }, [inputFood]);

  const message = favCount > 1 ? (
    <span>
      You have added <span style={{ fontWeight: 'bold', color: 'red' }}>{favCount}</span> items to your Favourites
    </span>
  ) : (
    <span>
      You have added <span style={{ fontWeight: 'bold', color: 'red' }}>{favCount}</span> item to your Favourites
    </span>
  )

  


  

  return (
    <>
      <div className={`total-container-for-flex ${props.mode ? "shop-container-dark-mode" : ""}`}>
        <div className="food-container-useless">
          <div className='shop-container' >
            <input
              type="text"
              value={inputFood}
              onChange={(event) => {
                setInputFood(event.target.value);
              }}
              placeholder="Search for food"
            />

            {inputFood.length > 0 ? (
              <div className="food-store">{foodList}</div>
            ) : (
              <h2 className={`default-show ${props.mode ? "default-show-dark-mode" : ""}`}>
                Nothing to show yet
                <img src={unavailable} className="shop-icon" />
              </h2>
            )}
          </div>
        </div>

        <div className={props.mode ? "sidebar-container-useless-dark" : "sidebar-container-useless"}>
          <h4> {message} <FaHeart /> </h4>
          <div className="sidebar-container">{favouriteList}</div>
           <button className="clr-fav-btn" onClick={()=>{dispatch(clearFavourites())}}>Clear Favourites</button>
        </div>
      </div>
    </>
  );
}


