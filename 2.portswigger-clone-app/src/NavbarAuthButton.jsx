import { useState } from 'react'; 
import {Button} from "@mui/material";


export default function NavbarAuthButton(){
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenuVisibility = () => {
    setIsMenuVisible((prev) => !prev);
  };
    return(
        <>
            <a href="#" className='text-customOrange hover:text-black hover:underline mr-2'>Log out</a>
            <Button className='bg-customOrange text-white rounded-full px-6 hover:bg-customOrange'>MY ACCOUNT</Button>
        </>
    );
}