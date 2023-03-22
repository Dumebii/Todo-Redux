import "./todo.css";

export default function TodoListItem({ todo }) {
  return (
    <div className="todo-block">
      <h3 className="todo-item">{todo.text}</h3>
      <button className="todo-button1">Mark as completed</button>
      <button className="todo-button2">Delete</button>
    </div>
  );
}
