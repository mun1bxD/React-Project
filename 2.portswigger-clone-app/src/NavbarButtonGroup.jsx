import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {Button,ButtonGroup} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
export default function NavbarButtonGroup({handleHover, onProductClick,onSolutionClick,onSupportClick }){
    return(
        
        <>
            <ButtonGroup className='border-none hidden lg:block' variant="text" aria-label="Basic button group">
            <Button endIcon={<KeyboardArrowDownIcon/>} className='text-black hover:text-customOrange normal-case text-base border-r-2 border-customOrange ' onClick={onProductClick}>Product</Button>
            <Button endIcon={<KeyboardArrowDownIcon/>} className='text-black hover:text-customOrange normal-case text-base border-customOrange border-r-2 ' onClick={onSolutionClick}>Solutions</Button>
            <Button className='text-black hover:text-customOrange normal-case text-base border-customOrange border-r-2'>Research</Button>
            <Button className='text-black hover:text-customOrange normal-case text-base border-customOrange border-r-2'>Academy</Button>            
            <Button endIcon={<KeyboardArrowDownIcon/>} className='text-black hover:text-customOrange normal-case text-base border-customOrange border-r-2' onClick={onSupportClick}>Support</Button>
            <Button onMouseEnter={handleHover}  startIcon={<MenuIcon className='w-6 h-6'/>} className='text-black hover:text-customOrange text-base '></Button>
            </ButtonGroup>
        </>
    );
}