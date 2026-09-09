import {
  createElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const STORAGE_KEY = "todo-context-local-todos";

export const TodoContext = createContext(null);

export const useTodo = () => {
  return useContext(TodoContext);
};

export function TodoProvider({ children }) {
  const [todos, setTodos] = useState(() => {
    try {
      const savedTodos = localStorage.getItem(STORAGE_KEY);
      return savedTodos ? JSON.parse(savedTodos) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTodos((currentTodos) => [
      ...currentTodos,
      { id: crypto.randomUUID(), text: trimmedText },
    ]);
  };

  const updateTodo = (id, text) => {
    const trimmedText = text.trim();
    if (!trimmedText) return;

    setTodos((currentTodos) =>
      currentTodos.map((todo) =>
        todo.id === id ? { ...todo, text: trimmedText } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((currentTodos) => currentTodos.filter((todo) => todo.id !== id));
  };

  return createElement(
    TodoContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}
