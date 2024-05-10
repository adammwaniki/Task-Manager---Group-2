import React, { useState, useEffect } from 'react';
import UserProfile from "../Components/UserProfile";
import NavBar from "../Components/Navbar";

// Task Component
const Task = ({ task, description, onComplete, onDelete, actionLabel }) => {
  return (
    <tr>
      <td>{task}</td>
      <td>{description}</td>
      <td>
        {/*<button className="dashboard-button" onClick={onComplete}>{actionLabel}</button>*/}
        <button className="dashboard-button" onClick={onDelete}>Delete</button>
      </td>
    </tr>
  );
};

// Dashboard Component
const Dashboard = ({ moveTaskToHistory }) => {
  const [tasks, setTasks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch tasks associated with the logged-in user
  const fetchTasks = () => {
    fetch(`http://localhost:3000/users/${localStorage.getItem('loggedInUser')}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch tasks.');
        }
        return response.json();
      })
      .then(userData => {
        setTasks(userData.tasks || []);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  };

  // useEffect to fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  // Add a new task
  const addTask = (newTask, newDescription) => {
    const updatedTasks = [...tasks, { task: newTask, description: newDescription }];
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };

  // Remove a task by index
  const removeTask = (taskId) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };
/*
  // Complete a task by index
  const completeTask = (taskId) => {
    const completedTask = tasks[taskId];
    const updatedTasks = tasks.filter((task, index) => index !== taskId);
    moveTaskToHistory(completedTask);
    setTasks(updatedTasks);
    updateTasks(updatedTasks);
  };
*/
  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Update tasks on the server
  const updateTasks = (updatedTasks) => {
    fetch(`http://localhost:3000/users/${localStorage.getItem('loggedInUser')}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ tasks: updatedTasks })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to update tasks.');
        }
        // Fetch updated tasks after successfully updating
        fetchTasks();
      })
      .catch(error => console.error('Error updating tasks:', error));
  };

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
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {filteredTasks.map((task, index) => (
              <Task
                key={index}
                task={task.task}
                description={task.description}
                //onComplete={() => completeTask(index)}
                onDelete={() => removeTask(index)}
                moveTaskToHistory={moveTaskToHistory}
                actionLabel="Complete"
              />
            ))}
          </tbody>
        </table>
        <NewTasks onAddTask={addTask} />
      </div>
    </div>
  );
};

// NewTasks Component
const NewTasks = ({ onAddTask }) => {
  const [newTask, setNewTask] = useState('');
  const [newDescription, setNewDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      onAddTask(newTask.trim(), newDescription.trim());
      setNewTask('');
      setNewDescription('');
    }
  };

  return (
    <>
      <NavBar />
      <UserProfile />
      <div className='dashboard-tasks'>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            placeholder="Enter new task..."
          />
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
            placeholder="Enter description..."
          />
          <button className="dashboard-button" type="submit">Add Task</button>
        </form>
      </div>
    </>
  );
};

/*
// The History component 
const History = ({ tasks = [], moveTaskToDashboard, deleteTask }) => {
  return (
    <div className="history-container">
      <h1>History</h1>
      <table className="history-table">
        <thead>
          <tr>
            <th>Task</th>
            <th>Description</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task, index) => (
            <Task
              key={index}
              task={task.task}
              description={task.description}
              onComplete={() => moveTaskToDashboard(task)}
              onDelete={() => deleteTask(index)}
              actionLabel="Incomplete"
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};
*/
export default Dashboard;