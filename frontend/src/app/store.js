//import { configureStore } from "@reduxjs/toolkit";

//import { rollsReducer } from "../features/rolls/rollsSlice";
//import { commentsReducer } from "../features/comments/commentsSlice";

//import productsReducer from "../features/productsSlice";

//import { productsApi } from "../features/productsApi";

//import cartReducer from "../features/cartSlice";

//import { setupListeners } from "@reduxjs/toolkit/dist/query";

//import { selectedProductReducer } from "../features/productsSlice";
/* need middleware to handle api calls - redux toolkit used create AsyncThunk as middleware */
/* added setupListeners as new - see also line 24 - then removed*/

//export const store = configureStore({
//  reducer: {
//    products: productsReducer,
//    cart: cartReducer,
//    [productsApi.reducerPath]: productsApi.reducer,
//  },
//  middleware: (getDefaultMiddleware) =>
//    getDefaultMiddleware().concat(productsApi.middleware),
//});

/*added new dispatch below */
setupListeners(store.dispatch);
