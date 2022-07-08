import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { rollsReducer } from '../features/rolls/rollsSlice';
import { commentsReducer
 } from '../features/comments/commentsSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    rolls:rollsReducer,
    comments:commentsReducer
  },
});
