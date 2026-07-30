
function App() {
  function ch() {

    const input = document.querySelector("input");
    const span = document.querySelector("span");
    console.log("Button is clicked")

    if (span.innerText == "Ruturaj") {
      span.innerText = input.value;
    } else {
      span.innerText = "Ruturaj";
    }

  }

  return (
    <div>

      <input className=" m-5 bg-pink-300 h-13 w-70 p-4 text-black border-0 rounded-2xl" type="text" placeholder="Enter a Name "></input>
      <h1 className="m-5  text-3xl font-bold">Hello , <span>Ruturaj</span></h1>
      <button onClick={ch} className="m-5 bg-red-400 text-white w-40 h-10 p-1 rounded-2xl">Change User</button>
    </div>
  )
}

export default App