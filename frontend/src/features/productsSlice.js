import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { ActionTypes } from "../app/redux/actions/constants";

/* added in fetchProductDetail  on Saturday 8/12*/

export const productsFetch = createAsyncThunk(
  "products/productsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    //const response = await axios.get(productsApi);
    return response?.data;
  }
);

//export const fetchProductById = createAsyncThunk(
//  "product/fetchProductById",
//  async (id, { rejectWithValue }) => {
//    try {
//      const response = await axios.get(`http://localhost:5000/products/${id}`);
//      return response?.data;
//    } catch (error) {
//      return rejectWithValue("An error occurred");
//    }
//  }
//);

const initialState = {
  productsArray: [],
  status: null,
};
/*line 34 added for single product */
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
    //    [fetchProductById.pending]: (state, action) => {
    //      state.status = "loading";
    //    },
    //    [fetchProductById.fulfilled]: (state, action) => {
    //      state.status = "success";
    //      state.items = action.payload;
    //    },
    //    [fetchProductById.rejected]: (state, action) => {
    //      state.status = "rejected";
    //    },
  },
});

//async thunk helps to handle the state as you request data from the server
export default productsSlice.reducer;

export const selectAllProducts = (state) => {
  return state.products.items;
};

export const selectProductById = (slug) => (state) => {
  return state.products.productsArray.find(
    (product) => product.slug === parseInt(slug)
  );
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_PRODUCT:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_PRODUCT:
      return {};
    default:
      return state;
  }
};
