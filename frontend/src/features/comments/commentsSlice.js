import { COMMENTS } from "../../app/shared/COMMENTS";

/*import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  commentsArray: comments,
  status: null,
};

export const commentsFetch = createAsyncThunk(
  "comments/commentsFetch",
  async () => {
    const response = await axios.get("http://localhost:5000/products");
    return response?.data;
  }
);

const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    addComment: (state, action) => {
      console.log("addComment action.payload:", action.payload);
      console.log("addComment state.commentsArray:", state.comments);
      const newComment = {
        id: state.commentsArray.length + 1,
        ...action.payload,
      };
      state.commentsArray.push(newComment);
    },
  },
});

export const commentsReducer = commentsSlice.reducer;

export const { addComment } = commentsSlice.actions;

export const selectCommentsByRollId = (rollId) => (state) => {
  return state.comments.commentsArray.filter(
    (comment) => comment.rollId === parseInt(rollId)
  );
};*/
