import React from 'react';

const Task = ({ task, onComplete, onDelete }) => {
  
  // Function to send a PATCH request when a new task is submitted
  const sendPatchRequest = () => {
    const url = 'http://localhost:3000/users'; // URL for your API endpoint
    const data = {
      task: task // Assuming task is the new task being added
    };

    fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log('PATCH request successful:', data);
        // You can perform additional actions after the PATCH request is successful
      })
      .catch(error => {
        console.error('There was a problem with the PATCH request:', error);
        // You can handle errors here, such as displaying an error message to the user
      });
  };

  return (
    <tr>
      <td>{task}</td>
      <td><button onClick={() => { onComplete(); sendPatchRequest(); }}>Complete</button></td>
      <td><button onClick={() => { onDelete(); sendPatchRequest(); }}>Delete</button></td>
    </tr>
  );
};

export default Task;
