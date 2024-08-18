import { Box, Button, Typography } from "@mui/material";

export default function Home(){
    return(
       <Box className='my-16 overflow-hidden '>
        <Box className='m-8 space-y-4 '>
            <Typography className="text-4xl text-blue-500">Explore the World with Us</Typography>
            <Typography className="text-xl text-blue-500">Discover unforgettable destinations, breathtaking experiences, and travel tips to make your journey remarkable. Whether you're seeking adventure, relaxation, or cultural immersion, we are here to guide you every step of the way. Start planning your dream trip today and create memories that will last a lifetime.</Typography>
        </Box>
        <Box className='
            h-full 
            w-screen 
            flex flex-row 
            space-x-4 
            justify-center'>
            <Box className='
            h-1/4 w-1/4 
            bg-blue-500 
            text-white 
            p-4 
            rounded-md 
            space-y-4 
            flex flex-col'>
                <Typography className="font-bold text-xl">Adventure Awaits</Typography>
                <Typography>Embark on thrilling journeys and explore the wildest corners of the world. Perfect for adrenaline seekers and nature enthusiasts.</Typography>
                <Button className="
                    bg-white 
                    text-blue-500 
                    hover:text-white 
                    hover:bg-blue-500">
                    View more
                </Button>
            </Box>
            <Box className='
                h-1/4 w-1/4 
                bg-blue-500 
                text-white 
                p-4 
                rounded-md 
                space-y-4 
                flex flex-col'>
                <Typography className="font-bold text-xl">Adventure Awaits</Typography>
                <Typography>Embark on thrilling journeys and explore the wildest corners of the world. Perfect for adrenaline seekers and nature enthusiasts.</Typography>
                <Button className="
                    bg-white 
                    text-blue-500 
                    hover:text-white 
                    hover:bg-blue-500">
                    View more
                </Button>
            </Box>
            <Box className='
                h-1/4 
                w-1/4 
                bg-blue-500 
                text-white 
                p-4 rounded-md 
                space-y-4 
                flex flex-col'>
                <Typography className="font-bold text-xl">Adventure Awaits</Typography>
                <Typography>Embark on thrilling journeys and explore the wildest corners of the world. Perfect for adrenaline seekers and nature enthusiasts.</Typography>
                <Button className="
                    bg-white 
                    text-blue-500 
                    hover:text-white 
                    hover:bg-blue-500">
                    View more
                </Button>
            </Box>
        </Box>
        </Box>
    );
}