// import logo from './logo.svg';
import './App.css';
import AddTask from './components/AddTask';
import NavBar from './components/NavBar';
import TaskMan from './components/TaskMan';
import TaskHistory from './components/TaskHis';
import EditTask from './components/EditTask';

import {BrowserRouter,Routes,Route} from 'react-router-dom';  

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <NavBar />
      <Routes>     
        <Route path='/' element={<TaskMan />} />
      
          <Route path='/addtask' element={<AddTask />} />
          
          <Route path='/tasks' element={<TaskHistory />} />
          <Route path='/edittask/:id' element={<EditTask />}/>
      
      </Routes>
    </BrowserRouter>
      
    </div>
  );
}


export default App;
