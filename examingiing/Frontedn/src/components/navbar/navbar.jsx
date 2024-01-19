import React from 'react'
import { BsTelephoneFill } from "react-icons/bs";
import "./../navbar/navbar.scss"

function Navbar() {
  return (
    <div>
        <div className='navbar'>
<div className='header'>

<div className='text-nav'>PULSE.</div>
<div className='menu-texts'>
<div className='menu-text1'>Home</div>
<div className='menu-text2'>About us</div>
<div className='menu-text3'>Restuarant</div>
<div className='menu-text4'>News</div>
<div className='menu-text5'>Contact</div>
</div>
<div className='response'>
<div className='mobile'>
    <h3>Rezervation</h3>
</div>
<div className='adding'>
<BsTelephoneFill  className='icpns'/>
<b>652-345 3222 11</b>
</div>

</div>
</div>

        </div>

    </div>
  )
}

export default Navbar