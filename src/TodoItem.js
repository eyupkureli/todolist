import React from "react";

export default function TodoItem(props) {
  const { todo, removeTodo, completeTodo } = props;
  return (
    <div className={todo.completed ? "todo-completed" : "todo"}>
      {todo.text}
      <button onClick={() => removeTodo(todo.id)}>X</button>
      <button onClick={() => completeTodo(todo.id)}>OK</button>
    </div>
  );
}
