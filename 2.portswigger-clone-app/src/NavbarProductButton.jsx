import { Box} from '@mui/material';
import blue_logo from "./assets/burpuite_blue_logo.svg";
import purple_logo from "./assets/purple_logo.svg"
import grenish_logo from "./assets/grenish_logo.svg"
import green_logo from "./assets/green_logo.svg"
import tourch_image from "./assets/tourch_image.jpeg"
export default function NavbarProductButton(){
    return(
        <Box className='flex flex-row xlg:ml-60 ml-44'>
          <Box className='flex flex-col mr-24 '>
            <a href="#" className='flex items-start '>
            <img src={blue_logo} alt="#" className='w-14 h-auto m-10 mb-0' />
            <Box className='flex flex-col justify-center my-auto mt-10 '>
              <span className='text-sm font-bold text-gray-500'>Burp Suite Enterprise Edition</span>
              <span className='text-sm text-gray-600'>The enterprise-enabled dynamic web vulnerability scanner.</span>
            </Box>
            </a>
            <a href="#" className='flex items-start'>
            <img src={purple_logo} alt="#" className='w-14 h-auto m-10 mb-0' />
            <Box className='flex flex-col justify-center my-auto mt-10'>
              <span className='text-sm font-bold text-gray-500'>Burp Suite Enterprise Edition</span>
              <span className='text-sm text-gray-600'>The enterprise-enabled dynamic web vulnerability scanner.</span>
            </Box>
            </a>
            <a href="#" className='flex items-start'>
            <img src={grenish_logo} alt="#" className='w-14 h-auto m-10 mb-0' />
            <Box className='flex flex-col justify-center my-auto mt-10'>
              <span className='text-sm font-bold text-gray-500'>Burp Suite Enterprise Edition</span>
              <span className='text-sm text-gray-600'>The enterprise-enabled dynamic web vulnerability scanner.</span>
            </Box>
            </a>
            <a href="#" className='flex items-start'>
            <img src={green_logo} alt="#" className='w-14 h-auto m-10 mb-0' />
            <Box className='flex flex-col justify-center my-auto mt-10'>
              <span className='text-sm font-bold text-gray-500'>Burp Suite Enterprise Edition</span>
              <span className='text-sm text-gray-600'>The enterprise-enabled dynamic web vulnerability scanner.</span>
            </Box>
            </a>
            <Box className='m-10 mb-4 border-t border-gray-600 w-1/2 justify-center pt-5'>
              <a className='text-sm font-semibold text-gray-600' href="#">View all product editions</a>
            </Box>  
          </Box>
          
          <Box className=' bg-customeGrey h-full hidden lg:block'>
              <Box className='bg-white w-72 mt-8 mb-12 mx-5 px-8 pt-5 pb-12 space-y-5'>
              <a href="" className=''>
                <span className='text-sm font-bold bg'>Burp Scanner <br /></span>
                <span className='text-sm text-gray-600 '>Burp Suite's web vulnerability <br /> scanner</span>
              </a>
              <img className='w-56'src={tourch_image} alt="" />
              </Box>
          </Box>
      </Box>
    );
}