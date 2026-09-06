import { useState, useContext } from "react";

import UserContext from "../context/UserContext";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username.trim() || !password.trim()) return;

    setUser({ username, password });
    setUsername("");
    setPassword("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4 rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-xl"
    >
      <h2 className="text-xl font-semibold">Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 outline-none transition focus:border-cyan-400"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="rounded-md border border-slate-700 bg-slate-950 px-3 py-2 outline-none transition focus:border-cyan-400"
      />
      <button
        type="submit"
        className="rounded-md bg-cyan-400 px-4 py-2 font-semibold text-slate-950 transition hover:bg-cyan-300"
      >
        Submit
      </button>
    </form>
  );
}

export default Login;
