import { configureStore } from '@reduxjs/toolkit';
import todoSliceReducer from './features/todoSlice';

export const store = configureStore({
  reducer: {
    todo: todoSliceReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
