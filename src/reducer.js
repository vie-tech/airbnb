// reducer.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mode: localStorage.getItem("mode") === "true" ? true : false,
  favourite: [],
  favCount: 0,

  userData:{
  username: "",
  password: "",
  confirmPassword:"",
  email: ""
 }

};



const changeModeSlice = createSlice({
  name: "toggle",
  initialState,

  reducers: {
    changeToDark: (state) => {
      return {
        ...state,
        mode: !state.mode,
      };
    },

    addFavourite: (state, action) => {

      const isDuplicate = state.favourite.some(
        (favFood) => favFood.idMeal === action.payload.idMeal
      );

      if (!isDuplicate) {
        state.favourite.push(action.payload);
        state.favCount++;

        // Save the updated favorite list to local storage
        localStorage.setItem("favourite", JSON.stringify(state.favourite));
      } else {
        return;
      }
      
      
    },

    // New action to initialize the favorite list from local storage
    initializeFavourite: (state, action) => {
      const storedFavourite = localStorage.getItem("favourite");

      if (storedFavourite) {
        state.favourite = JSON.parse(storedFavourite);
        state.favCount = state.favourite.length;
      }
    },

    removeItem: (state, action)=>{
      state.favourite = state.favourite.filter(
        (favFood) => favFood.idMeal !== action.payload.idMeal
      );
       state.favCount --
    },

    clearFavourites: (state)=>{
      localStorage.removeItem("favourite")
      state.favourite = []
      state.favCount= 0
      
    },

    inputUserName: (state, action)=>{
      state.userData.username = action.payload
    },
    inputEmail: (state, action)=>{
      state.userData.email = action.payload
    },
    inputPassword: (state, action)=>{
      state.userData.password = action.payload
    },
    inputConfirmPassword: (state, action)=>{
      state.userData.confirmPassword = action.payload
    },
  },
});

export const { changeToDark,
  addFavourite, 
 initializeFavourite,
 clearFavourites,
  removeItem,
 inputUserName,
inputEmail,
inputPassword,
inputConfirmPassword } = changeModeSlice.actions;

export default changeModeSlice.reducer;
