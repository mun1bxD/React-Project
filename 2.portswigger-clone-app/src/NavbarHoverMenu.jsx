import {MenuItem,Menu} from "@mui/material"

export default function NavbarHoverMenu({handleClose,anchorEl}){
    return(
        <>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}
              className=  'mt-2 '
              >
              <MenuItem className='w-48' onClick={handleClose}>Customers</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>About</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>Blog</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>Careers</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>Legal</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>Contact</MenuItem>
              <MenuItem className='w-48' onClick={handleClose}>Resellers</MenuItem>
            </Menu>
        </>
    );
}