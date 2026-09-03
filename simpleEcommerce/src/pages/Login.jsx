import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="w-full h-screen bg-blue-200 flex justify-center items-center">
      <div className="flex bg-white shadow-2xl rounded-2xl p-6 gap-2 w-80 flex-col ">
        <div className="w-full px-3 flex justify-between items-center">
          <h1 className="font-bold text-2xl text-blue-900">SHOP LOGIN</h1>
          <Link to={"/"} className="font-semibold text-blue-800">
            Back
          </Link>
        </div>
        <input
          type="email"
          placeholder="Enter Your Email"
          className=" bg-gray-200 border-none p-3 rounded-lg mt-3 hover:border-blue-500 "
        />

        <input
          type="password"
          placeholder="Password"
          className=" bg-gray-200 border-none p-3 rounded-lg my-3 hover:border-blue-500 "
        />

        <button
          className="bg-blue-800 text-white font-semibold p-3 rounded-lg
        shadow-lg hover:scale-103 duration-300"
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
