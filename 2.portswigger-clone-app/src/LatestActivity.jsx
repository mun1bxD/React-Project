import { Box ,Typography,Button} from "@mui/material";
import Portswigger from './assets/Portswigger.svg';
import Portswigger_Research from './assets/Portswigger_research.svg';
export default function LatestActivity(){
    return(
        <Box className='items-center'>
            <Typography className=" my-12 text-6xl font-bold text-center text-customeDarkgrey">Our <span className="text-customBlue">latest news</span> and <span className="text-customBlue">activity</span></Typography>
            <Box className='bg-customWhite flex flex-wrap items-center justify-center py-10 px-5 '>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customOrange m-5 md:p-5 px-5 py-10 space-y-5 text-white'>
                    <Box component="img" src={Portswigger}></Box>
                    <Typography className="font-bold">July 31, 2024</Typography>
                    <Typography className="text-lg">Unlock API scanning with Burp Suite</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customeBlueGreen m-5 md:p-5 px-5 py-10  space-y-5 text-white'>
                    <Box component="img" src={Portswigger_Research}></Box>
                    <Typography className="font-bold">July 9, 2024</Typography>
                    <Typography className="text-lg">Fickle PDFs: exploiting browser rendering discrepancies</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customOrange m-5 md:p-5 px-5 py-10  space-y-5 text-white'>
                    <Box component="img" src={Portswigger}></Box>
                    <Typography className="font-bold">June 27, 2024</Typography>
                    <Typography className="text-lg">Investing to deliver more</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customeBlueGreen m-5 md:p-5 px-5 py-10  space-y-5 text-white'>
                    <Box component="img" src={Portswigger_Research}></Box>
                    <Typography className="font-bold">July 02, 2024</Typography>
                    <Typography className="text-lg">Previewing three publications coming to DEF CON & Black Hat USA</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customOrange m-5 md:p-5 px-5 py-10  space-y-5 text-white'>
                    <Box component="img" src={Portswigger}></Box>
                    <Typography className="font-bold">May 16, 2024</Typography>
                    <Typography className="text-lg">Burp Suite Enterprise Edition spring update 2024</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                <Box className=' w-full md:h-80 md:w-80 rounded bg-customeBlueGreen m-5 md:p-5 px-5 py-10  space-y-5 text-white'>
                    <Box component="img" src={Portswigger_Research}></Box>
                    <Typography className="font-bold">June 11, 2024</Typography>
                    <Typography className="text-lg">New exotic events in the XSS cheat sheet</Typography>
                    <a href="#" className="font-bold text-xl">Read more</a>
                </Box>
                
            </Box>
            <Box className=' flex flex-row items-center w-full bg-customWhite mb-10'>
                <Button className="mx-auto bg-customOrange rounded-3xl py-3 px-3 text-white hover:bg-customOrange">READ MORE ON OUR BLOG</Button>
            </Box>
        </Box>
    );
}