import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhotst:5000/products");
    return response?.data;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: {
    [productsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [productsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [productsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

//async thunk helps to handle the state as you request data from the server
export default productsSlice.reducer;

export const selectAllProducts = (state) => {
  return state.products.items;
};

export const selectProductsById = (id) => (state) => {
  return state.products.items.find((item) => item.id === parseInt(id));
};