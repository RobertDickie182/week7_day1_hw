import './App.css';
import { useState } from 'react';

function App() {

  const [tasks, setTasks] = useState([
    {name: "Buy shopping", isCompleted: false},
    {name: "Go to the Gym", isCompleted: false},
    {name: "Walk the dog", isCompleted: true},
  ]);
  
  const [newTask, setNewTask] = useState("");

  const taskNodes = tasks.map(function(task, index) {
    return (
      <li key={index} className={task.isCompleted ? "completed" : "not-completed"}><span>{task.name}</span>
      {task.isCompleted ? <span className="completed">Completed!</span>:
      <button onClick={() => completeTask(index)}>Complete</button>}
      </li>
    )
  });

  const handleTaskInput = function (event) {
    const value = event.target.value;
    setNewTask(value);
  }
  
  
  const completeTask = function(index) {
    const copyTasks = [...tasks];
    const updatedTask = { ...copyTasks[index] };
    updatedTask.isCompleted = true;
    copyTasks[index] = updatedTask;
    setTasks(copyTasks);

  }


  
  const handleFormSubmit = function (event) {
    event.preventDefault();
    const task = {
      name: newTask,
      isCompleted: false
    };
    

  const copyTasks = [...tasks];
  copyTasks.push(task);

  setTasks(copyTasks);
  setNewTask("");
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      <h1>To-Do List!</h1>
      <hr></hr>

      <form onSubmit={handleFormSubmit}>
        {/* <label htmlFor="new-task">Add a new task:</label> */}
        <input id="new-task" type="text" value={newTask} onChange={handleTaskInput} />
        <input type="submit" value="Save new task" />
      </form>


      <ul>
        {taskNodes}
      </ul>

      
    </div>
  );
}

export default App;
