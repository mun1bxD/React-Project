import { Box,Typography } from "@mui/material";
import men_women_img from "./assets/men_women_img.jpeg";
import burpsuite_label_logo from "./assets/burpsuite_label_log.svg";
import women_img from './assets/women_img.jpeg';
import websecurity_logo from './assets/websecurity_logo.svg';
import men_micoscope from './assets/men_micoscope.jpeg';
import research_logo from './assets/research_logo.svg';
import burpuite_certification from './assets/burpuite_certification.svg';
import certifcation_with_women from './assets/certifcation_with_women.png';
export default function Features(){
    return(
    <Box className='h-full bg-customBlue items-center justify-center flex  flex-wrap lg:space-x-10  px-10   space-y-10 py-10'>
    
        <Typography className="mx-auto text-white text-center pt-16 text-6xl font-bold">Everything you need to <span className="text-customeGrey">stay ahead</span></Typography>
        <Typography className=" text-white text-center w-full items-center  text-2xl mt-5">Software and expertise for everyone who needs to <span className="font-bold"> secure the web</span></Typography>
        <Box className='lg:w-customW1 w-full bg-white mx-auto flex  p-8  md:p-0 space-x-12 rounded-md md:py-8  relative'>
            <Box component="img" className='p-12 pr-0 ' src={men_women_img}></Box>
                <Box className='space-y-5 my-auto'>
                    <Box>
                        <Box component="img" src={burpsuite_label_logo}>
                        </Box>
                    </Box>  
                    <Typography className='my-8 pr-4 text-lg text-customeDarkgrey'>The most widely used web application security testing software. </Typography>
                    <a href="" className="text-xl text-customOrange font-bold">Find out more</a>
            </Box>
            <span className="absolute z-10 w-28 h-11  text-center text-white font-bold text-xl rounded bg-customlightBlue left-0 -top-4  px-2 py-1">
            Test</span>
        </Box>
        <Box className='lg:w-customW1 w-full bg-white flex space-x-12 rounded-md py-8 relative'>
            <Box component="img" className='p-12 pr-0 ' src={women_img}></Box>
                <Box className='space-y-5 my-auto'>
                    <Box>
                        <Box component="img" src={websecurity_logo}>
                        </Box>
                    </Box>  
                    <Typography className='my-8 pr-4 text-lg text-customeDarkgrey'>Boost your cybersecurity skills - with free, online web security training. </Typography>
                    <a href="" className="text-xl text-customOrange font-bold">Find out more</a>
            </Box>
            <span className="absolute z-10 w-28 h-11  text-center text-white font-bold text-xl rounded bg-customePurple left-0 -top-4  px-2 py-1">
            Train</span>
        </Box>
        <Box className='lg:w-customW1 w-full bg-white flex space-x-12 rounded-md py-8 relative'>
            <Box component="img" className='p-12 pr-0 ' src={men_micoscope}></Box>
                <Box className='space-y-5 my-auto'>
                    <Box>
                        <Box component="img" src={research_logo}>
                        </Box>
                    </Box>  
                    <Typography className='my-8 pr-4 text-lg text-customeDarkgrey'>Learn about the latest security exploits - to stay ahead of emerging threats. </Typography>
                    <a href="" className="text-xl text-customOrange font-bold">Find out more</a>
            </Box>
            <span className="absolute z-10 w-28 h-11  text-center text-white font-bold text-xl rounded bg-customeLightBlueGreen left-0 -top-4  px-2 py-1">
            Discover</span>
        </Box>
        <Box className='lg:w-customW1 w-full bg-white flex space-x-12 rounded-md py-8 relative'>
            <Box component="img" className='w-60 p-6' src={burpuite_certification} ></Box>
                <Box className='space-y-5 my-auto'>
                    <Box>
                        <Box component="img" src={certifcation_with_women}>
                        </Box>
                    </Box>  
                    <Typography className='my-8 pr-4 text-lg text-customeDarkgrey'>Showcase your web security testing skills - become a Burp Suite Certified Practitioner. </Typography>
                    <a href="" className="text-xl text-customOrange font-bold">Find out more</a>
            </Box>
            <span className="absolute z-10 w-28 h-11  text-center text-white font-bold text-xl rounded bg-customOrange left-0 -top-4  px-2 py-1">
            Certify</span>
        </Box>
        
    </Box>
    );
}