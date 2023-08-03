import { Box, Typography, styled } from "@mui/material"
import Banner from "./Banner";

const Container=styled(Box)`
   padding:20px
`

const SubHeading=styled(Typography)`
 font-size:50px;
 font-weight:200;
`
const Containt=styled(Typography)`
    text-align:justify;
`
const Crud=styled(Typography)`
 padding:10px;
  text-align:left;
`
const TaskMan = () =>{
    return(
        <>
            <Banner/>
            <Container>
                <SubHeading>About</SubHeading>
                <Containt>Task management is the process of monitoring your project's tasks through their various stages from start to finish. By considering this problem statement, I have implemented a web app using ReactJS at the frontend and Node.js with Express.js at the backend, along with a MongoDB database. The web app is designed to perform CRUD operations, where CRUD stands for Create, Read, Update, and Delete.
 </Containt>

<Crud>a. Create: Creating a post or adding the table row, adding data into the webpage, or creating content.<br/>
b. Read: Reading or retrieving data from web-page <br/>
c. Update: Updating or editing existing content in the webpage <br/>
d. Deleting: Deleting and removing the entry or content/post from the webpage</Crud>

            </Container>
        </>
        
            
    );
    
  }
  
  export default TaskMan;