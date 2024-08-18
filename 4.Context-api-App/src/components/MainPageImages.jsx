import { Box, Typography } from "@mui/material";
import standard_img1 from '../assets/standard_img1.jpeg';
import standard_img2 from '../assets/standard_img2.jpeg';
import standard_img3 from '../assets/standard_img3.jpeg';
import standard_img4 from '../assets/standard_img4.jpeg';


import React ,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeProvider";
import {LanguageContext} from "../contexts/LanguageProvider";

export default function MainPageImages(){
    const { language,translation }=useContext(LanguageContext);
    const {theme}=useContext(ThemeContext);
    return(
    <Box className=' mx-4 flex flex-col mb-4'>
        <Typography style={{fontSize:'1.1rem', fontWeight:'bold', color:theme==='light'?'black':'white'}}>
            {translation[language].Image_heading}
        </Typography>
        <Box className=' w-full flex flex-row space-x-4 mt-4 flex-wrap'>
            <Box component='img' className="w-1/5" src={standard_img1}></Box>
            <Box component='img' className="w-1/5" src={standard_img2}></Box>
            <Box component='img' className="w-1/5"src={standard_img3}></Box>
            <Box component='img' className="w-1/5" src={standard_img4}></Box>
        </Box>
    </Box>
    );
}