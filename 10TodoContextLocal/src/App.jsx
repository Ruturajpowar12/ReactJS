import { useState } from "react";
import { useTodo } from "./context/TodoContext";

function App() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodo();
  const [todoText, setTodoText] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoText);
    setTodoText("");
  };

  const startEditing = (todo) => {
    setEditingId(todo.id);
    setEditingText(todo.text);
  };

  const saveEdit = (event) => {
    event.preventDefault();
    updateTodo(editingId, editingText);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-10 text-white">
      <div className="mx-auto w-full max-w-2xl rounded-2xl bg-slate-900 p-6 shadow-2xl ring-1 ring-white/10 sm:p-8">
        <h1 className="mb-2 text-center text-3xl font-bold tracking-tight">
          Manage Your Todos
        </h1>
        <p className="mb-8 text-center text-sm text-slate-400">
          Your tasks are saved automatically in this browser.
        </p>

        <form onSubmit={handleSubmit} className="mb-8 flex gap-3">
          <input
            value={todoText}
            onChange={(event) => setTodoText(event.target.value)}
            placeholder="What needs to be done?"
            aria-label="New todo"
            className="min-w-0 flex-1 rounded-lg border border-slate-700 bg-slate-800 px-4 py-3 outline-none placeholder:text-slate-500 focus:border-cyan-400"
          />
          <button
            type="submit"
            className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
          >
            Add
          </button>
        </form>

        <div className="space-y-3">
          {todos.length === 0 ? (
            <p className="rounded-lg border border-dashed border-slate-700 px-4 py-8 text-center text-slate-500">
              No todos yet. Add your first task above.
            </p>
          ) : (
            todos.map((todo) =>
              editingId === todo.id ? (
                <form
                  key={todo.id}
                  onSubmit={saveEdit}
                  className="flex gap-3 rounded-lg bg-slate-800 p-3"
                >
                  <input
                    value={editingText}
                    onChange={(event) => setEditingText(event.target.value)}
                    autoFocus
                    aria-label="Edit todo"
                    className="min-w-0 flex-1 rounded-md border border-slate-600 bg-slate-900 px-3 py-2 outline-none focus:border-cyan-400"
                  />
                  <button
                    type="submit"
                    className="font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="font-semibold text-slate-400 hover:text-white"
                  >
                    Cancel
                  </button>
                </form>
              ) : (
                <div
                  key={todo.id}
                  className="flex items-center gap-3 rounded-lg bg-slate-800 p-3"
                >
                  <span className="min-w-0 flex-1 break-words text-slate-100">
                    {todo.text}
                  </span>
                  <button
                    type="button"
                    onClick={() => startEditing(todo)}
                    className="font-semibold text-cyan-400 hover:text-cyan-300"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => deleteTodo(todo.id)}
                    className="font-semibold text-rose-400 hover:text-rose-300"
                  >
                    Delete
                  </button>
                </div>
              ),
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
