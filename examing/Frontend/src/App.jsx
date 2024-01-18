import Navbar from "./components/navbar/navbar"
import Home from './components/home/home'
import Swiper from './components/swiper/swiper'
import Card from "./components/cards/card"
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import {  routes } from './router/router'
const router = createBrowserRouter(routes)

function App() {
  return (
    <>
    <Navbar/>
   
    <RouterProvider router={router} />
    </>
  )
}

export default App
