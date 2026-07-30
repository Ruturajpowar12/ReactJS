
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Product from './pages/Product'
import NotFound from './pages/NotFound'

function App() {
  return (
    <div>
        <Navbar/>
      <Routes>
    <Route path='/' element={<Home/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/notfound' element={<NotFound/>}></Route>

    <Route path='/product' element={<Product/>}></Route>
    <Route path='*' element={<NotFound/>}></Route>
      </Routes>

      <Footer/>



    </div>
  )
}

export default App