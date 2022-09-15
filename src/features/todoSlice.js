import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    clearAllTodos: (state) => {
      state.todos = [];
    },
    addTodo: (state, { payload }) => {
      state.todos = [...state.todos, payload];
    },
    removeTodo: (state, { payload }) => {
      state.todos = state.todos.filter((item) => item.id !== payload);
    },
    updateTodo: (state, { payload }) => {
      const { id, task } = payload;
      const todo = state.todos.find((item) => item.id === id);
      todo.task = task;
    },
  },
});

export const { clearAllTodos, addTodo, removeTodo, updateTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
