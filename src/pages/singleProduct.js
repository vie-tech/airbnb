import React, { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
import axios from "axios";
import cookingImage from "../react photos/salad.png";
import instructionIcon from "../react photos/instructions.png";

function SingleProduct() {
  const { shopId } = useParams();
  const [meal, setMeal] = useState(null);
  console.log(meal);

  useEffect(() => {
    // Make an API request to fetch the meal details based on shopId
    axios
      .get(`https://themealdb.com/api/json/v1/1/lookup.php?i=${shopId}`)
      .then((res) => {
        if (res.data.meals && res.data.meals.length > 0) {
          setMeal(res.data.meals[0]);
        } else {
          setMeal(null);
        }
      })
      .catch((error) => console.log(error));
  }, [shopId]);

  return (
    <div className="recipe-container">
      {meal ? (
        <>
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="shop-fav"
          />
          <p className="shop-fav-details">{meal.strMeal}</p>
          {/* Render other details of the selected meal */}
        </>
      ) : (
        <p>Meal not found</p>
      )}
      <NavLink to="/shop">
        <button className="shop-fav-button">Back to Shop</button>
      </NavLink>

      {meal && (
        <div className="recipe">
          <h1>
            Ingridients{" "}
            <img src={cookingImage} alt="" className="cooking-icon" />{" "}
          </h1>
          <ul>
            <li>{meal.strIngredient1}</li>
            <li>{meal.strIngredient2}</li>
            <li>{meal.strIngredient3}</li>
            <li>{meal.strIngredient4}</li>
            <li>{meal.strIngredient5}</li>
            <li>{meal.strIngredient6}</li>
            <li>{meal.strIngredient7}</li>
            <li>{meal.strIngredient8}</li>
          </ul>
        </div>
      )}

      { meal && <div className="instructions">
        <h1>Instructions <img src={instructionIcon} alt="" className="cooking-icon" /></h1>
        <p>{meal.strInstructions}</p>
      </div>}

      { meal && <div className="measurements">
        <h1>Measurements</h1>
        <ul>
          <li>{meal.strMeasure1}</li>
          <li>{meal.strMeasure2}</li>
          <li>{meal.strMeasure3}</li>
          <li>{meal.strMeasure4}</li>
          <li>{meal.strMeasure5}</li>
          <li>{meal.strMeasure6}</li>
          <li>{meal.strMeasure7}</li>
          <li>{meal.strMeasure8}</li>
          <li>{meal.strMeasure9}</li>
        </ul>
      </div>}
    </div>
  );
}

export default SingleProduct;
