import React, { useState } from 'react';

// Task Component
const Task = ({ task, onComplete, onDelete }) => {
  return (
    <tr>
      <td>{task}</td>
      <td><button onClick={onComplete}>Complete</button></td>
      <td><button onClick={onDelete}>Delete</button></td>
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
    // (You would need to implement the history component separately)
    console.log('Completed Task:', completedTask);
  };

  // Filter tasks based on search term
  const filteredTasks = tasks.filter(task =>
    task.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Dashboard</h1>
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table>
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
  );
};

// NewTasks Component
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
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Enter new task..."
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default Dashboard;
