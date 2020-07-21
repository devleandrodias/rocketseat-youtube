import React from "react";
import { store } from "./store";
import { Provider } from "react-redux";
import TodoList from "./TodoList";

export function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
