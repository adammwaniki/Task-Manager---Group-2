<<<<<<< HEAD
import React, { useState, useEffect } from 'react';

const Dashboard = () => {
  // State variables for activities, new task, and completed tasks
  const [activities, setActivities] = useState([]);
  const [newTask, setNewTask] = useState({ name: '', description: '' });
  const [completedTasks, setCompletedTasks] = useState([]);

  // Fetch activities from the API when component mounts
  useEffect(() => {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(data => setActivities(data.activities))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  // Function to handle adding a new task
  const handleAddTask = () => {
    fetch('http://localhost:3000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTask),
    })
    .then(response => response.json())
    .then(data => {
      setActivities([...activities, data]); // Add the new task to activities list
      setNewTask({ name: '', description: '' }); // Clear input fields
    })
    .catch(error => console.error('Error adding task:', error));
  };

  // Function to handle deleting a task
  const handleDeleteTask = (id) => {
    fetch(`http://localhost:3000/${id}`, {
      method: 'DELETE',
    })
    .then(() => {
      const updatedActivities = activities.filter(activity => activity.id !== id); // Remove the deleted task from activities list
      setActivities(updatedActivities);
    })
    .catch(error => console.error('Error deleting task:', error));
  };

  // Function to handle marking a task as completed
  const handleTaskCompletion = (id) => {
    const completedTask = activities.find(activity => activity.id === id); // Find the completed task
    setCompletedTasks([...completedTasks, completedTask]); // Move the completed task to completedTasks list
    handleDeleteTask(id); // Delete the completed task from activities list
  };

  // Render the dashboard UI
  return (
    <div>
      {/* Table to display the list of tasks */}
      <h2>Task List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through activities and render each task */}
          {activities.map(activity => (
            <tr key={activity.id}>
              <td>{activity.name}</td>
              <td>{activity.description}</td>
              <td>
                {/* Button to delete task */}
                <button onClick={() => handleDeleteTask(activity.id)}>Delete</button>
                {/* Button to mark task as completed */}
                <button onClick={() => handleTaskCompletion(activity.id)}>Complete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Form to add a new task */}
      <h2>Add Task</h2>
      <input
        type="text"
        placeholder="Task Name"
        value={newTask.name}
        onChange={(e) => setNewTask({ ...newTask, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="Task Description"
        value={newTask.description}
        onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
      />
      <button onClick={handleAddTask}>Add Task</button>

      {/* Table to display completed tasks */}
      <h2>Completed Tasks</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {/* Map through completedTasks and render each completed task */}
          {completedTasks.map(task => (
            <tr key={task.id}>
              <td>{task.name}</td>
              <td>{task.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
=======


import React from 'react';

import NavBar from '../Components/Navbar';


function Dashboard() {
  return (
    <div>

        <NavBar/>

      <h2>Dashboard</h2>
      <p>Welcome to the Dashboard!</p>
      <p>Brian feel free to delete the contents of this component, this was just a placeholder</p>
>>>>>>> 15323b043539b8a1ed0a8d1da463b441fe8b168c
    </div>
  );
};


export default Dashboard;

