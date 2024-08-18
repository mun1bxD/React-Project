import React from "react";
import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "Todos",
  initialState: [],
  reducers: {
    addtodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    removetodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggletodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addtodo, removetodo, toggletodo } = todoSlice.actions;
export default todoSlice.reducer;
