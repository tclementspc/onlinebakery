import { configureStore } from "@reduxjs/toolkit";

//import { rollsReducer } from "../features/rolls/rollsSlice";
import { commentsReducer } from "../features/comments/commentsSlice";

import productsReducer from "../features/productsSlice";

import { productsApi } from "../features/productsApi";
import cartReducer from "../features/cartSlice";

export const store = configureStore({
  reducer: {
    comments: commentsReducer,
    products: productsReducer,
    cart: cartReducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware),
});
