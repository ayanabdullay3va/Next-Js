import React from 'react'
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import "./../navbar/navbar.scss"
import Home from '../home/home';
function Navbar() {
  return (
    <div className='container'>
        <div className='navbar'>
            <div className='navbar-center'>
              <div className='icons'>
<div>
    <MdFacebook className='facebook'/>
</div>
<div>
    <AiFillTwitterCircle  className='twitter'/>
</div>
<div><FaInstagram  className='instagram'/></div>
<div><FaLinkedinIn  className='linkedn'/></div>
              </div>
              <div className='navbar-contact'>
                <div><BsTelephone className='telefon'/> <b>(+1) 234 5678 9101</b></div>
                <div><MdMessage className='mesaj'/> <b>shop@yourdomain.com</b></div>
              </div>
            </div>
        </div>
<Home/>

    </div>
    
    
  )
  
}

export default Navbar