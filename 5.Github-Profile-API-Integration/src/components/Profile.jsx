import { Box, Typography, TextField, Button } from '@mui/material';
import react1 from '../assets/react.svg';
import { getFollowers, getProfile, getStarred, getFollowing } from '../api/githubService.js';
import { useEffect, useState } from 'react';

export default function Profile() {
  const [username, setUsername] = useState('');
  const [starred, setStarred] = useState([]);
  const [profile, setProfile] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);

  const fetchData = async () => {
    try {
      const [profileResponse, followersResponse, followingResponse, starredResponse] = await Promise.all([
        getProfile(username),
        getFollowers(username),
        getFollowing(username),
        getStarred(username),
      ]);
      setProfile(profileResponse.data);
      setFollowers(followersResponse.data);
      setFollowing(followingResponse.data);
      setStarred(starredResponse.data);
    } catch (error) {
      console.log('Error fetching data', error);
    }
  };

  useEffect(() => {
    if (username) {
      fetchData();
    }
  }, []);

  const handleShowClick = () => {
    if (username) {
      fetchData();
    }
  };

  const handleInput = (e) => {
    setUsername(e.target.value);
  };

  return (
    <Box className='flex flex-col'>
      <Box className='flex flex-row items-center justify-center m-8 space-x-2'>
        <TextField
          label='Username'
          variant='outlined'
          value={username}
          onChange={handleInput}
          sx={{
            width: '300px',
            '& .MuiInputBase-root': {
              height: '35px',
            },
          }}
          InputLabelProps={{
            sx: {
              top: '-10px',
            },
          }}
        />
        <Button variant='outlined' onClick={handleShowClick}>Show</Button>
      </Box>

      <Box className='flex flex-col ml-8 my-2'>
        <Typography className='text-2xl'>GitHub User Info</Typography>
        <Typography className='text-lg'>Find GitHub user information with ease. Search by username to access profile names and descriptions.</Typography>
      </Box>

      <Box className='flex m-16 mt-0 mr-4 space-x-10'>
        <img src={profile?.avatar_url || 'n/a'}  className='w-48 h-48 rounded-full' />
        <Box className='flex flex-col space-y-2 mt-8'>
          <Typography className='text-lg font-semibold'>Name: {profile?.name || 'n/a'}</Typography>
          <Typography className='text-lg font-semibold'>{profile?.login || 'n/a'}</Typography>
          <Typography className='text-lg font-semibold'>Followers: {followers.length || '0'}</Typography>
          <Typography className='text-lg font-semibold'>Following: {following.length || '0'}</Typography>
        </Box>
      </Box>

      <Box className='ml-8'>
        <Typography className='text-lg font-semibold'>More Information</Typography>
        <Typography>URL: {profile?.html_url || 'n/a'}</Typography>
        <Typography>Company: {profile?.company || 'n/a'}</Typography>
        <Typography>Location: {profile?.location || 'n/a'}</Typography>
        <Typography>Created at: {profile?.created_at || 'n/a'}</Typography>
        <Typography>Updated at: {profile?.updated_at || 'n/a'}</Typography>
        <Typography>Starred Repos: {starred.length || '0'}</Typography>
      </Box>
    </Box>
  );
}
