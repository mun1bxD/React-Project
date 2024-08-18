import { Box,Typography } from "@mui/material";
import laptop_img from "./assets/laptop_img.jpeg";

export default function NavbarSupportButton(){
    return(
        <Box className='hidden msm:flex msm:flex-row ml-44 mr-20'>
          <Box className='flex flex-col mr-20 '>
          <Box className='flex flex-wrap '>
            <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
            <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
            <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
            <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
            <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
          <Box className='w-64 m-5'>
              <Typography className='text-sm font-bold text-gray-600'>Attack surface visibility</Typography>
              <Typography className='text-sm text-gray-600'>Improve security posture, prioritize manual testing, free up time.</Typography>
            </Box>
            
            </Box>
            <Box className='m-5 mb-4 border-t border-gray-600 w-1/2 justify-center pt-5'>
              <a className='text-sm font-semibold text-gray-600' href="#">View all product editions</a>
            </Box> 
             
          </Box>
          
          
          <Box className=' bg-customeGrey h-full hidden xls:block'>
              <Box className='bg-white w-72 mt-8 mb-12 mx-5 px-8 pt-5 pb-12 space-y-5'>
              <a href="" className=''>
                <span className='text-sm font-bold bg'>Downloads <br /></span>
                <span className='text-sm text-gray-600 '>Download the latest version of burpsuite</span>
              </a>
              <img className='w-56'src={laptop_img} alt="" />
              </Box>
          </Box>

      </Box>
    );
}