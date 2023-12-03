import React ,{useState}from 'react'
import "./Header.css"
import Sidenav from "./Sidenavbar.jsx"
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {

    const [hamburger,setHamburger]= useState(false)
    
const handlediv=()=>{
       setHamburger(!hamburger);
}
  return (
    <>
        <div className='header'>
              <div className='header-name'>
           <h2 className='navbar-brand text-white'>sathvik <span className='text-primary'>maiya</span></h2>
              </div>
              <div className='header-navbar'>
                <GiHamburgerMenu  color='white' size={35} onClick={handlediv}/>
              </div>
               {
                hamburger && <Sidenav toggleburger={handlediv}/>
              }
         
            
        </div>
    </>
  )
}

export default Header
