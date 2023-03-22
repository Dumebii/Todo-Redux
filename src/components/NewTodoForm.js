import { useState } from "react";
import "./todo.css";

export default function NewTodoForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        className="input1"
        type="text"
        value={inputValue}
        placeholder="Type your new to-do here"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="button1">Create To-Do</button>
    </div>
  );
}
