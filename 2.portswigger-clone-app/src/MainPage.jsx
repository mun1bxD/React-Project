import {Button,Box,Typography, imageListClasses} from "@mui/material";
import mainpage_background from "./assets/mainpage_background.jpeg"
export default function MainPage(){
    return(
        <Box className="h-screen bg-customWhite md:flex md:flex-col flex-row flex-wrap md:overflow-hidden justify-center space-x-6 px-4" >
            <Box className=" py-10 px-20 flex w-full flex-col space-y-8 md:w-customW2">
                <Typography className="text-6xl font-bold text-customBlue">Trusted by <br /><span className="text-customeDarkgrey">security</span> <br /> professionals.</Typography>
                <Typography className="text-2xl text-customeDarkgrey">Best-in-class software and learning for <br /> security engineers and penetration testers.</Typography>
                <Button className='bg-customOrange text-sm  text-white rounded-full p-4 hover:bg-customOrange w-40 '>FIND OUT MORE</Button>
            </Box>
            <Box component="img" src={mainpage_background} className="h-full md:w-customW1 cover hidden md:block"></Box>
        </Box>
    );
}   