import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import { setFilter, clearCompleted } from "../features/todos/todoSlice";

function TodoList() {
  const dispatch = useDispatch();

  const { todos, filter } = useSelector((state) => state.todos);

  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-list-area">
      <div className="list-toolbar">
        <div className="filter-group" aria-label="Filter todos">
          <button
            onClick={() => dispatch(setFilter("all"))}
            className={`filter-button ${filter === "all" ? "is-selected" : ""}`}
          >
            All
          </button>

          <button
            onClick={() => dispatch(setFilter("active"))}
            className={`filter-button ${
              filter === "active" ? "is-selected" : ""
            }`}
          >
            Active
          </button>

          <button
            onClick={() => dispatch(setFilter("completed"))}
            className={`filter-button ${
              filter === "completed" ? "is-selected" : ""
            }`}
          >
            Completed
          </button>
        </div>

        <button
          onClick={() => dispatch(clearCompleted())}
          className="clear-button"
        >
          Clear completed
        </button>
      </div>

      <p className="task-count">
        {activeCount} {activeCount === 1 ? "task" : "tasks"} left
      </p>

      <div className="todo-items">
        {filteredTodos.length === 0 ? (
          <div className="empty-state">
            <span className="empty-mark" aria-hidden="true">
              +
            </span>
            <p>No todos in this view.</p>
          </div>
        ) : (
          filteredTodos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
  );
}

export default TodoList;
