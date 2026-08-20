function Navbar() {
  return (
    <div className=" flex justify-between px-15 py-5 w-full items-center bg-red-500 ">
      <h1 className=" font-extrabold text-white text-5xl ml-10">Marvel</h1>
      <ul className="flex justify-between gap-15 font-light text-3xl text-white">
        <li>home</li>
        <li>about</li>
        <li>contact</li>
      </ul>

      <button className="bg-red-100 text-amber-800 p-3 rounded-lg shadow-2xl font-semibold ">
        get more info!
      </button>
    </div>
  );
}

export default Navbar;
