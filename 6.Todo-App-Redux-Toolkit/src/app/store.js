import React from "react";

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice.js";

export const store = configureStore({
  reducer: {
    Todos: todoReducer,
  },
});

export default store;
