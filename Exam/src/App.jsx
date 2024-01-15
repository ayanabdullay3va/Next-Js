import { useState } from 'react'
import Navbar from './navbar/nav'
import "./navbar/nav.css"
import Home from './home/home'
import { Route, Routes } from "react-router-dom"
import Basket from './basket/basket'
import "./home/home.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basket" element={<Basket />} />
    </Routes>
    </>
  )
}

export default App
