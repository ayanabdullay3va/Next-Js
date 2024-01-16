import { useState } from 'react'
import Navbar from './navbar/nav'
import "./style/navbar.css"
import Home from './home/home'
import Footer from "./footers/footer"

import "./style/footer.css"
import "./style/home.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Home/>
   <Footer/>
    </>
  )
}

export default App
