import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchCocktails = createAsyncThunk(
  "cocktail/fetchCocktails",
  async (_, thunkApi) => {
    try {
      const response = await axios(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
      );
      return response.data.drinks;
    } catch (error) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getCocktailById = createAsyncThunk(
  "cocktail/getCocktailById",
  async (id, thunkApi) => {
    try {
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
      );
      if (response.data) {
        return response.data.drinks[0];
      }
      return response.data;
    } catch (error) {
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);

export const getCocktailByName = createAsyncThunk(
  "cocktail/getCocktailByName",
  async (name, thunkApi) => {
    try {
      const response = await axios(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`
      );
      return response.data.drinks;
    } catch (error) {
      // const message = (error.response && error.response.data) || error.message;
      const message = error.message;
      return thunkApi.rejectWithValue(message);
    }
  }
);
