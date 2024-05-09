import React, { useState } from 'react';
import UserProfile from "../Components/UserProfile"
import NavBar from "../Components/Navbar"

// Task Component
const Task = ({ task, onComplete, onDelete }) => {
  return (
    <tr>
      <td>{task}</td>
      <td><button className="dashboard-button" onClick={onComplete}>Complete</button></td>
      <td><button className="dashboard-button" onClick={onDelete}>Delete</button></td>
    </tr>
  );
};


// Dashboard Component
const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Add a new task
  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  // Remove a task by index
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  // Complete a task by index
  const completeTask = (index) => {
    const completedTask = tasks[index];
    removeTask(index);
    // Send completed task to history component
    console.log('Completed Task:', completedTask);
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <h1>Dashboard</h1>
        <input
          className="dashboard-input"
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <table className="dashboard-table">
          <thead>
            <tr>
              <th>Task</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <Task
                key={index}
                task={task}
                onComplete={() => completeTask(index)}
                onDelete={() => removeTask(index)}
              />
            ))}
          </tbody>
        </table>
        <NewTasks onAddTask={addTask} />
      </div>
    </div>
  );
};

// NewTasks Component done by Austin 
const NewTasks = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim());
      setNewTask('');
    }
  };

  return (
    <>
    <NavBar />
    <UserProfile/>
      <div className='dashboard-tasks'>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Enter new task..."
        />
        <button className="dashboard-button" type="submit">Add Task</button>
      </form>
      </div>
    </>
  );
};

export default Dashboard;