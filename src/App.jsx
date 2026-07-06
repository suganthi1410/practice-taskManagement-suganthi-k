import { useState } from 'react'
import TaskLists from './components/TaskLists'
import TaskDetails from './components/TaskDetails';
import { BrowserRouter, Routes, Route } from 'react-router';
import './App.css';


function App() {
 

  return (

    <Routes>
      <Route path="/" element={<TaskLists/>}
       />
       <Route path="/task/:id" element={<TaskDetails />}
/>      
      
    </Routes>
  
    
    
  );
}

export default App
