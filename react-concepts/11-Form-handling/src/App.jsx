import React from 'react'

function App() {
  


  return (
    <div>
      <form onSubmit={(e)=>{
        sumbithanddler(e)
      }}>
        <input type='text' placeholder='Enter your name'>
        </input>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App