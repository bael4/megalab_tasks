
import React from 'react';
import './App.css';

import Tasks from './Tasks';

function App() {

const tasks = ['Buy lemonade', 'Make toasts', 'Repair car', 'Play games', 'Pet a cat'];


  
  const taskItems = tasks.map((task) =>
    <li key={task}>{task}</li>
  );
 
  return (
    
    <div>
      <Tasks tasks={taskItems}/>
    </div>
  );

}

export default App;
