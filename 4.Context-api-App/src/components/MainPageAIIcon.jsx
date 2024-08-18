import { Box, Typography } from "@mui/material";
import AI1 from '../assets/AI1.jpeg';
import AI2 from '../assets/AI2.jpeg';
import AI3 from '../assets/AI3.jpeg';
import AI4 from '../assets/AI4.jpeg';

import React ,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeProvider";
import {LanguageContext} from "../contexts/LanguageProvider";

export default function MainPageAIIcons(){
    const {theme}=useContext(ThemeContext);
    const { language,translation }=useContext(LanguageContext);
    return(
    <Box className=' mx-4 flex flex-col mb-4'>
        <Typography style={{fontSize:'1.1rem', fontWeight:'bold',  color:theme==='light'?'black':'white'}}>
        {translation[language].AI_heading}
        </Typography>
        <Box className=' w-full flex flex-row space-x-4 mt-4 flex-wrap'>
            <Box component='img' className="w-1/5" src={AI1}></Box>
            <Box component='img' className="w-1/5" src={AI2}></Box>
            <Box component='img' className="w-1/5"src={AI3}></Box>
            <Box component='img' className="w-1/5" src={AI4}></Box>
        </Box>
    </Box>
    );
}