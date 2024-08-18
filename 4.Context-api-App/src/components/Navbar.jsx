    import { AppBar, Box, Button, Toolbar, Typography,Switch, Select, MenuItem ,TextField, colors} from "@mui/material";
    import FormControlLabel from '@mui/material/FormControlLabel';
    import { useState } from "react";
    import LightModeIcon from '@mui/icons-material/LightMode';
    import DarkModeIcon from '@mui/icons-material/DarkMode';

    import React ,{useContext} from "react";
    import {ThemeContext} from "../contexts/ThemeProvider";
    import {LanguageContext} from "../contexts/LanguageProvider";
    export default function Navbar(){
        
        const {theme,toggleTheme}=useContext(ThemeContext);
        const { language, setLanguage,translation }=useContext(LanguageContext);
        const [checked,setChecked]=useState(false);
    
        const handlechange=(e)=>{
            return setChecked(e.target.checked);
        }
        
        const handleLanguage=(e)=>{
            setLanguage(e.target.value);
        }
        return(
            <AppBar className="" >
                <Toolbar style={{background:theme==='light'? 'white':'black'}}>
                    <Box className='flex flex-1 flex-row'>
                        <Typography style={{fontSize:'24px', fontWeight:'bold', color:theme==='dark'? 'white':'black'}}className="text-black">
                            {translation[language].Title}
                        </Typography>
                    </Box>
                    <Box className='flex flex-row space-x-2 item-center justify-center'>
                    <Box className=' w-48 md:block hidden'>
                        <TextField
                        select
                        label="Select Language"
                        onChange={handleLanguage}
                        variant="standard"
                        InputLabelProps={{
                            style:{color:theme==='light'?'black':'white'}
                        }}
                        fullWidth>
                        <MenuItem disabled>Select Language</MenuItem>
                        <MenuItem value="en"  >English</MenuItem>
                        <MenuItem value="ur" >Urdu</MenuItem>
                        <MenuItem value="de" >German</MenuItem>
                        </TextField>
                    </Box>
                        <FormControlLabel 
                            control={
                                <Switch
                                    color="primary"
                                    checked={checked}
                                    onChange={handlechange}
                                    sx={{
                                        '& .MuiSwitch-switchBase': {
                                            '&.Mui-checked': {
                                            color: 'black',
                                            '& + .MuiSwitch-track': {
                                                backgroundColor: 'grey', 
                                            },
                                            },
                                        },
                                        '& .MuiSwitch-track': {
                                            backgroundColor: 'grey', // Color of the track when not checked
                                        },
                                        }}
                                    className="border-2 rounded-full"    
                                />
                            }
                            label={checked ? <DarkModeIcon style={{background:theme==='light'? 'white':'black'}}/>:<LightModeIcon className="text-black"/>}
                            onClick={toggleTheme}
                        />

                    </Box>
                </Toolbar>
            </AppBar>
        );
    }