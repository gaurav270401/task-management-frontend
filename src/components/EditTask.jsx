
import { useState,useEffect} from "react";
import { FormControl, FormGroup, InputLabel,Input, Typography,styled, Button} from "@mui/material";
import {editTask, getTaskDetails} from "../service/api";
import { useNavigate,useParams } from "react-router-dom";


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

const EditTask = () =>{
  const {id} = useParams();
  const [user,setUser] =useState(defaultobject);
  const navigate = useNavigate();

  useEffect(()=>{
   loadTaskDetails();
   // eslint-disable-next-line
  },[]);

  const loadTaskDetails=async()=>{
    const res= await getTaskDetails(id);
    console.log(res.data[0]);
    setUser(res.data[0]);

  }

  const onValueChange= (e) =>{
     setUser({...user,[e.target.name] : e.target.value});
  }

  const editTaskData =async ()=>{
    await editTask(user,id);
    navigate("/tasks");
  }
  return(
    <Header>
    <Typography variant="h4">Edit User</Typography>
      <FormControl>
        <InputLabel>Title</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="title" value={user.title}/>
      </FormControl>
      <FormControl>
        <InputLabel>Description</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="desc" value={user.desc}/>
      </FormControl>
      <FormControl>
        <InputLabel>Status</InputLabel>
        <Input onChange={(e)=>onValueChange(e)} name="status" value={user.status}/>
      </FormControl>
      
      <FormControl>
        <Button variant="outlined" onClick={()=>editTaskData()}>Edit</Button>
      </FormControl>
    </Header>
      
  );
  
}

export default EditTask;