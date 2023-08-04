import { configureStore } from "@reduxjs/toolkit";

//import { rollsReducer } from "../features/rolls/rollsSlice";
import { commentsReducer } from "../features/comments/commentsSlice";

import productsReducer from "../features/productsSlice";

import { productsApi } from "../features/productsApi";

import { commentsApi } from "../features/commentsApi";

import cartReducer from "../features/cartSlice";

import logger from "redux-logger";
/* logger is middleware */

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
    [commentsApi.reducerPath]: commentsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger]),
});
