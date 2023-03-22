import TodoListItem from "./TodoListItem";
import React from "react";
import NewTodoForm from "./NewTodoForm";
import "./todo.css";

export default function Todo({ todos = [{ text: "Hello" }] }) {
  return (
    <div className="main-container">
      <NewTodoForm />
      {todos.map((todo) => (
        <TodoListItem todo={todo} />
      ))}
    </div>
  );
}
