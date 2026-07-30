import React, { useState } from 'react'

function App() {

  const [a, setA] = useState(0)

  const inc = () => {
    console.log(a);
    setA(a + 1);


  }
  const de = () => {
    console.log(a);
    setA(a - 1);


  }
  const byf = () => {
    console.log(a);
    setA(a + 5);


  }

  return (
    <div>
      <h1 className='h-10 w-2/4 bg-amber-400 p-2 ml-10 text-center text-xl font-bold' >{a}</h1>
      <button onClick={inc} className='bg-gray-500 m-3 text-white w-20 h-10 rounded-2xl'>increase</button>
      <button onClick={de} className='bg-gray-500 m-3 text-white w-20 h-10 rounded-2xl'>decrese</button>
      <button onClick={byf} className='bg-gray-500 m-3 text-white w-20 h-10 rounded-2xl'>jump by 5 </button>

    </div>
  )
}

export default App