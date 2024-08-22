import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";
import monthReducer from "./slices/monthSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    month: monthReducer,
  },
});
