import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo, updateTodo } from "./features/todos/todoSlice";

function App() {
  const [text, setText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const handleAddTodo = (event) => {
    event.preventDefault();
    if (!text.trim()) return;
    dispatch(addTodo(text));
    setText("");
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    if (!editText.trim()) return;
    dispatch(updateTodo({ id: editingId, text: editText }));
    setEditingId(null);
  };

  return (
    <main className="app">
      <h1>Todo App</h1>
      <form onSubmit={handleAddTodo} className="add-form">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a todo"
        />
        <button>Add</button>
      </form>
      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id}>
            {editingId === todo.id ? (
              <form onSubmit={handleUpdate} className="edit-form">
                <input
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  autoFocus
                />
                <button>Save</button>
              </form>
            ) : (
              <>
                <span>{todo.text}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => dispatch(deleteTodo(todo.id))}>
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;
