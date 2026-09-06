import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  if (!user) {
    return (
      <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 text-slate-300">
        Please login to see your profile.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-cyan-400/40 bg-cyan-400/10 p-5">
      <p className="text-sm font-medium text-cyan-200">Logged in as</p>
      <h2 className="mt-1 text-2xl font-bold">Welcome {user.username}</h2>
      <button
        type="button"
        onClick={() => setUser(null)}
        className="mt-4 rounded-md border border-cyan-300 px-4 py-2 font-semibold text-cyan-100 transition hover:bg-cyan-300 hover:text-slate-950"
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
