/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const commentsFetch = createAsyncThunk(
  "comments/commentsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/comments");
    return response?.data;
  }
);

const commentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: {
    [commentsFetch.pending]: (state, action) => {
      state.status = "pending";
    },
    [commentsFetch.fulfilled]: (state, action) => {
      state.status = "success";
      state.items = action.payload;
    },
    [commentsFetch.rejected]: (state, action) => {
      state.status = "rejected";
    },
  },
});

//async thunk helps to handle the state as you request data from the server
//export default commentSlice.reducer;

export const selectAllComments = (state) => {
  return state.comments.items;
};

export const selectCommentsById = (id) => (state) => {
  return state.comments.items.find((item) => item.id === parseInt(id));
};
//export const selectCommentsByProductId = (productId) => (state) => {
//  return state.comments.commentsArray.filter(
//    (comment) => comment.productId === parseInt(productId)
//  );
*/
