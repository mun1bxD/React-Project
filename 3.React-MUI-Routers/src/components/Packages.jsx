import { Box, Typography } from "@mui/material";
import image4 from '../assets/image4.jpeg';
import image5 from '../assets/image5.jpeg';
import image6 from '../assets/image6.jpeg';
export default function Packages(){
    return(
        <Box>
        <Box className='my-8 mx-8 '>
            <Typography className="text-4xl text-blue-500">Exclusive Travel Packages</Typography>
            <Typography className="text-xl text-blue-500">Discover our exclusive travel packages tailored to offer unique experiences and exceptional value. Whether you're seeking relaxation, adventure, or cultural immersion, our curated options provide memorable trips at great prices. Explore now and find the perfect package to suit your travel desires.</Typography>
        </Box>
        <Box className='
            flex  items-center justify-center space-x-4 p-8'>
            <Box className='flex flex-col space-y-2'>
                <Box component='img' src={image4} className="w-full h-52 "></Box>
                <Box>
                    <Typography className="text-blue-500 font-bold">Exclusive Getaway - $999</Typography>
                    <Typography className="text-blue-500">Enjoy a relaxing all-inclusive retreat with accommodations, meals, and activities covered. Perfect for a stress-free escape.</Typography>
                </Box>            
            </Box>
            <Box className='flex flex-col space-y-2'>
                <Box component='img' src={image5} className="w-full h-52 "></Box>
                <Box>
                    <Typography className="text-blue-500 font-bold">Adventure Quest - $1,299</Typography>
                    <Typography className="text-blue-500">Experience thrilling outdoor adventures with guided tours, equipment, and accommodations included. Ideal for thrill-seekers.</Typography>
                </Box>            
            </Box>
            <Box className='flex flex-col space-y-2'>
                <Box component='img' src={image6} className="w-full h-52 "></Box>
                <Box>
                    <Typography className="text-blue-500 font-bold">Cultural Immersion - $1,199</Typography>
                    <Typography className="text-blue-500">Explore local culture and history with curated tours, authentic dining experiences, and comfortable lodging. Great for culture enthusiasts.</Typography>
                </Box>            
            </Box>
        </Box>
        </Box>
    );
}