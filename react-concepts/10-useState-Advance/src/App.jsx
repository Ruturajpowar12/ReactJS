import React, { useState } from 'react'

function App() {

    const [a, seta] = useState(0)
    const ch = ()=>{

        seta(prev => prev + 1)
        
        console.log(a);
        
    }
  return (
    <div>

        <h1>
           

           {a}
        </h1>
        <button onClick={ch}>click</button>
    </div>
  )
}

export default App