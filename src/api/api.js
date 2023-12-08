import {useQuery} from "react-query"
import React, {useState} from "react"
import axios from "axios"


const fetchFood= async ({foodName, setMeal})=>{
    axios
    .get(`https://themealdb.com/api/json/v1/1/search.php?s=${foodName}`)
    .then((res) => {
      setMeal(res.data.meals);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  
}
  
export const ApiSearch =()=>{
    const [inputFood, setInputFood] = useState("");
    const {data, status} = useQuery('food', fetchFood)
    console.log(status)

    return(
        <>
        
        </>
    )
}

