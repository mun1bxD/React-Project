import { Box, Typography } from "@mui/material";
import MainPageIcons from "./MainPageIcons.jsx";
import MainPageAIIcon from "./MainPageAIIcon.jsx";
import MainPageImages from "./MainPageImages.jsx";

import React ,{useContext} from "react";
import {ThemeContext} from "../contexts/ThemeProvider";
import {LanguageContext} from "../contexts/LanguageProvider";

export default function MainPage(){

    const {theme}=useContext(ThemeContext);
    const { language, translation }=useContext(LanguageContext);

    return(
        <Box className='pt-16' style={{background:theme==='light'?'white':'#313131'}}>
            <Box className='m-4'>
                <Typography style={{fontSize:'2rem', color:theme==='light'?'black':'white'}}>
                    {translation[language].MainHeading}
                </Typography>
                <Typography style={{fontSize:'1.1rem' ,color:theme==='light'?'black':'white'}}>
                    {translation[language].Description}
                </Typography>
            </Box>
            <MainPageImages/>
            <MainPageAIIcon/>
            <MainPageIcons/>
        </Box>
    )
}