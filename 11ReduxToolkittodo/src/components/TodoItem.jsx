import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../features/todos/todoSlice";

function TodoItem({ todo }) {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (!editText.trim()) return;

    dispatch(
      editTodo({
        id: todo.id,
        text: editText.trim(),
      }),
    );

    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.completed ? "is-complete" : ""}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => dispatch(toggleTodo(todo.id))}
        className="todo-checkbox"
        aria-label={`Mark ${todo.text} as ${todo.completed ? "active" : "complete"}`}
      />

      <div className="todo-copy">
        {isEditing ? (
          <input
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleEdit();
              }
            }}
            autoFocus
            className="edit-input"
          />
        ) : (
          <p className="todo-text">{todo.text}</p>
        )}
      </div>

      <div className="todo-actions">
        {isEditing ? (
          <button onClick={handleEdit} className="item-button save-button">
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="item-button edit-button"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => dispatch(deleteTodo(todo.id))}
          className="item-button delete-button"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
