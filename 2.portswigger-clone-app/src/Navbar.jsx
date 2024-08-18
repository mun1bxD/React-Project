import { useState } from 'react'
import {AppBar,Toolbar} from "@mui/material"
import portswigger_logo from "./assets/portswigger_logo.svg";
import orange_logo from "./assets/orange_logo.svg";

import NavbarButtonGroup from './NavbarButtonGroup.jsx';

import NavbarHoverMenu from './NavbarHoverMenu.jsx';
import NavbarAuthButton from './NavbarAuthButton.jsx';
import NavbarProductButton from './NavbarProductButton.jsx';
import NavbarSolutionButton from './NavbarSolutionButton.jsx';
import NavbarSupportButton from './NavbarSupportButton.jsx';

export default function Navbar(){
  const [anchorEl,setAnchorEl]=useState(null);
  const [visible,setVisible]=useState(false);

  const handleHover=(event)=>{
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose=()=>{
    setAnchorEl(null);
 
  };

  
  const toggleVisibility=(section)=>()=>{
    setVisible((prev)=>(prev===section ? null:section));
  }
    return(
        <>
      <AppBar position="relative" className='shadow-none z-10 h-28 md:h-auto'>
        <Toolbar className='bg-white border-b-customOrange border-2 h-28 md:h-auto'>
          <div className='flex-1 justify-center md:ml-8 ml-0'>
            <img className='sm:block hidden' src={portswigger_logo} alt="#" />
            <img className='sm:hidden block' src={orange_logo} alt="#" />
          </div>
          <div className='flex flex-col mt-8 items-end md:mr-8 mr-0'>
            <div className='flex items-center space'>
              <NavbarAuthButton/>
            </div>
            <div className='flex mt-8 mb-1'>
                <NavbarButtonGroup handleHover={handleHover} onProductClick={toggleVisibility('product')} onSolutionClick={toggleVisibility('solution')} onSupportClick={toggleVisibility('support')}/>
            </div>
                <NavbarHoverMenu handleClose={handleClose} anchorEl={anchorEl}/>
            </div>

        </Toolbar>
      </AppBar>
      
      {visible==='product' && (<NavbarProductButton/>)}
    
      
        {visible==='solution' && (<NavbarSolutionButton/>)}

      {visible ==='support' && (<NavbarSupportButton/>)}

      
    </>
    
    );
}