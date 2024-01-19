import { useState } from 'react'
import Navbar from './components/navbar/navbar'
import Home from './components/home/home'
import Sectioned from './components/sections/section1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navbar/>
     <Home/>
     <Sectioned/>
    </>
  )
}

export default App
