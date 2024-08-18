import { AppBar, Box, Button, Toolbar, Typography,IconButton,ButtonGroup } from "@mui/material";

import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import {Link} from 'react-router-dom';
export default function Header(){
    const [Menu, setMenu]=useState(false);

    const setToggle=()=>{
        return setMenu(prevMenu=>!prevMenu);
    }
    return(
        <>
            <AppBar className="relative">
                <Toolbar >
                    <Box className='flex-1 md:flex-grow-0'>
                        <Typography className="text-xl ">
                            TravelMate
                        </Typography>
                    </Box>
                    <Box className='
                        hidden 
                        md:flex 
                        flex-1 
                        items-center 
                        justify-center 
                        space-x-8'>

                        <ButtonGroup variant="contained" className="shadow-none">
                            <Button  variant="text" className="
                                bg-white
                                text-blue-500 
                                hover:text-white 
                                hover:bg-blue-500">
                               <Link to='/'>Home</Link>
                            </Button>
                            <Button  variant="text" className="
                                bg-white
                                text-blue-500 
                                hover:text-white 
                                hover:bg-blue-500">
                               <Link to='destinations'>Destinations</Link>
                            </Button>
                            <Button  variant="text" className="
                                bg-white
                                text-blue-500 
                                hover:text-white 
                                hover:bg-blue-500">
                               <Link to='packages'>Packages</Link>
                            </Button>
                            <Button  variant="text" className="
                                bg-white
                                text-blue-500 
                                hover:text-white 
                                hover:bg-blue-500">
                              <Link to='signup'>Sign up</Link> 
                            </Button>
                        </ButtonGroup>
                    </Box>

                    <Box className='
                        flex 
                        justify-center 
                        items-center'>    
                        <IconButton color="inherit">
                            <NotificationsIcon/>
                        </IconButton>
                        <IconButton color="inherit">
                            <AccountCircle/>
                        </IconButton>
                        <IconButton 
                            color="inherit" 
                            className="md:hidden" 
                            onClick={()=>{setToggle()}}>
                            <MenuIcon/>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {Menu &&<Box className='
                md:hidden 
                w-full 
                flex 
                flex-col 
                items-start 
                space-y-4 px-4'>

                <Button><Link to='/'>Home</Link></Button>
                <Button><Link to='destination'>Destinations</Link></Button>
                <Button><Link to='packages'>Packages</Link></Button>
                <Button><Link to='signup'>Sign up</Link></Button>
            </Box>}
        </>
    );
}