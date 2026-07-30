
import Card from './components/Card'
import Navbar from './components/Navbar';

function App() {

  const user = 'Ruturaj';
  return (
    <>
      <Navbar />
      <h1>Hi I am {user}</h1>
      <Card />
    </>
  )
}

export default App