import { Box, Typography } from "@mui/material";
import icon1 from '../assets/icon1.jpg';
import icon2 from '../assets/icon2.jpeg';
import icon3 from '../assets/icon3.jpeg';
import icon4 from '../assets/icon4.jpeg';

import React ,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeProvider";
import {LanguageContext} from "../contexts/LanguageProvider";

export default function MainPageIcons(){
    const {theme}=useContext(ThemeContext);
    const { language, translation }=useContext(LanguageContext);

    return(
    <Box className=' mx-4 flex flex-col mb-4'>
        <Typography style={{fontSize:'1.1rem', fontWeight:'bold' ,color:theme==='light'?'black':'white'}}>
        {translation[language].IconHeading}
        </Typography>
        <Box className=' w-full flex flex-row space-x-4 mt-4 flex-wrap'>
            <Box component='img' className="w-1/5" src={icon1}></Box>
            <Box component='img' className="w-1/5" src={icon2}></Box>
            <Box component='img' className="w-1/5"src={icon3}></Box>
            <Box component='img' className="w-1/5" src={icon4}></Box>
        </Box>
    </Box>
    );
}