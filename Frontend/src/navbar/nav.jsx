import React from 'react'
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
function Navbar() {
  return (
    <>
    <div className='container'>
        <div>
            <nav>
                <header>
                    <div className='header'>
                      <div className='logo-text'> <img src="https://preview.colorlib.com/assets/img/logo.png" alt="" />
                        <div className='text'><p>+PULSE</p></div>
                        </div>
                        <div className='icons'>
                            <div><PiTelevisionSimpleDuotone />
</div>                         <div><PiTelevisionSimpleDuotone />
</div>                         <div><PiTelevisionSimpleDuotone />
</div>                         <div><PiTelevisionSimpleDuotone />
</div>

                        </div>
                    </div>
                </header>
            </nav>
        </div>
    </div>
   
    </>
  )
}

export default Navbar