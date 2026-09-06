import { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);

  if (!user)
    return (
      <div className="bg-slate-700 rounded py-5 px-10 w-[700px] flex flex-col gap-3 shadow-2xl">
        <p className="text-cyan-300 text-xl font-semibold">user not found</p>
      </div>
    );

  return (
    <div className="bg-slate-700 rounded py-5 px-10 w-[700px] flex flex-col gap-3 shadow-2xl">
      <p className="text-cyan-300 text-xl font-semibold">User is Logged in!</p>
      <h1 className="text-2xl font-bold my-3">
        Welcome
        <span className="text-cyan-300 ml-1">{user.username}</span>
      </h1>
      <button
        className="w-30 bg-slate-900 text-cyan-300 font-bold p-3 rounded shadow-xl"
        onClick={() => setUser(null)}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
