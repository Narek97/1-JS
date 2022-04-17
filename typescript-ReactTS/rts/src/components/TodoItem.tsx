import React, { FC } from "react";
import { ITodo } from "../types/types";

interface TodoItemProps {
  todo: ITodo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  return (
    <div>
      <input type="checkbox" defaultChecked={todo.completed} />
      {todo.id} {todo.title}
    </div>
  );
};

export default TodoItem;
