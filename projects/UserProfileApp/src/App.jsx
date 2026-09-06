import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <main className="w-full h-screen bg-slate-900 text-white  p-10 flex flex-col gap-5 items-center">
        <h1 className="text-5xl text-cyan-300 font-bold mb-7 text-center ">
          User Profile App
        </h1>

        <Login />
        <Profile />
      </main>
    </UserContextProvider>
  );
}

export default App;
