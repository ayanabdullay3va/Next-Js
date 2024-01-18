import React from 'react'
import {Helmet} from "react-helmet";

import "./../home/home.scss"
import 'animate.css'
import { Link } from 'react-router-dom';
import Swiper from '../swiper/swiper';


function Home() {
  return (
    <>
    <div>
        <div className="application">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Home</title>
                <link rel="canonical" href="http://localhost:5173/" />
            </Helmet>
        </div>
      <div className='end-navbar'>
<div className='transparent , animate__animated animate__fadeInRight animate__delay-1s' >
<div className='textt1' >
    <h1>Selling.
</h1>
</div>
<div >
<div className='nav-text'>
<div>Home</div>
<div>About</div>

{/* <Link to="/add"><div>Add</div></Link> */}

{/* <Link to="/basket"><div>Basket</div></Link> */}
</div>
</div>

</div>
      </div>

    </div>
    <Swiper/>
    </>
  )
  
}


export default Home
