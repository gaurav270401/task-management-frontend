import axios from 'axios';

const URL="http://localhost:8000";                                       
 export const addTask=async (data)=>{              //async/await,promises
    try {
        return await axios.post(`${URL}/addtask`,data);
    } catch (error) {
        console.log("Error while calling addtask api",error);
    }
    
}

export const getTasks= async() =>{
    try {
        return await axios.get(`${URL}/tasks`)
    } catch (error) {
        console.log("Error while calling gettask api",error);
    }
}

export const getTaskDetails=async(id) =>{
    try {
        return await axios.get(`${URL}/${id}`)
    } catch (error) {
        console.log("Error while calling gettaskdetails api",error);
    }
}

export const editTask=async(data,id)=>{
    try {
        return await axios.post(`${URL}/${id}`,data);
    } catch (error) {
        console.log("Error while calling edittask api",error);
    }
}

export const deleteTask=async(id)=>{
    try {
        return await axios.delete(`${URL}/${id}`);
    } catch (error) {
        console.log("Error while calling deletetask api",error);
    }
}
