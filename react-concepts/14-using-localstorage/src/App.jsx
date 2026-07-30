import React from 'react'

function App() {


//setItem
const user = localStorage.setItem('sd','sarthak')  
console.log(user);
 
//getItem
const age = localStorage.getItem(16);

console.log(age);

//remove Item
localStorage.removeItem('user') 


const usere = {
  user:"ahjas",
  ageis:13,
}
localStorage.setItem('usere', JSON.stringify(usere))

  return (
    <div>
app
    </div>
  )
}

export default App