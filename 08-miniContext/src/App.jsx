import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <main className="min-h-screen bg-slate-950 px-4 py-10 text-white">
        <section className="mx-auto flex w-full max-w-2xl flex-col gap-6">
          <div>
            <p className="text-sm font-semibold uppercase text-cyan-300">
              Context API
            </p>
            <h1 className="mt-2 text-3xl font-bold">Simple User Login</h1>
          </div>

          <Login />
          <Profile />
        </section>
      </main>
    </UserContextProvider>
  );
}

export default App;
