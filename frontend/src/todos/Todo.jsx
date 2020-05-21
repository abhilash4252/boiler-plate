import React from "react";

import TodoCreate from "./create/TodoCreate";
import TodoList from "./list/TodoList";

const Todo = () => {
  return (
    <>
      <TodoList />
      <TodoCreate />
    </>
  );
};

export default Todo;
