import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

function App() {
  return (
    <main className="app-shell">
      <div className="app-orbit orbit-one" />
      <div className="app-orbit orbit-two" />
      <div className="todo-layout">
        <header className="intro">
          <p className="eyebrow">Personal command center</p>
          <h1>Make room for what matters.</h1>
          <p className="intro-copy">
            A quiet place to capture the next useful thing, then get it out of
            your head.
          </p>
        </header>

        <section className="todo-panel" aria-label="Todo list">
          <div className="panel-heading">
            <div>
              <p className="panel-kicker">Today&apos;s focus</p>
              <h2>Small steps, visible progress.</h2>
            </div>
            <span className="status-dot" aria-hidden="true" />
          </div>
          <TodoForm />
          <TodoList />
        </section>
      </div>
    </main>
  );
}

export default App;
