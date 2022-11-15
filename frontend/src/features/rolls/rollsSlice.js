/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  productsArray: [],
  status: null,
  isLoading: true,
  errMsg: "",
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhotst:5000/products");
    if (!response.ok) {
      return Promise.reject("Unable to fetch, status: " + response.status);
    }
    const data = await response.JSON();
    return data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state) => {
      state.isLoading = true;
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.isLoading = false;
      state.errMsg = action.error ? action.error.message : "Fetch failed.";
    },
  },
});

export const productsReducer = productsSlice.reducer;

export const selectAllProducts = (state) => {
  return state.products.productsArray;
};

export const selectProductsById = (id) => (state) => {
  return state.products.productsArray.find((item) => item.id === parseInt(id));
}; */
