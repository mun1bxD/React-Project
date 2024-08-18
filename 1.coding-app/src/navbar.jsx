import { useState } from "react";
import NavButton from "./NavButton.jsx";
import NavMenu from "./NavMenu.jsx";
import logoimg from "./logo.png";
export default function Navbar(){
    const[toggle,setoggle]=useState(true)

    const handle=()=>{
        setoggle(!toggle);
    }
    return(
        <>
            <div className="flex justify-between  bg-customColor">
                <div className="flex">
                <img className="mt-5 ml-10 w-12 h-12" src={logoimg} alt="logo" />
                <h1 className="mt-6 ml-2 md:ml-2 text-2xl md:text-3xl  font-bold text-white">DevMentor</h1>
                </div>
                {!toggle&& <NavMenu/>}
                <NavButton handle={handle} toggle={toggle}/>
            </div>
        </>
    );
}