
import { useState } from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button} from "@mui/material";
import {addTask} from "../service/api";
import { useNavigate } from "react-router-dom";


const Header = styled(FormGroup)`
   width:50%;
   margin: 5px auto 0 auto;
   & > div{
    margin-top:20px;
   }
`

const defaultobject={
  title:'',
  desc:'',
  status:''
}

const AddTask = () =>{
  const [user,setUser] =useState(defaultobject);
  const navigate = useNavigate();

  const onValueChange= (e) =>{
     setUser({...user,[e.target.name] : e.target.value});
  }

  const addTaskData =async ()=>{
    await addTask(user);
    navigate("/tasks");
  }
  return(
    <Header>
    <Typography variant="h4">Add Task</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="title" />
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="desc" />
      </FormControl>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="status" />
      </FormControl>
      <FormControl>
        <Button variant="outlined" onClick={()=>addTaskData()}>AddTask</Button>
      </FormControl>
    </Header>
      
  );
  
}

export default AddTask;