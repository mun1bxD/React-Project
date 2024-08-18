import { TextField, Typography,Button, List, ListItem,Checkbox,IconButton } from "@mui/material";
import { Box } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import {addtodo,removetodo,toggletodo} from '../features/todoSlice';
import {useSelector,useDispatch} from 'react-redux'
import { useState } from "react";
export default function Todo(){

    const [task,setTask]=useState('');
    const dispatch=useDispatch();
    const todos=useSelector((state)=>state.Todos)

    const handleInput=()=>{
        if(task.trim()!==''){
            dispatch(addtodo(task));
            setTask('');
        }
    }
    const handleToggle=(id)=>{
        dispatch(toggletodo(id));
    }
    const handleDelete=(id)=>{
        dispatch(removetodo(id));
    }
    return(

        <Box className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen w-screen flex overflow-hidden justify-center items-center'>
            <Box className='h-2/3 w-1/2 bg-white rounded-3xl flex flex-col '>
                <Typography className="font-bold mt-8 ml-8">To-Do List</Typography>
                <Box className='flex items-center justify-center mt-4 mb-8'>
                    <TextField 
                    id="outlined-basic" 
                    label="Enter Task"  
                    className="rounded-xl w-1/2"
                    onChange={(e)=>setTask(e.target.value)} 
                    value={task}
                    sx={{
                        '& .MuiInputBase-root': {
                            height: '40px', // Adjust height as needed
                        },
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderRadius: '0.5rem',
                        },
                        }}/>
                    <Button onClick={handleInput} className="bg-orange-500 ml-2 text-white hover:bg-orange-400">ADD</Button>
                </Box>
                <Box className='flex overflow-auto flex-col'>
                    <List className="mx-auto">
                        {todos.map((todo)=>(
                            <ListItem key={todo.id} className="flex items-center">
                                <Checkbox>
                                    checked={todo.toggletodo}
                                    onChange={()=>handleToggle(todo.id)}
                                </Checkbox>
                                <Typography>
                                    {todo.text}
                                </Typography>
                                <Button>
                                    <IconButton onClick={()=>handleDelete(todo.id)}>
                                        <DeleteIcon/>
                                    </IconButton>
                                </Button>
                            </ListItem>
                        ))}
                    </List>
                </Box>
            </Box>
        </Box>
    );
}