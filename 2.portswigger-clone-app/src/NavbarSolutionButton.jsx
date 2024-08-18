import { Box, Typography } from '@mui/material';
import men_women_img from "./assets/men_women_img.jpeg";

export default function NavbarSolutionButton() {
  return (
    <Box className='hidden ml-44 mr-20 msm:flex msm:flex-row'>
      <Box className='flex flex-col xls:mr-20 xls:flex'>
        <Box className='flex flex-wrap'>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
          <Box className='w-64 m-5'>
            <Typography variant='h6' className='text-sm font-bold text-gray-600'>
              Attack surface visibility
            </Typography>
            <Typography className='text-sm text-gray-600'>
              Improve security posture, prioritize manual testing, free up time.
            </Typography>
          </Box>
        </Box>
        <Box className='m-5 mb-4 border-t border-gray-600 w-1/2 justify-center pt-5'>
          <a className='text-sm font-semibold text-gray-600' href="#">View all product editions</a>
        </Box>
      </Box>

      <Box className='bg-customeGrey h-full hidden xls:block'>
        <Box className='bg-white w-72 mt-8 mb-12 mx-5 px-8 pt-5 pb-12 space-y-5'>
          <a href="">
            <Typography variant='h6' className='text-sm font-bold'>Product comparison</Typography>
            <Typography className='text-sm text-gray-600'>
              What's the difference between Pro and Enterprise Edition?
            </Typography>
          </a>
          <img className='w-56' src={men_women_img} alt="" />
        </Box>
      </Box>
    </Box>
  );
}
