import { Box } from "@mui/material";
import sponcered_img1 from "./assets/sponcered_img1.jpeg";
import sponcered_img2 from './assets/sponcered_img2.png';
import sponcered_img3 from './assets/sponcered_img3.svg';
import sponcered_img4 from './assets/sponcered_img4.svg';
import sponcered_img5 from './assets/sponcered_img5.svg';
import sponcered_img6 from './assets/sponcered_img6.svg';
import sponcered_img7 from './assets/sponcered_img7.svg';
export default function Sponcered(){
    return(
        <>
        <Box className='flex items-center flex-row  space-x-8 mx-12 mt-14'>
            <Box className='block md:flex w-full tems-center'>
                <img src={sponcered_img1} alt="" />
                <h1 className="text-3xl font-bold text-customBlue ml-6">"Best in class for security testing"</h1>
            </Box>
            <Box className='block md:flex w-full items-center'>
                <img src={sponcered_img2} alt="" />
                <h1 className="text-3xl font-bold text-customBlue ml-6">"A must-have tool for security engineers"</h1>
            </Box>
        </Box>
            <Box className='flex flex-row w-full flex-wrap  space-x-20  justify-center items-center'>
                <img src={sponcered_img3} alt="" className="size-40  grayscale transition-all hover:grayscale-0"/>
                <img src={sponcered_img4} alt="" className="size-20  grayscale transition-all hover:grayscale-0"/>
                <img src={sponcered_img5} alt="" className="size-40  grayscale transition-all hover:grayscale-0"/>
                <img src={sponcered_img6} alt="" className="size-40  grayscale transition-all hover:grayscale-0"/>
                <img src={sponcered_img7} alt="" className="size-20  grayscale transition-all hover:grayscale-0"/>
            </Box>
        </>
    );
}