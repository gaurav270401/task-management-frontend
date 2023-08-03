import { Button, Table, TableBody, TableCell, TableHead, TableRow,styled } from "@mui/material";
import { getTasks,deleteTask } from "../service/api";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const StyledTable= styled(Table)`
    width:90%;
    margin:50px auto 0 auto;
`
const THead=styled(TableRow)`
    background:#2471A3;
    &> th{
        color:#fff;
        font-size:20px;
    }
`
const TCell=styled(TableRow)`
    &> td{
        font-size:20px;
    }
`


const TaskHistory = () =>{
    const [users,setUser]=useState([]);

    useEffect(()=>{
        getAllTasks();
    },[]);

    const getAllTasks= async ()=>{
        let response=await getTasks();
        setUser(response.data);
        // console.log(response.data);

    }

    const deletetask=async(id)=>{
        await deleteTask(id);
        getAllTasks();
    }
    return(
        <StyledTable>
        <TableHead>
            <THead>
                <TableCell>Task No.</TableCell>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Status</TableCell>
                <TableCell></TableCell>
            </THead>
        </TableHead>
            <TableBody>
                {
                    users.map(user =>(
                        <TCell>
                            <TableCell>{user.userId}</TableCell>
                            <TableCell>{user.title}</TableCell>
                            <TableCell>{user.desc}</TableCell>
                            <TableCell>{user.status}</TableCell>
                            <TableCell>
                                <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edittask/${user.userId}`}>Edit</Button>
                                <Button variant="contained" color="secondary" onClick={()=> deletetask(user.userId)}>Delete</Button>
                            </TableCell>
                        </TCell>
                    ))
                }
            </TableBody>
        </StyledTable>
    );
    
  }
  
  export default TaskHistory;