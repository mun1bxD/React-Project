import { Box, TextField,Checkbox,FormControlLabel,Typography,Button} from "@mui/material";
import LockOpenIcon from '@mui/icons-material/LockOpen';
export default function Signup(){
    return(
        <Box className='items-center md:justify-center flex flex-col h-screen mt-12 space-y-6 px-4'>
            <Typography><LockOpenIcon/>Sign up</Typography>
            <TextField
              required
              label="Email Address"
              autoFocus
              className="md:w-1/4 w-full"
            />
            <TextField
              required
              label="Password"
              autoFocus
              className="md:w-1/4 w-full"
            />
            <FormControlLabel
            control={<Checkbox />}
            label="Remember me"
            className="left-0"
            />
            <Button className="md:w-1/4 w-full" variant='contained'>SIGN UP</Button>
            <a href="#" className="text-customeBlue underline">Forgot Password?</a>
        </Box>
    );
}