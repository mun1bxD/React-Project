import { Box, Typography } from "@mui/material";
import image1 from '../assets/image1.jpeg';
import image2 from '../assets/image2.jpeg';
import image3 from '../assets/image3.jpeg';

export default function Destinations(){
    return(
        <Box className='h-screen'>
        <Box className='m-8 space-y-4'>
            <Typography className="text-blue-500 text-4xl">Discover Your Next Destination</Typography>
            <Typography className="text-blue-500">Explore our curated list of top travel destinations around the world. From bustling cities to tranquil landscapes, find the perfect spot for your next adventure. Each destination offers unique experiences, local attractions, and hidden gems waiting to be discovered. Start your journey here and let us help you uncover the magic of your next travel spot.</Typography>
        </Box>
        <Box className='w-full  
            flex 
            flex-row 
            justify-center 
            flex-wrap 
            items-center'>
            <Box component='img' src={image1} className="rounded-lg m-4"></Box>
            <Box component='img' src={image2} className="rounded-lg m-4"></Box>
            <Box component='img' src={image3} className="rounded-lg m-4"></Box>
        </Box>
        </Box>
    );
}