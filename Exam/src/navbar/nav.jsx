import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import {  Link } from "react-router-dom"
function Navbar() {
  return (
    <div className='container'>
      <div className='div-contain'>
      <nav>
<header className='header'>
  <div className='icons'>
    <div className='mobile'>

      <FacebookIcon fontSize='large'></FacebookIcon>
      <TwitterIcon fontSize='large'></TwitterIcon>
      <InstagramIcon fontSize='large'></InstagramIcon>
      <LinkedInIcon fontSize='large'></LinkedInIcon>
    </div>
    <div className='email'>
      <PhoneIcon></PhoneIcon> <b>     shop@yourdomain.com</b>
 

      <EmailIcon></EmailIcon> <b> shop@yourdomain.com</b> 
    
    </div>
  </div>
</header>
</nav>
      </div>
      <div className='header-end'>
        <div className='logo-text'>
      <h1>Selling </h1>
        </div>
        <div className='hover-text'>
         <Link to={"/"}><p >Home</p></Link> 
         <Link to={"/basket"}><p>Basket</p></Link> 
          <p>About Us</p>
          <Link><p>Add</p></Link>
          <p>Blog</p>
          <p>Contact</p>
          
        </div>
        </div>
      
    </div>
  )
}

export default Navbar