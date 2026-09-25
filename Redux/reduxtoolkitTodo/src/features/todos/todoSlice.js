import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo(state, action) {
      state.push({
        id: Date.now(),
        text: action.payload.trim(),
        completed: false,
      });
    },

    updateTodo(state, action) {
      const todo = state.find((item) => item.id === action.payload.id);
      if (todo) todo.text = action.payload.text.trim();
    },

    deleteTodo(state, action) {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addTodo, updateTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
