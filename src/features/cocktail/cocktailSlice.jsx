import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCocktails,
  getCocktailById,
  getCocktailByName,
} from "./cocktailActions";

const initialState = {
  listCocktails: [],
  singleCocktail: {},
  searchValue: "a",
  loading: false,
  error: false,
  success: false,
  message: "",
};

const cocktailSlice = createSlice({
  name: "cocktail",
  initialState,
  reducers: {
    reset: (state) => {
      state.listCocktails = [];
      state.singleCocktail = {};
      state.searchValue = "a";
      state.loading = false;
      state.error = false;
      state.success = false;
      state.message = "";
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCocktails.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCocktails.fulfilled, (state, action) => {
      state.loading = false;
      state.listCocktails = action.payload;
      state.success = true;
    });
    builder.addCase(fetchCocktails.rejected, (state, action) => {
      state.loading = false;
      state.listCocktails = [];
      state.message = action.payload;
      state.error = true;
    });

    builder.addCase(getCocktailById.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCocktailById.fulfilled, (state, action) => {
      state.loading = false;
      state.singleCocktail = action.payload;
      state.success = true;
    });
    builder.addCase(getCocktailById.rejected, (state, action) => {
      state.loading = false;
      state.singleCocktail = {};
      state.message = action.payload;
      state.error = true;
    });

    builder.addCase(getCocktailByName.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCocktailByName.fulfilled, (state, action) => {
      state.loading = false;
      state.listCocktails = action.payload;
      state.success = true;
    });
    builder.addCase(getCocktailByName.rejected, (state, action) => {
      state.loading = false;
      state.listCocktails = [];
      state.message = action.payload;
      state.error = true;
    });
  },
});

export const { reset, setSearchValue } = cocktailSlice.actions;
export default cocktailSlice.reducer;
