import { Box,Typography,List,ListItem ,IconButton} from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer(){
    const iconStyle = { color: 'white' }; 
    return(
    <Box 
        className='bg-customeBlue pl-8 pt-4 '
        sx={{color:'white'}}
        >
    <Box class="container mx-auto flex flex-wrap justify-between ">
        <Box class="w-full md:w-1/4 mb-6 md:mb-0">
        <Typography class="text-lg font-bold mb-2">About Us</Typography>
        <Typography>WanderLuxe is your premier travel service provider, offering tailor-made travel experiences and unforgettable adventures around the globe. Discover your dream destination with us and make every journey extraordinary.</Typography>
        </Box>
        <Box class="w-full md:w-1/4 mb-6 md:mb-0 ">
        <Typography class="text-lg font-bold mb-2">Contact Us</Typography>
        <Typography>Phone: (123) 456-7890</Typography>
        <Typography>Email: info@TravelMate.com</Typography>
        <Typography>Address: 456 Adventure Lane, Suite 100, Travel City, TC 78901</Typography>
        </Box>
        <Box class="w-full md:w-1/4 mb-6 md:mb-0">
        <Typography class="text-lg font-bold mb-2">Follow Us</Typography>
        <Box 
        class="flex space-x-4 "
        sx={{color:'white'}}>
            <IconButton  className='pl-0' style={iconStyle}>
                <InstagramIcon/>
            </IconButton>
            <IconButton style={iconStyle}>
                <FacebookIcon/>
            </IconButton>
            <IconButton style={iconStyle}>
                <TwitterIcon/>
            </IconButton>
        </Box>
        </Box>
        <Box class="w-full md:w-1/4 mb-6 md:mb-0">
        <Typography class="text-lg font-bold mb-2">Legal</Typography>
        <List>
            <ListItem className="p-0"><a href="#" class="text-white hover:text-blue-400">Privacy Policy</a></ListItem>
            <ListItem className="p-0"><a href="#" class="text-white hover:text-blue-400">Terms of Service</a></ListItem>
        </List>
        </Box>
    </Box>
    <Box class="text-center mt-6">
        <Typography>&copy; 2024 WanderLuxe. All rights reserved.</Typography>
    </Box>
    </Box>
    );
}