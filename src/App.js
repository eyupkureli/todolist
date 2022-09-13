import React, { useState } from "react";
import "./App.css";
import ToDo from "./ToDo";
import TodoItem from "./TodoItem";

function App() {
  const [todos, setTodos] = useState([]);
  const addToDo = (text) => {
    let id = 1;
    if (todos.length > 0) {
      id = todos[0].id + 1;
    }
    let todo = { id: id, text: text, completed: false };
    let newTodos = [todo, ...todos];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  //from false to true
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  return (
    <div className="App">
      <ToDo addToDo={addToDo} />
      {todos.map((todo) => {
        return (
          <TodoItem
            removeTodo={removeTodo}
            completeTodo={completeTodo}
            todo={todo}
            key={todo.id}
          />
        );
      })}
    </div>
  );
}

export default App;
