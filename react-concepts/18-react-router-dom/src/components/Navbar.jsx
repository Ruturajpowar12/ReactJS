import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='flex justify-between bg-amber-200 w-full h-16 items-center p-10'>
        <h2 className=' font-extrabold text-3xl ml-25' ><Link to="/">Ruturaj</Link></h2>
    <div className='mr-20 flex gap-25 font-bold'>
        <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
    </div>
      
    </nav>
  )
}

export default Navbar