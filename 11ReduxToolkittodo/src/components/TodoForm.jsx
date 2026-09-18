import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function TodoForm() {
  const [text, setText] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    dispatch(
      addTodo({
        id: Date.now(),
        text: text.trim(),
        completed: false,
      }),
    );

    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="What do you need to do?"
        className="todo-input"
      />

      <button type="submit" className="primary-button">
        Add task
      </button>
    </form>
  );
}

export default TodoForm;
