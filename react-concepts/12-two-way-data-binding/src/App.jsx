import React, { useState } from 'react'

function App() {
  
  const [title, settitle] = useState('')

const sumbithanddler =(e)=>{
  e.preventDefault();
  console.log("submmit",title);
  settitle('')
  
}

  return (
    <div>
      <form onSubmit={(e)=>{
        sumbithanddler(e)
      }}>
        <input type='text' placeholder='Enter your name' value={title}
        onChange={(e)=>
          settitle(e.target.value)
        }>
        </input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App