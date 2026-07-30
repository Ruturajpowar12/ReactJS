import React, { useEffect, useState } from 'react'

function App() {

  const [num, setnum] = useState(0)

 useEffect(function (){
  console.log("useEffect is running");
  
 },[num])


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => setnum(num + 1)}>click</button>
    </div>
  )
}

export default App